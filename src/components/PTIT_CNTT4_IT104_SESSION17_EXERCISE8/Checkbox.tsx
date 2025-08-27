import React, { useState } from "react";

export default function Checkbox() {
  let [selected, setSelected] = useState<string[]>([]);

  let handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;
    if (e.target.checked) {
      setSelected([...selected, value]);
    } else {
      setSelected(selected.filter((item) => item !== value));
    }
  };

  let title = `[${selected.join(", ")}]`;

  return (
    <div>
      <h2>Bài 8</h2>
      <h2>Sở thích: {title}</h2>
      <div>
        <input
          type="checkbox"
          id="di-choi"
          value="Đi chơi"
          onChange={handleChange}
        />
        <label htmlFor="">Đi chơi</label>
      </div>
      <br />
      <div>
        <input type="checkbox" id="code" value="Code" onChange={handleChange} />
        <label htmlFor="">Code</label>
      </div>
      <br />
      <div>
        <input
          type="checkbox"
          id="boi-loi"
          value="Bơi lội"
          onChange={handleChange}
        />
        <label htmlFor="">Bơi lội</label>
      </div>
      <br />
      <div>
        <input
          type="checkbox"
          id="nhay-day"
          value="Nhảy dây"
          onChange={handleChange}
        />
        <label htmlFor="">Nhảy dây</label>
      </div>
      <br />
      <div>
        <input
          type="checkbox"
          id="da-bong"
          value="Đá bóng"
          onChange={handleChange}
        />
        <label htmlFor="">Đá bóng</label>
      </div>
    </div>
  );
}