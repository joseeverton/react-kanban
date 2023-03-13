import React, { useState } from "react";
import PropTypes from "prop-types";
import "./task-item.css";
export default function TaskItem({
  id,
  title,
  taskState,
  onTaskUpdade,
  onDeleteTask
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [editTitle, setEditTitle] = useState(title);

  const onTitleChange = (event) => {
    const newTitle = event.target.value;
    setEditTitle(newTitle);
    onTaskUpdade(id, newTitle, taskState);
  };
  const onKeyPress = (event) => {
    if (event.key === "Enter") {
      setIsEditing(false);
      if (editTitle.length === 0) {
        onDeleteTask(id);
      }
    }
  };

  const onTaskStateChange = (event) => {
    onTaskUpdade(id, title, event.target.value);
  };

  if (isEditing) {
    return (
      <div className="task-item">
        <input
          type="text"
          value={editTitle}
          onChange={onTitleChange}
          onKeyPress={onKeyPress}
        />
      </div>
    );
  } else {
    return (
      <div className="task-item">
        <div onClick={(e) => setIsEditing(true)}>{editTitle}</div>
        <select onChange={onTaskStateChange} value={taskState}>
          <option value="pending">Pendente</option>
          <option value="doing">Fazendo</option>
          <option value="complete">Completa</option>
        </select>
      </div>
    );
  }
}

TaskItem.protoTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  taskState: PropTypes.string.isRequired
};
