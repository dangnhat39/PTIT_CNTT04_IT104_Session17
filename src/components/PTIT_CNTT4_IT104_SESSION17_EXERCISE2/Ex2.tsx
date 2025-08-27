import React, { useState } from 'react'

export default function Ex2() {
    let [product] = useState({
        id: 1,
        name: "Coca-cola",
        price: 1000,
        quantity: 10,
    })
  return (
    <div>
        <h2>Bài 2</h2>
        <h3>Thông tin sản phẩm</h3>
        <p>Id: {product.id}</p>
        <p>Name: {product.id}</p>
        <p>Price: {product.price} $</p>
        <p>Quantity: {product.quantity}</p>
    </div>
  )
}
