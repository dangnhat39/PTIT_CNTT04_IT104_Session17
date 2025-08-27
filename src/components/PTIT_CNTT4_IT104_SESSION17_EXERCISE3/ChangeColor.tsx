import React, { useState } from 'react'

export default function ChangeColor() {
    let [color, setColor] = useState("black");
    let editColor=() => {
        setColor("red")
    }
  return (
    <div>
        <h2> Bài 3</h2>
        <h3 style={{color: color}}>Tiêu đề văn bản</h3>
        <br />
        <button onClick={editColor}>Thay đổi màu</button>
    </div>
  )
}
