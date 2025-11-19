import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import { TextField } from "../shared/TextField";
import "../css/CreateTaskPage.css";
import CategoriesAPI from "../services/CategoriesAPI";
import TasksAPI from "../services/TasksAPI";

export const EditTaskPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [taskDetails, setTaskDetails] = useState({
    name: "",
    category: "",
    description: "",
    dueDate: "2026-10-31",
    board_id: "1",
    assignee_id: "1",
    status_id: "1",
    help_wanted: false,
  });

  useEffect(() => {
    const fetchTaskData = async () => {
      const taskData = await TasksAPI.getTaskById(id);
      setTaskDetails((prev) => ({
        ...prev,
        ...taskData,
        status_id: taskData.status_id ?? prev.status_id,
      }));
    };

    fetchTaskData();
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTaskDetails((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await TasksAPI.updateTask(taskDetails, taskDetails.status_id);
    navigate("/tasks");
  };

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const data = await CategoriesAPI.getAllCategories();
      console.log("Fetched categories:", data);
      setCategories(data);
    };

    fetchCategories();
  }, []);

  return (
    <div className="create-task-page">
      <h1>Edit Task</h1>
      <div>
        <form onSubmit={handleSubmit}>
          <TextField
            value={taskDetails.name}
            label="Name"
            fieldName="name"
            required={true}
            handleChange={handleInputChange}
          />
          <div>
            <label htmlFor="category">
              Category<span style={{ color: "red" }}>*</span>
            </label>
            <select
              name="category"
              onChange={handleInputChange}
              value={taskDetails.category}
              required
            >
              <option value="">Choose a category</option>
              {categories.map((cat) => (
                <option key={cat.id} value={cat.id}>
                  {cat.name}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="description">Description</label>
            <textarea
              name="description"
              onChange={handleInputChange}
              value={taskDetails.description}
            ></textarea>
          </div>
          <div>
            <label htmlFor="date">Due Date</label>
            <input
              type="date"
              name="date"
              value={taskDetails.dueDate}
              onChange={handleInputChange}
            />
          </div>
          <div className="justify-apart">
            <button type="button" onClick={() => navigate(-1)}>
              Cancel
            </button>
            <button type="submit">Save Task</button>
          </div>
        </form>
      </div>
    </div>
  );
};
