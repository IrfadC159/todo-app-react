import React, { useState } from "react";
import AddTask from "./AddTask";
import ListTask from "./ListTask";
import "./style.css";

const TodoApp = () => {
  const [datas, setData] = useState([]);

  const updateDatas = (newData) => {
    setData([...datas, { title: newData }]);
  };

  const deleteTask = (index) => setData(datas.filter((_, i) => i !== index));

  /*
  const deleteTask=(index)=>{
    const newArray=[...datas];
    newArray.splice(index,1);
    setData(newArray)
}
*/
  return (
    <div className="todo-container">
      <h1>To Do App</h1>
      <div>
        <AddTask updateDatas={updateDatas} />
      </div>
      <div>
        {datas.map((data, index) => (
          <ListTask
            key={index}
            data={data}
            onDelete={() => deleteTask(index)}
          />
        ))}
      </div>
    </div>
  );
};
export default TodoApp;
