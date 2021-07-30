import React, { useState, useEffect } from "react";
import Card from "./Card";
const SelectedMeme = (props) => {
  const { selected, setSelected } = props;
  const [form, setForm] = useState({
    template_id: selected.id,
    username: "majji",
    password: "Bond@007",
    boxes: [],
  });

  const generateMeme = () => {
    let url = `https://api.imgflip.com/caption_image?template_id=${form.template_id}&username=${form.username}&password=${form.password}`;
    form.boxes.map((box, index) => {
      url += `&boxes[${index}][text]=${box.text}`;
    });
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setSelected({ ...selected, url: data.data.url });
      });
  };

  return (
    <div>
      <div className='meme'>
        <img src={selected.url} alt='' />
        <div>
          {[...Array(selected.box_count)].map((_, index) => (
            <input
              key={index}
              type='text'
              placeholder={`Meme Caption ${index + 1}`}
              onChange={(e) => {
                const newBoxes = form.boxes;
                newBoxes[index] = { text: e.target.value };
                setForm({ ...form, boxes: newBoxes });
              }}
            />
          ))}
        </div>
        <div>
          <button
            onClick={() => {
              generateMeme();
            }}
          >
            Generate Meme
          </button>
          <button
            onClick={() => {
              setSelected(null);
            }}
          >
            Choose Template
          </button>
        </div>
      </div>
    </div>
  );
};

export default SelectedMeme;
