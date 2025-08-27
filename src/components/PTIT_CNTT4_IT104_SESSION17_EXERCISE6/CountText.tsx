import React, { useState } from 'react'

export default function CountText() {
    let [text, setText] = useState("");
    let handleChange=(e: React.ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value)
    }
  return (
    <div>
        <h2>Bài 6</h2>
        <input name="" id="" onChange={handleChange}></input>
        <p>Số kí tự: {text.length}</p>
    </div>
  )
}
