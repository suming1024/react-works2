import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Todos from './todos/todos'
import TodoDetail from './todos/TodoDetail'
import AddTodo from './todos/AddTodo'
import './App.css'

function App() {
  return (
    <section>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Todos />} />
          <Route path='/todos/:id' element={<TodoDetail />} />
          <Route path='/todos/add' element={<AddTodo />} />
        </Routes>
      </BrowserRouter>
    </section>
  )
}

export default App
