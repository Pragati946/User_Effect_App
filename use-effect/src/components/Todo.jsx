



import React, { useEffect,useState } from "react";
import axios from "axios";
// import './App.css';


// import { Todos } from "./components/Todo";
function Todo() {
  const[page,setPage]=useState(1);
  const [limit,setlimit]=useState(5);
  const [totalCount, settotalCount] = useState(0);
  const [todos,setTodos] =useState([])

  useEffect(()=>{
  // const getTodo =async ()=>{
  //   let r = await axios.get("https://m6g3bt.sse.codesandbox.io/todos");
  //   console.log(r.data);
  // }
  // getTodo();
  axios 
  .get(`https://m6g3bt.sse.codesandbox.io/todos?_page=${page}&_limit=${limit}`)
  .then((r)=>{
    console.log(r);
    setTodos(r.data);
    settotalCount(Number(r.headers["x-total-count"]));
  });
  },[page,limit]);

  return (
    <div className="App">
      <button disabled={page<=1}
      onClick={()=>setPage(page-1)}>
      {`<`}
        </button>
        <select onChange={(e)=>setlimit(Number(e.target.value))}>
          <option value={5}>5</option>
          <option value={10}>10</option>
          <option value={20}>20</option>
        </select>
      {todos.map((todo)=>{
     <div key={todo.id}>{todo.id} {`:`} {todo.value}</div>
})}

      
      <button 
      disabled={page*5>totalCount}
      onClick={()=>{setPage(page-1)}}>
         {" "}
        {`<`}{" "}</button>

 {/* <Todos/> */}
    </div>
  );
}

export default Todo;

