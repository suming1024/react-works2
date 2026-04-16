import React, { useState } from "react"
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

export default function AddTodo(){

    const [title,setTitle] = useState<string>('');
    const navigate = useNavigate();
    const [isloading,setIsloading] = useState<boolean>(false);

    // setIsloading(false);

    const handleSubmit = async(e: React.FormEvent)=>{
        e.preventDefault();
        setIsloading(true)

        try{
            const res = 
                await axios.post("https://jsonplaceholder.typicode.com/todos",{title,completed:false})
                setTitle('');
                navigate('/');
        }
        catch(err){
            console.log(err);
            alert("오류있음")
        }
    }

    return(
        <div>
            <h2>AddTodo</h2>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    placeholder="할 일 입력하세요"
                    value={title}
                    onChange={(e)=> setTitle(e.target.value)}
                />
                <button type="submit" disabled={isloading}>{isloading ? '로딩 중' : '추가'}</button>
            </form>
        </div>
    )
}