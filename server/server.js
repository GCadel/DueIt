import express from "express";
import cors from "cors";
import dotenv from 'dotenv'
import UserRouter from "./routes/users.js";
import TaskRouter from "./routes/tasks.js"

dotenv.config()
const app = express();
app.use(cors());
app.use(express.json());

app.use("/user", UserRouter);
app.use("/tasks", TaskRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`server listening on http://localhost:${PORT}`);
});
