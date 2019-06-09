import React from "react";
import Todo from "./Todo";
import ITodo from "../@types/Todo";

interface TodoListProps {
  todos: ITodo[];
  toggleTodo: any;
}

const TodoList: React.FC<TodoListProps> = ({ todos, toggleTodo }) => (
  <ul>
    {todos.map(todo => (
      <Todo key={todo.id} {...todo} onClick={() => toggleTodo(todo.id)} />
    ))}
  </ul>
);

export default TodoList;
