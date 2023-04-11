import logo from "./logo.svg";
import { useRef, useState, useEffect } from "react";

import TodoItem from "./TodoItem";
import TodoForm from "./TodoForm";

const TodoList = () => {
  // const todoInputRef = useRef(null);
  const updatedTodoIndex = useRef(-1);
  // $scope.todoList =[];
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);

  // useEffect(() => {
  //   const listenerButton = document.getElementById("listener-button");
  //   const listener = () => {
  //     console.log("tılandı");
  //   };
  //   listenerButton.addEventListener("click", listener);
  //   return () => {
  //     listenerButton.removeEventListener("click", listener);
  //   };
  // }, []);

  const _handleAddTodo = () => {
    if (todo === "") return;
    if (updatedTodoIndex.current !== -1) {
      const newTodoList = todoList.map((val, inx) => {
        if (inx === updatedTodoIndex.current) {
          return todo;
        }
        return val;
      });
      setTodoList(newTodoList);
    } else {
      setTodoList([...todoList, todo]);
    }
    updatedTodoIndex.current = -1;
    setTodo("");
  };

  const _handleTodoInputKeyUp = (e) => {
    if (e.keyCode === 13) {
      _handleAddTodo();
    }
  };

  const _handleDeleteTodo = (ix) => {
    const newTodoList = todoList.filter((val, inx) => inx !== ix);
    setTodoList(newTodoList);
  };

  const _handleUpdateTodo = (ix) => {
    updatedTodoIndex.current = ix;
    const newTodoList = todoList.find((val, inx) => inx === ix);
    setTodo(newTodoList);
  };

  const _handleTodoFormSubmit = (e) => {
    e.preventDefault();
    _handleAddTodo();
  };

  return (
    <div>
      <TodoForm
        _handleTodoFormSubmit={_handleTodoFormSubmit}
        todo={todo}
        setTodo={setTodo}
        _handleTodoInputKeyUp={_handleTodoInputKeyUp}
      />
      {/* <button id="listener-button">tılanı</button> */}
      <div>
        {/* <li ng-repeat="val in todoList"></li> */}
        {todoList.map((val, inx) => (
          <TodoItem
            key={inx}
            todo={val}
            ix={inx}
            _handleDeleteTodo={_handleDeleteTodo}
            _handleUpdateTodo={_handleUpdateTodo}
          />
        ))}
      </div>
    </div>
  );
};

export default TodoList;
