import React from 'react';
import Link from 'next/link';



const fetchTodos = async ( ) => {
    const res = await fetch("http://jsonplaceholder.typicode.com/todos/")
    const todos = await res.json();
    return todos;

}   
export default async function TodosList() {
    const todos = await fetchTodos() 
    
  return <>
    {todos.map((todo:any) => (
        <p key={todo.id}>
            <Link href={`/todos/${todo.id}`}>Todo: {todo.id}</Link>
        </p>
    ))}
</>
  
}
