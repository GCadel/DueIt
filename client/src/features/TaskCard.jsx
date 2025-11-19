import { useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";

export const TaskCard = ({ taskData, user }) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: taskData.id,
    data: taskData,
  });

  return (
    <div
      ref={setNodeRef}
      {...listeners}
      {...attributes}
      style={{ transform: CSS.Translate.toString(transform) }}
    >
      <CardContent taskData={taskData} user={user} />
    </div>
  );
};

const CardContent = ({ taskData, user }) => {
  return (
    <div className="task-card">
      <h3>{taskData.name ? taskData.name : "Example Task"}</h3>
      <div className="justify-apart">
        <div className="user-chip">
          {user !== "Unassigned" ? (
            <div className="justify-apart">
              <div className="avatar">{user.charAt(0).toUpperCase()}</div>
              <p>{user}</p>
            </div>
          ) : (
            <span style={{ color: "red" }}>Unassigned</span>
          )}
        </div>

        <div className="right-side">
          {taskData.category ? (
            <div className="category-chip">{taskData.category}</div>
          ) : null}

          {taskData.help_wanted ? (
            <div className="help-wanted-text">Help Wanted</div>
          ) : null}
        </div>
      </div>
      <div className="task-update-date">
        <em>
          Last update:{" "}
          {taskData.last_update
            ? taskData.last_update
            : new Date().toDateString()}
        </em>
      </div>
    </div>
  );
};
