import React, { useEffect,useState } from 'react';


export const Todos = () => {
    const [newTodo,setNewTodo] =useState("");
    const [todos ,setTodos] =useState([])
const saveInfo=()=>{
    fetch("https://m6g3bt.sse.codesandbox.io/todos",{
        method:"POST",
        headers:{
            "content-type":"application/json",
        },
        body:JSON.stringify({
            text:newTodo,
            isCompleted:false,
        }),
    })
    .then((r)=> r.json())
    .then((d)=>{
        setTodos([...todos,d]);
        setNewTodo("");
    });

};
    useEffect(()=>{
        fetch("https://m6g3bt.sse.codesandbox.io/todos")
        .then((r)=>r.json())
        .then((d)=>{
            setTodos(d);
        });
    },[]);

  return (
    <div>
    Todos
    <div>
        <div>
        <input
        value={newTodo}
        onChange={({target})=> setNewTodo(target.value)}/>
        <button onClick={saveInfo}>+</button>
        </div>
        {todos.map((todo)=>(
            <div key={todo.id}>{todo.text}


            </div>

        ))}
        </div>    

    </div>

  )
};