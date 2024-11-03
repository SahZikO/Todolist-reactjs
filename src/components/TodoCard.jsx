import React from "react";

export default function TodoCard(props) {
  const { children, handleDeleteTodo , index, handleEditTodo } = props;
  return (
    <li className="todoItem">
      {children}
      <div className="actionsContainer">
        <button onClick={()=>{
            handleEditTodo(index)
        }}>
          <i className="ri-edit-line"></i>
        </button>
        <button onClick={()=>{
            handleDeleteTodo(index)
        }}>
          <i className="ri-delete-bin-5-line"></i>
        </button>
      </div>
    </li>
  );
}
