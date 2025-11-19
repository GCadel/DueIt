export const TaskCard = ({ taskData, user }) => {
  return (
    <div>
      <CardContent
        taskData={taskData}
        user={user}
      />
    </div>
  );
};

const CardContent = ({ taskData, user }) => {
  return (
    <div className='task-card'>
      <h3>{taskData.name ? taskData.name : "Example Task"}</h3>
      <div className='justify-apart'>
        <div className='user-chip'>
          {user !== "Unassigned" ? (
            <div className=' justify-apart'>
              <div className='avatar'>{user.charAt(0).toUpperCase()}</div>
              <p>{user}</p>
            </div>
          ) : (
            <span style={{ color: "red" }}>Unassigned</span>
          )}
        </div>
        <div className='category-chip'>
          {taskData.category ? taskData.category : ""}
        </div>
      </div>
      <div className='task-update-date'>
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
