import "./App.css";
import React from "react";
import { createGlobalStyle } from "styled-components";
import TodoTemplate from "./components/Todo Template";
import TodoHead from "./components/TodoHead";
import TodoList from "./components/TodoList";

const GlobalStyle = createGlobalStyle`
  body{
    background: #e9ecef ;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <TodoTemplate>
        <TodoHead></TodoHead>
        <TodoList></TodoList>
      </TodoTemplate>
    </>
  );
}

export default App;
