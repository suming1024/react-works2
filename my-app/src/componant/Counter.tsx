import { useState } from 'react'

export default function Counter() {

    //<txt> : 실행중에 타입을 결정하는 제내릭 표현법
    // const [count, setCount] = useState<string>('0');
    const [count, setCount] = useState<number>(0);

    return (
        <div>
            <h3><strong>카운터</strong></h3>
            <p>현재 카운트 : {count}</p>
            <button onClick={()=>{setCount(count+1)}}>증가</button>{` `}
            <button onClick={()=>{setCount(count-1)}}>감소</button>{` `}
            <button onClick={()=>{setCount(0)}}>초기화</button>
        </div>
    )       
}