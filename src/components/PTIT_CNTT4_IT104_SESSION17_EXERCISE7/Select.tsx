import React, { useState } from "react";

export default function Select() {
  let [city, setCity] = useState("");
  let handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCity(e.target.value);
  };
  return (
    <div>
      <h2>Bài 7</h2>
      <h2>Thành phố: {city && <span>{city}</span>}</h2>
      <select onChange={handleChange}>
        <option value="">--Chọn thành phố</option>
        <option value="Hà Nội">Hà Nội</option>
        <option value="Hà Nam">Hà Nam</option>
        <option value="Ninh Bình">Ninh Bình</option>
        <option value="Thanh Hoá">Thanh Hoá</option>
        <option value="Nghệ An">Nghệ An</option>
      </select>
    </div>
  );
}
