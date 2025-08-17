import React, { useState } from "react";

const AddTask = ({ updateDatas }) => {
  const [value, setValue] = useState("");

  const addToList = () => {
    updateDatas(value);
    setValue("");
  };

  return (
    <div className="addTaskContainer">
      <h2 className="heading"> AddTask</h2>

      <div>
        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="input-box"
          placeholder="type here"
        ></input>
        <button onClick={addToList} className="add-btn">
          Add
        </button>
      </div>
    </div>
  );
};

export default AddTask;
