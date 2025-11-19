import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { TaskCard } from "../features/TaskCard";
import { TaskList } from "../features/TaskList";
import PlusImage from "../assets/plus.png"
import TasksAPI from "../services/TasksAPI";
import UsersAPI from "../services/UsersAPI";

export const TasksPage = () => {

  const [tasks, setTasks] = useState([]);
  const [users, setUsers] = useState({});

  useEffect(() => {
    const fetchTasks = async () => {
      const data = await TasksAPI.getAllTasks();
      setTasks(data)
    }

    const fetchUsers = async () => {
      const userArray = await UsersAPI.getAllUsers();
      const userMap = {};
      userArray.forEach(u => {
        userMap[u.id] = u.first_name + ' ' + u.last_name;
      });

      setUsers(userMap);
    }

    fetchTasks();
    fetchUsers();
  }, [])

  const backlogTasks = tasks.filter(task => task.status_id === 1)
  const inProgressTasks = tasks.filter(task => task.status_id === 2)
  const reviewTasks = tasks.filter(task => task.status_id === 3)
  const completeTasks = tasks.filter(task => task.status_id === 4)

  return (
    <>
      <h1>Tasks</h1>
      <div className='task-categories-grid'>
        <TaskList
          title={"Backlog"}
          data={backlogTasks}
          users={users}
        />
        <TaskList 
          title={"In Progress"} 
          data={inProgressTasks}
          users={users}
        />
        <TaskList 
          title={"Review"}
          data={reviewTasks}
          users={users}
          />

        <TaskList
          title={"Complete"}
          data={completeTasks}
          users={users}
        />
      </div>
      <div className="add-task-button">
        <Link to="/create-task"><img src={PlusImage} alt="plus sign"></img></Link>
      </div>
    </>
  );
};
