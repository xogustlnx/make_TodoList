import React, { createContext, useContext, useReducer, useRef } from "react";

const initialTodos = [
  {
    id: 1,
    text: "밥먹기",
    done: true,
  },
  {
    id: 2,
    text: "놀기",
    done: true,
  },
  {
    id: 3,
    text: "자기",
    done: false,
  },
];

function todoReducer(state, { type, todo, id }) {
  switch (type) {
    case "CREATE":
      return state.concat(todo);
    case "TOGGLE":
      return state.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo,
      );
    case "REMOVE":
      return state.filter((todo) => todo.id !== id);
    default:
      throw new Error(`Unhandled action type : ${type}`);
  }
}

const TodoStateContext = createContext();
const TodoDispatchContext = createContext();
const TodoNextIdContext = createContext();

export function TodoProvider({ children }) {
  const [state, dispatch] = useReducer(todoReducer, initialTodos);
  const nextId = useRef(4);
  return (
    <TodoStateContext.Provider value={state}>
      <TodoDispatchContext.Provider value={dispatch}>
        <TodoNextIdContext.Provider value={nextId}>
          {children}
        </TodoNextIdContext.Provider>
      </TodoDispatchContext.Provider>
    </TodoStateContext.Provider>
  );
}

export function useTodoState() {
  const context = useContext(TodoStateContext);
  if (!context) {
    throw new Error("Cannot find TodoProvider");
  }
  return context;
}

export function useTodoDispatch() {
  const context = useContext(TodoDispatchContext);
  if (!context) {
    throw new Error("Cannot find TodoProvider");
  }
  return context;
}

export function useTodoNextId() {
  const context = useContext(TodoNextIdContext);
  if (!context) {
    throw new Error("Cannot find TodoProvider");
  }
  return context;
}
