import React, { useState } from "react";

const TodoItem = ({ todo, ix, _handleDeleteTodo, _handleUpdateTodo }) => {
  return (
    <div>
      <div>
        {ix} : {todo}
      </div>
      <div>
        <button onClick={() => _handleDeleteTodo(ix)}>sil</button>
        <button onClick={() => _handleUpdateTodo(ix)}>edit</button>
      </div>
    </div>
  );
};

export default TodoItem;
