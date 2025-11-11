import { TaskCard } from "./TaskCard";

export const TaskList = ({ title, data }) => {
  return (
    <div className='task-category'>
      <h2>{title ? title : "Example Category"}</h2>
      <div className='task-list'>
        {data
          ? data.map((item) => (
              <TaskCard
                key={item.id}
                taskData={item}
              />
            ))
          : ""}
      </div>
    </div>
  );
};
