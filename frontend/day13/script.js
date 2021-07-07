var button = document.querySelector('.generate');
console.log(button);
var display = document.querySelector('.display');
console.log(display);
  var array = [];
const getRandomMemes = () => {

  
    fetch('https://meme-api.herokuapp.com/gimme/10')
    .then(response => response.json())
        .then(data => {
            console.log("data", data);
            data.memes.forEach((m) => {
                array.push(m.url)
                console.log(m.url);
                var card = document.createElement("div");
                card.className = "card";
                if (m.url != null) {
                    card.innerHTML = `<img src=${m.url} alt="" />
                     <a class="dnd" href=${m.url} download>Download</a>
                `
                     display.appendChild(card);
                }
               
            })
        }) 
}
const displayMemes = (memes) => {
    console.log("hello");
    console.log(memes);
    console.log(memes.length);
    for (let i = 0; i < memes.length; i++){
        console.log("mkk");
    }
}
button.addEventListener('click', getRandomMemes());