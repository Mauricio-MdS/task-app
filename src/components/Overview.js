function Overview({tasks}) {
  return (
    <table>
      <thead>
        <tr>
          <th>Number</th>
          <th>Task</th>
        </tr>
      </thead>
      <tbody>
      {tasks.map((task) => {
        return (
          <tr key ={task.number}>
            <td>{task.number}</td>
            <td>{task.title}</td>
          </tr>
        );
      })}
      </tbody>      
    </table>
  );
}

export default Overview;