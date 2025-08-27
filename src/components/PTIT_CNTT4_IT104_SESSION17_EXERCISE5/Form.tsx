import React, { useState } from 'react'

export default function Form() {
    let [title, setTitle] = useState("");
    let handleChange=(e: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value)
    }
  return (
    <div>
        <h2>Bài 5</h2>
        <input type="text" 
        placeholder='Nhập nọi dung'
        onChange={handleChange}/>
        <h3>{title}</h3>
    </div>
  )
}
