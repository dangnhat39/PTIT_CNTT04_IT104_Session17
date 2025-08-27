import React, { useState } from 'react'

export default function Toggle() {
    let [show, setShow] = useState(false)
    let changeShow=() => {
        setShow(!show)
    }
  return (
    <div>
        <h2>Bài 4</h2>
        <button onClick={changeShow}>
            {show? "Ẩn" : "Hiện"}
        </button>

        {show && <h3>Tiêu đề văn bản</h3>}
    </div>
  )
}
