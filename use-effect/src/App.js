import React,{useState,useEffect} from 'react'
import Todo from './components/Todo';
import { Todos } from './components/Todos';
import "./App.css";
import { Timer } from './components/Timer';
import { Stopwatch } from './components/Stopwatch';


 const App = () => {
  return (
    <div className='App'>
      <Timer/>

      <Stopwatch/>
      <Todo/>
      <Todos></Todos>
    </div>
  );
}


export default App

