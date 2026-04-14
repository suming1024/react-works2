import { useState } from 'react'

export default function DrinkList() {

    const [drinks, setDrinks] = useState<string[]>(['콜라', '사이다', '환타'])

    const addDrink = () => {
        const newDrink = prompt('추가할 음료를 입력하세요.')
        if (newDrink) {
            setDrinks([...drinks, newDrink])
        }
    }

    return (
        <div>
            <h3><strong>Drink List</strong></h3>
            <ul>
                {drinks.map((drink, index) => (
                    <li key={index}>{drink}</li>
                ))}
            </ul>
            <button onClick={addDrink}>음료 추가</button>
        </div>
    )
}