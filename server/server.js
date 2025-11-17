import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import UserRouter from "./routes/users.js";
import ProjectsRouter from "./routes/projects.js";
import CategoriesRouter from "./routes/categories.js";
import StatusRouter from "./routes/status.js";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

app.use("/user", UserRouter);
app.use("/projects", ProjectsRouter);
app.use("/categories", CategoriesRouter);
app.use("/status", StatusRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`server listening on http://localhost:${PORT}`);
});
