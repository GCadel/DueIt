import { useState } from "react";
import { useNavigate } from "react-router";
import { TextField } from "../shared/TextField";

export const CreateTaskPage = () => {
  const navigation = useNavigate();
  const [taskDetails, setTaskDetails] = useState({
    title: "",
    category: "",
    description: "",
    dueDate: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleInputChange = (newValue) => {
    setTaskDetails({ ...taskDetails, ...newValue });
  };
  return (
    <>
      <h1>Create Task</h1>
      <div>
        <form onSubmit={handleSubmit}>
          <TextField
            value={taskDetails.title}
            label={"Title"}
            fieldName={"title"}
            required={true}
            handleChange={(e) => handleInputChange({ title: e.target.value })}
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
              <option value='option-1'>Option 1</option>
              <option value='option-2'>Option 2</option>
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
    </>
  );
};
