const container = document.createElement("div");
container.className = "container";

const vessel = document.querySelector(".vessel");
vessel.appendChild(container);

images = [
  [
    "thumbsup",
    "https://freepngimg.com/thumb/emoji/47426-8-smiley-hd-free-transparent-image-hd-thumb.png",
  ],
  [
    "devilface",
    "https://freepngimg.com/thumb/emoji/65088-emoticon-piracy-smiley-pirate-emoji-png-image-high-quality-thumb.png",
  ],
  [
    "jolly",
    "https://freepngimg.com/thumb/emoji/47409-6-smiley-download-free-image-thumb.png",
  ],
  [
    "cool",
    "https://freepngimg.com/thumb/emoji/64953-emoticon-cute-smiley-illustration-villain-cartoon-emoji-thumb.png",
  ],
];

for (let i = 0; i < 2; i++) {
  for (let j = 0; j < 4; j++) {
    //card
    var card = document.createElement("div");
    card.className = "card";
    //front image
    var imgFront = document.createElement("img");
    imgFront.className = "front";
    imgFront.src = "https://www.devsnest.in/static/media/logo.f1b45387.jpg";
    //back image 
    var imgBack = document.createElement("img");
    imgBack.className = "back";
    imgBack.src = images[j][1];
    // appending to card
    card.appendChild(imgBack);
      card.appendChild(imgFront);
    card.id = images[j][0]
    //appending to main 
    container.appendChild(card);
  }
  
}

// fliping logic
var arr = [];
var cards = document.querySelectorAll(".card");
cards.forEach((card) => {
  card.addEventListener("click", flip);
});
var isFliped = false;
var one;
var two;

function flip() {
  this.classList.add("flip");
  if (!isFliped) {
    isFliped = true;
    one = this;
  } else {
    two = this;
    console.log(one);
    console.log(two);
    checkIt();
  }
}
function checkIt() {
    if (one.id === two.id) {
      success();
    } else {
        fail();
  }
}
function success() {
   arr.push(one.id);
  arr.push(two.id);
  one.removeEventListener("click", flip);
  two.removeEventListener("click", flip);
  console.log("success :"+arr);
  reset();
}
function fail() {
  setTimeout(() => {
    // one.classList.remove("flip");
    two.classList.remove("flip");
  //  suffle()
  }, 1000);
}
function reset() {
  setTimeout(() => {
      isFliped =false;
        one = null;
        two = null;
    },1000)
}

function suffle() {
  setTimeout(() => {
  for (let i = 0; i < cards.length; i++) {
    var index = Math.floor(Math.random() * 16);
     cards[i].style.order=index;
  }
  },1000)
} 