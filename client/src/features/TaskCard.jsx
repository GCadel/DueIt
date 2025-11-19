export const TaskCard = ({ taskData, user }) => {
  if (taskData) {
    return (
      <div className='task-card'>
        <h3>{taskData.name ? taskData.name : "Example Task"}</h3>
        <div className='justify-apart'>
          <div className='user-chip'>
            {user !== "Unassigned" ? (
              <div className=' justify-apart'>
                <div className='avatar'>
                  {user.charAt(0).toUpperCase()}
                </div>
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
  }
  return (
    <div className='task-card'>
      <h3>Example Task</h3>
      <div className='justify-apart'>
        <div className='user-chip'>
          <span style={{ color: "red" }}>Unassigned</span>
        </div>
        <div className='category-chip'>chip example</div>
      </div>
      <div className='task-update-date'>
        <em>Last update: {new Date().toDateString()}</em>
      </div>
    </div>
  );
};
