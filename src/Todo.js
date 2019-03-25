import React from 'react'

export default function todo({ todo, complete, index }) {
  return (
    <p>
      <button onClick={() => complete(index)}>レ</button> {todo.text}
    </p>
  )
}