import { ListItem } from "./componentes/TaskItem";
import { InputTask } from "./componentes/InputTask";
import { DateDisplay } from "./componentes/DateDisplay";
import { ListTasks } from "./componentes/ListTasks";
import { NoTasks } from "./componentes/noTasks";
import { useState } from "react";

function App() {
  const localStorageList = JSON.parse(localStorage.getItem('Tasks')) || [];

  const [ taskList, setTaskList ] = useState(localStorageList);

  return (
    <div className="App">
      <section className="App-section">
        <header className='header'>
          <InputTask setTaskList={setTaskList} />
          <DateDisplay setTaskList={setTaskList} />
        </header>
        <ListTasks>
          {taskList.length === 0 && <NoTasks />}
          {taskList.map((task, index) => <ListItem label={task.label} check={task.check} emoji={task.emoji} key={index} id={index} setTaskList={setTaskList}/>)}
        </ListTasks>
      </section>
    </div>
  );
};

export default App;