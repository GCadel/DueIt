const SummaryPage = () => {
  return (
    <>
      <h1>Summary</h1>
      <div className='summary-grid'>
        <section className='task-list'>
          <h2>Your Tasks</h2>
          <div>No tasks assigned</div>
        </section>
        <section className='deadline-list'>
          <h2>Deadlines</h2>
          <div>No upcoming deadlines</div>
        </section>
        <section className='team-list'>
          <h2>Team Details</h2>
          <div>No teammates found</div>
        </section>
        <section className='task-list'>
          <h2>Task Details</h2>
          <div>No Statistics available</div>
        </section>
      </div>
    </>
  );
};
export default SummaryPage;
