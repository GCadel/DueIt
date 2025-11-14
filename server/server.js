import express from "express";
import cors from "cors";
import UserRouter from "./routes/users.js";
const app = express();
app.use(cors());
app.use(express.json());

app.use("/user", UserRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`server listening on https://localhost:${PORT}`);
});
