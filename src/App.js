import React, { useState } from 'react'
import TodoForm from './TodoForm'
import Todo from './Todo'

const App = () => {
  const [todos, setTodos] = useState([
    { text: '食う' },
    { text: '寝る' },
    { text: '遊ぶ' }
  ])

  const add = text => {
    const newTodos = [...todos, { text }]
    setTodos(newTodos)
  }

  const complete = index => {
    const newTodos = [...todos]
    newTodos.splice(index, 1)
    setTodos(newTodos)
  }

  return (
    <React.Fragment>
      {todos.map((todo, index) => (
        <Todo key={index} complete={complete} index={index} todo={todo} />
      ))}
      <TodoForm add={add} />
    </React.Fragment>
  )
}

export default App