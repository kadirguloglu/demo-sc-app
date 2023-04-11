import React from "react";
import PropTypes from "prop-types";

const TodoForm = ({
  _handleTodoFormSubmit,
  todo,
  setTodo,
  _handleTodoInputKeyUp,
}) => {
  return (
    <form onSubmit={_handleTodoFormSubmit}>
      <input
        onKeyUp={_handleTodoInputKeyUp}
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button type="submit">Add Todo</button>
    </form>
  );
};

TodoForm.propTypes = {};

export default TodoForm;
