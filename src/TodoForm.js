import React, { useState } from 'react'

export default function TodoForm({ add }) {
  const [value, setValue] = useState('')
  const handleSubmit = e => {
    e.preventDefault()
    if (!value) return
    add(value)
    setValue('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        value={value}
        onChange={e => setValue(e.target.value)}
      />
      <input type='submit' value='追加' />
    </form>
  )
}