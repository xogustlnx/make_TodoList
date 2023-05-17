import React from "react";
import styled from "styled-components";
import TodoItem from "./Todoitem";

const TodoListBlock = styled.div`
  flex: 1;
  padding: 20px 32px;
  padding-bottom: 48px;
  overflow-y: auto;
`;

const TodoList = () => {
  return (
    <TodoListBlock>
      <TodoItem text="안녕하세여" done={true}></TodoItem>
      <TodoItem text="2" done={true}></TodoItem>
      <TodoItem text="3" done={false}></TodoItem>
      <TodoItem text="4" done={false}></TodoItem>
    </TodoListBlock>
  );
};

export default TodoList;
