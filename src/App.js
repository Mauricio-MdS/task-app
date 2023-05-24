import { useState } from "react";
import Overview from "./components/Overview";
import taskFactory from "./taskFactory";

function App() {

  const [ currentTask, setCurrentTask ] = useState('');
  const [ tasks, setTasks ] = useState([]);
  
  
  const changeInput = (event) => {
    setCurrentTask(event.target.value);
  }

  const submit = () => {
    setTasks(tasks.concat(taskFactory(currentTask)));
    setCurrentTask('');
  }

  return (
    <div className="App">
      <input onChange = { changeInput } value={currentTask}/>
      <button onClick={ submit } >Submit</button>
      <Overview tasks = { tasks }></Overview>
    </div>
  );
}

export default App;
