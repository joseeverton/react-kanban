import { useState } from "react";
import NavBar from "./components/NavBar/NavBar";
import TaskList from "./components/TaskList/TaskList";
import "./styles.css";

let idAcc = 0;
const generateId = () => {
  idAcc = idAcc + 1;
  return idAcc;
};
export default function App() {
  const [task, setTask] = useState([]);

  const addTask = (title, state) => {
    const newTask = {
      id: generateId(),
      title,
      state
    };
    setTask((existingTasks) => {
      return [...existingTasks, newTask];
    });
  };

  const updateTask = (id, title, state) => {
    setTask((existingTasks) => {
      return existingTasks.map((task) => {
        if (task.id === id) {
          return { ...task, title, state };
        } else {
          return task;
        }
      });
    });
  };

  const deleteTask = (id) => {
    setTask((existingTasks) => {
      return existingTasks.filter((task) => task.id !== id);
    });
  };

  return (
    <div className="App">
      <NavBar />
      <div className="container">
        <TaskList
          title="Pendente"
          taskState="pending"
          onAddTask={addTask}
          task={task.filter((t) => t.state === "pending")}
          onTaskUpdade={updateTask}
          onDeleteTask={deleteTask}
        />

        <TaskList
          title="Fazendo"
          taskState="doing"
          onAddTask={addTask}
          task={task.filter((t) => t.state === "doing")}
          onTaskUpdade={updateTask}
          onDeleteTask={deleteTask}
        />

        <TaskList
          title="Completa"
          taskState="complete"
          onAddTask={addTask}
          task={task.filter((t) => t.state === "complete")}
          onTaskUpdade={updateTask}
          onDeleteTask={deleteTask}
        />
      </div>
    </div>
  );
}
