import { useEffect, useState } from "react"
import type { Todo } from "./todos"
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

export default function TodoDetail (){

    const {id} = useParams<{id: string}>();
    const [todo, setTodo] = useState<Todo | null>(null);
    const navigate = useNavigate();

    useEffect(()=>{
        const fetchTodo = async()=>{
            try{
                const res = 
                    await axios.get(`https://jsonplaceholder.typicode.com/todos/${id}`)
                setTodo(res.data)
            }
            catch(err){
                alert("오류발생")
            }
        }
        fetchTodo();
    },[id]);

    //todo가 아직 로딩되지 않았을때 로딩메세지를 표시할거야
    if(!todo){
        return <div>로딩중...</div>
    }

    return(
        <div>
            <h2>TodoDetail</h2>
            <p>ID: {todo.id}</p>
            <p>Title: {todo.title}</p>
            <p>완료여부: {todo.completed ? '완료' : '미완료'}</p>

            <button onClick={()=>{navigate(-1)}}>뒤로가기</button>
        </div>
    )
}