import React from "react";

const ListTask = ({ data, onDelete }) => {
  return (
    <div className="listTaskContainer">
      <div className="dataTitle">{data.title}</div>
      <button onClick={onDelete} className="delete-btn">
        Delete
      </button>
    </div>
  );
};

export default ListTask;
