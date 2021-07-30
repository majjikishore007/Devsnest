import React, { useState, useEffect } from "react";
import Card from "./Card";
import SelectedMeme from "./SelectedMeme";
const Home = () => {
  const [items, setItems] = useState([]);
  const [selected, setSelected] = useState(null);
  useEffect(() => {
    loadMemes();
  }, []);

  const loadMemes = async () => {
    const res = await fetch("https://api.imgflip.com/get_memes");
    const data = await res.json();
    setItems(data.data.memes);
  };
  const handleClick = (item) => {
    setSelected(item);
  };
  return (
    <>
      <header>
        <div className='text-center container--narrow'>
          <h1>Create your carzy memes here !</h1>
        </div>
      </header>
      <section>
        {console.log(selected)}
        <div className='container'>
          {!selected ? (
            items.map((item, index) => {
              return (
                <Card
                  handleClick={() => {
                    handleClick(item);
                  }}
                  img={item.url}
                  name={item.name}
                  key={index}
                />
              );
            })
          ) : (
            <SelectedMeme
              selected={selected}
              setSelected={setSelected}
            ></SelectedMeme>
          )}
        </div>
      </section>
    </>
  );
};

export default Home;
