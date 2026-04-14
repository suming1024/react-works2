import { useState } from "react"

export default function InputValueState(){

    const [text, setText] = useState('');
    const [number, setNumber] = useState<number>(0)

    const handleTextChange = (e:React.ChangeEvent<HTMLInputElement>) => {void setText(e.
        target.value)}
    const handleNumChange = (e:React.ChangeEvent<HTMLInputElement>) => {void setNumber(Number(e.target.value))}

    return (
        <div>
            <h3><strong>Input Value State</strong></h3>
            <input 
                type="text" 
                value={text}
                placeholder="글자를 입력하세요."
                onChange={handleTextChange}
            />
            <input 
                type="number" 
                value={number}
                placeholder="숫자를 입력하세요."
                onChange={handleNumChange}
            />
            <p>입력된 텍스트 보기: {text}</p>
            <p>입력된 숫자 보기: {number+100}</p>
        </div>
    )
}