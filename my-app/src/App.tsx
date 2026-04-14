import './App.css'
import Greet from './componant/Greet'
import Player from './componant/Player'
import Counter from './componant/Counter'
import DrinkList from './componant/DrinkList'
import InputValueState from './componant/InputValueState'

function App() {

   const player = {
    id: 1,
    name: '손흥민',
    position: '공격수'
   }  

   const clickHandler = () => {
    alert('버튼이 클릭되었습니다!')
   }

  return (
    <>
      <section id="center">
        <h2><strong>TypeScript 기반 React</strong></h2>
        {/* <Greet name="정반달" /> */}
        {/* <Player player={player} clickHandler={clickHandler} /> */}
        {/* <Counter />  */}
        {/* <DrinkList /> */}
        <InputValueState />
      </section>
    </>
  )
}

export default App
