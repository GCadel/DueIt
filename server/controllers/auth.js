import passport from "passport";
import PassportLocal from "passport-local";
import bcrypt from "bcrypt";
import { pool } from "../config/database.js";

passport.serializeUser((user, done) => {
  done(null, user);
});
passport.deserializeUser((user, done) => {
  done(null, user);
});

passport.use(
  new PassportLocal.Strategy(
    {
      usernameField: "email",
      passwordField: "password_hash",
    },
    async (email, password_hash, done) => {
      try {
        const selectQuery = `
          SELECT *
          FROM users
          WHERE email=$1
          `;
        const results = await pool.query(selectQuery, [email]);
        const user = results.rows[0];
        if (user && (await bcrypt.compare(password_hash, user.password_hash))) {
          done(null, user);
        } else {
          done(null, false);
        }
      } catch (error) {
        done(error);
      }
    }
  )
);
