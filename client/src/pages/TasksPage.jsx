import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { TaskList } from "../features/TaskList";
import PlusImage from "../assets/plus.png";
import TasksAPI from "../services/TasksAPI";
import UsersAPI from "../services/UsersAPI";
import { DndContext } from "@dnd-kit/core";
import { restrictToWindowEdges } from "@dnd-kit/modifiers";

export const TasksPage = () => {
  const [tasks, setTasks] = useState([]);
  const [users, setUsers] = useState({});
  const [currentTask, setCurrentTask] = useState(null);
  const [listId, setListId] = useState(null);

  useEffect(() => {
    const fetchTasks = async () => {
      const data = await TasksAPI.getAllTasks();
      setTasks(data);
    };

    const fetchUsers = async () => {
      const userArray = await UsersAPI.getAllUsers();
      const userMap = {};
      userArray.forEach((u) => {
        userMap[u.id] = u.first_name + " " + u.last_name;
      });

      setUsers(userMap);
    };

    fetchTasks();
    fetchUsers();
  }, []);

  const backlogTasks = tasks.filter((task) => task.status_id === 1);
  const inProgressTasks = tasks.filter((task) => task.status_id === 2);
  const reviewTasks = tasks.filter((task) => task.status_id === 3);
  const completeTasks = tasks.filter((task) => task.status_id === 4);

  const handleDragEnd = (event) => {
    if (event.over && event.active) {
      const cardToMove = event.active.data.current;
      const listToMoveTo = event.over;
      setCurrentTask({ ...cardToMove });
      setListId(listToMoveTo.id);
    }
  };

  useEffect(() => {
    const updateTaskList = async (taskId, listId) => {
      await TasksAPI.updateTask(taskId, listId);
    };
    if (listId && currentTask) {
      updateTaskList(currentTask, listId);
    }
  }, [listId, currentTask]);

  return (
    <>
      <h1>Tasks</h1>

      <DndContext
        onDragEnd={handleDragEnd}
        modifiers={[restrictToWindowEdges]}
      >
        <div className='task-categories-grid'>
          <TaskList
            title={"Backlog"}
            data={backlogTasks}
            users={users}
            listId={1}
          />
          <TaskList
            title={"In Progress"}
            data={inProgressTasks}
            users={users}
            listId={2}
          />
          <TaskList
            title={"Review"}
            data={reviewTasks}
            users={users}
            listId={3}
          />

          <TaskList
            title={"Complete"}
            data={completeTasks}
            users={users}
            listId={4}
          />
        </div>
      </DndContext>

      <div className='add-task-button'>
        <Link to='/create-task'>
          <img
            src={PlusImage}
            alt='plus sign'
          ></img>
        </Link>
      </div>
    </>
  );
};
