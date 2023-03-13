import React from "react";
import "./task-list.css";
import PropTypes from "prop-types";
import plusIcon from "../../img/plus-icon.svg";
import TaskItem from "../TaskItem/TaskItem";

export default function TaskList({
  title,
  taskState,
  onAddTask,
  task,
  onTaskUpdade,
  onDeleteTask
}) {
  const addTask = () => {
    onAddTask("New Task", taskState);
  };

  return (
    <div className="tasklist">
      <div className="title">{title}</div>
      <div className="content">
        {task.map((task) => {
          return (
            <TaskItem
              key={task.id}
              id={task.id}
              title={task.title}
              taskState={task.state}
              onTaskUpdade={onTaskUpdade}
              onDeleteTask={onDeleteTask}
            />
          );
        })}
        {task.length === 0 && <div className="empty-list">Lista Vazia</div>}
        <button className="btn" onClick={addTask}>
          <img src={plusIcon} alt="plus" />
          Adicionar Tarefa
        </button>
      </div>
    </div>
  );
}

TaskList.propTypes = {
  title: PropTypes.string.isRequired,
  onAddTask: PropTypes.func.isRequired,
  task: PropTypes.array.isRequired
};
