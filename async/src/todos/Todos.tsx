import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

export default function Todos() {
   const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    const fetchTodos = async () => {
        try {
            const res = await axios.get("https://jsonplaceholder.typicode.com/todos");
            setTodos(res.data);
        }
        catch(err){
            alert("오류남");
        }
    }
    // axios.get("https://jsonplaceholder.typicode.com/todos")
    //   .then(res => {
    //     setTodos(res.data);
    //   })
    //   .catch(err => console.log(err));

    //함수호출
    fetchTodos();
  }, []);

  return (
    <div>
      <h3><strong>할 일 목록</strong></h3>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <Link to={`/todos/${todo.id}`}>{todo.title}</Link>
        </li>
        ))}
      </ul>
    </div>
  );
}