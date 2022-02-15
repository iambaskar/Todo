import Task from './components/Task';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, {useState} from "react";
////import DarkModeToggle from "react-dark-mode-toggle";
//<DarkModeToggle
//      onChange={setIsDarkMode}
//      checked={isDarkMode}
//      size={50}
//      />


function App() {
  const [isDarkMode, setIsDarkMode] = useState(() => false);
  return (
    <div className="App">
      <header> <h1>ToDo App</h1></header>
      <Task/>
    </div>
  );
}

export default App;
