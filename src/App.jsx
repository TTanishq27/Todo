import { useState } from 'react'
import Row from './Row';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState('');

  const addTask = () => {
    if (inputValue.trim() !== '') {
      setTasks([...tasks, inputValue]);
      setInputValue('');
    }
  };

  const handleKeyDown = (e) => {
    if(e.key === 'Enter') addTask();
  };

  return (
    <div className="app">
      <h1>ToDo List</h1>
      <div className="input-container">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Add a new task"
          onKeyDown={handleKeyDown}
        />
        <button onClick={addTask}>Add</button>
      </div>

      <div className="task-count">
        <p>Total Tasks: {tasks.length}</p>
      </div>

      <ol className="task-list">
        {tasks.map((task, index) => (
          <Row key={index} item={task} />
        ))}
      </ol>
    </div>
  );
};

export default App;
