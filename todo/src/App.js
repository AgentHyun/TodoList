import React from 'react';
import { createGlobalStyle } from 'styled-components';
import TodoTemplate from './components/TodoTemplate.js';
import TodoHead from './components/TodoHead.js';
import TodoList from './components/TodoList.js';
import TodoCreate from './components/TodoCreate.js';
import { TodoProvider } from './TodoContext.js';
import Login from './Login/Login.js';
import Register from './Login/Register.js';
import {BrowserRouter, Routes, Route} from "react-router-dom";

const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef;
  }
`;
function Todo(){
  return (
<TodoProvider>
      <GlobalStyle />
      <TodoTemplate>
        <TodoHead />
        <TodoList />
        <TodoCreate />
      </TodoTemplate>
    </TodoProvider>
  );
}
function App() {
  return (
    <BrowserRouter>
       <GlobalStyle />
      <Routes>
        <Route path = "/" element = {<Login/>}/>
        <Route path = "/todo" element = {<Todo/>}/>
        <Route path = "/register" element = {<Register/>}/>
      </Routes>   
    </BrowserRouter>
  );
}

export default App;