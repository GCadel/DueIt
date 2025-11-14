import { TaskCard } from "../features/TaskCard";
import { TaskList } from "../features/TaskList";

export const TasksPage = () => {
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
          data={exampleData1}
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
