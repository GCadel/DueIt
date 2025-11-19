import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { TextField } from "../shared/TextField";
import "../css/CreateTaskPage.css"
import CategoriesAPI from "../services/CategoriesAPI";
import TasksAPI from "../services/TasksAPI";

export const CreateTaskPage = () => {
  const navigation = useNavigate();
  const [taskDetails, setTaskDetails] = useState({
    name: "",
    category: "",
    description: "",
    dueDate: "2026-10-31",
    board_id: "1",
    assignee_id: "1",
    status_id: "1"
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    await TasksAPI.createTask(taskDetails)
  };

  const handleInputChange = (newValue) => {
    setTaskDetails({ ...taskDetails, ...newValue });
  };

  const [categories, setCategories] = useState([]);

  useEffect(() =>{
    const fetchCategories = async () => {
        const data = await CategoriesAPI.getAllCategories();
        console.log("Fetched categories:", data)
        setCategories(data)
    }

    fetchCategories();
  }, []);

  return (
    <div className="create-task-page">
      <h1>Create Task</h1>
      <div>
        <form onSubmit={handleSubmit}>
          <TextField
            value={taskDetails.name}
            label={"Name"}
            fieldName={"name"}
            required={true}
            handleChange={(e) => handleInputChange({ name: e.target.value })}
          />
          <div>
            <label htmlFor='category'>
              Category<span style={{ color: "red" }}>*</span>
            </label>
            <select
              name='category'
              onChange={(e) => handleInputChange({ category: e.target.value })}
              value={taskDetails.category}
              required
            >
              <option value=''>Choose a category</option>
              {categories.map((cat) => (
                <option key={cat.id} value={cat.id}>
                  {cat.name}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor='description'>Description</label>
            <textarea
              name='description'
              onChange={(e) =>
                handleInputChange({ description: e.target.value })
              }
              value={taskDetails.description}
            ></textarea>
          </div>
          <div>
            <label htmlFor='date'>Due Date</label>
            <input
              type='date'
              name='date'
              value={taskDetails.dueDate}
              onChange={(e) => handleInputChange({ dueDate: e.target.value })}
            />
          </div>
          <div className='justify-apart'>
            <button onClick={() => navigation(-1)}>Cancel</button>
            <button>Create Task</button>
          </div>
        </form>
      </div>
    </div>
  );
};
