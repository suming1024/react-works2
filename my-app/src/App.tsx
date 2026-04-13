import './App.css'
import Greet from './componant/Greet'
import Player from './componant/Player'

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
        <Player player={player} clickHandler={clickHandler} />
      </section>
    </>
  )
}

export default App
