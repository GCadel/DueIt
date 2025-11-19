import { useDroppable } from "@dnd-kit/core";
import { TaskCard } from "./TaskCard";

export const TaskList = ({ title, data, users, listId }) => {
  const { isOver, setNodeRef } = useDroppable({
    id: listId,
  });

  return (
    <div className='task-category'>
      <h2>{title ? title : "Example Category"}</h2>
      <div
        className='task-list'
        ref={setNodeRef}
        style={{
          border: isOver ? "dashed 2px black" : undefined,
          minHeight: "200px",
        }}
      >
        {data
          ? data.map((item) => (
              <TaskCard
                key={item.id}
                taskData={item}
                user={users[item.assignee_id] || "Unassigned"}
              />
            ))
          : null}
      </div>
    </div>
  );
};
