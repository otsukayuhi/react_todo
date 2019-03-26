import React from 'react'

const Todo = ({ todo, complete, index }) => {
  return (
    <p>
      <button onClick={() => complete(index)}>レ</button> {todo.text}
    </p>
  )
}

export default Todo