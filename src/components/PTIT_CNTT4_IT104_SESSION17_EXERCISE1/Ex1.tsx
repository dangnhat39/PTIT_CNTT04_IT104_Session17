import React, { useState } from 'react'

export default function Ex1() {
    let [name] = useState("Nguyễn quang vinh")
  return (
    <div>
        <h2>Bài 1</h2>
        <p>Họ và tên: {name}</p>
    </div>
  )
}
