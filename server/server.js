import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import UserRouter from "./routes/users.js";
import TaskRouter from "./routes/tasks.js";
import ProjectsRouter from "./routes/projects.js";
import CategoriesRouter from "./routes/categories.js";
import RolesRouter from "./routes/roles.js";
import PermissionsRouter from "./routes/permissions.js";
import RolePermissionsRouter from "./routes/role_permissions.js";
import StatusRouter from "./routes/status.route.js";
import AuthRouter from "./routes/auth.js";
import passport from "passport";
import session from "express-session";
import BoardsRouter from "./routes/board.route.js";

dotenv.config();
const app = express();

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    cookie: {},
    resave: false,
    saveUninitialized: false,
  })
);
app.use(passport.initialize());
app.use(passport.session());

app.use(cors());
app.use(express.json());

app.use("/user", UserRouter);
app.use("/tasks", TaskRouter);
app.use("/projects", ProjectsRouter);
app.use("/categories", CategoriesRouter);
app.use("/roles", RolesRouter);
app.use("/permissions", PermissionsRouter);
app.use("/role_permissions", RolePermissionsRouter);
app.use("/status", StatusRouter);
app.use("/auth", AuthRouter);
app.use("/boards", BoardsRouter);

// Not found fallback
app.use((req, res) => {
  res.status(404).json({ error: "Not found" });
});

// Error handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  const status = err.status || 500;
  res.status(status).json({ error: err.message });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`server listening on http://localhost:${PORT}`);
});
