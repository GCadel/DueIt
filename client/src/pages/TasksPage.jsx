import { useEffect, useState } from "react";
import { TaskCard } from "../features/TaskCard";
import { TaskList } from "../features/TaskList";

export const TasksPage = () => {

  const [allTasks, setAllTasks] = useState([]);

  useEffect(()=>{
    const getTasks = async () =>{
      try{
        const response = await fetch('http://localhost:3000/tasks/formated')
        const data = await response.json();
        console.log(data);
        console.log(exampleData1)
        setAllTasks(data)
      } catch (error) {
        console.error("Error fetching tasks: ", error)
      }
    };
    getTasks();
  }, [])

  const exampleData1 = [
    {
      id: 2,
      title: "Task 02",
      last_update: new Date().toDateString(),
      category: "category a",
      user: "John",
    },
    {
      id: 3,
      title: "Task 03",
      last_update: new Date().toDateString(),
      category: "category b",
      user: "Mike",
    },
    {
      id: 4,
      title: "Task 04",
      last_update: new Date().toDateString(),
      category: "category c",
      user: "Habibi",
    }
  ];

  const exampleData2 = [
    {
      id: 1,
      title: "Task 01",
      last_update: new Date().toDateString(),
      category: "category b",
      user: null,
    },
  ];
  return (
    <>
      <h1>Tasks</h1>
      <div className='task-categories-grid'>
        <TaskList
          title={"Backlog"}
          data={allTasks}
        />
        <TaskList title={"In Progress"} />
        <TaskList title={"Review"} />

        <TaskList
          title={"Complete"}
          data={exampleData2}
        />
      </div>
    </>
  );
};
