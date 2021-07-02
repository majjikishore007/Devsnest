var container = document.querySelector('.container');
// console.log(container);
const list = [
    {
        q: "what is the Capital of India",
        ans: "delhi",
        opt: ["mumbai", "odisha", "Andharapradesh", "delhi"]
    },
    {
        q: "Kiran Bedi received Magsaysay Award for government service in",
        ans: "1994",
        opt: ["1992", "1993", "1994", "1995"]
    },
    {
        q: "Logarithm tables were invented by",
        ans: "John Napier",
        opt: ["John Napier", "	John Doe", "John Harrison", "	John Douglas"]
    },
    
]
for (let i = 0; i < list.length; i++){
    var card = document.createElement("div");
    card.className = "card fade";
    var question = document.createElement("span");
    question.className = "question";
    question.id = i;
    question.innerText =list[i].q+"?";
    var options = document.createElement("div");
     options.className = "options";
    for (let j = 0; j < 4; j++){
        var option= document.createElement("button")
        option.className = "option";
        option.innerText = list[i].opt[j];
        options.appendChild(option);
    }
    question.appendChild(options);
    card.appendChild(question);
    container.appendChild(card);
}
var totaCount = list.length;
var score = 0;
var options = document.querySelectorAll('.options');
options.forEach((option) => {
    option.addEventListener('click', (e) => {
         totaCount -=1;
        var ans = e.target.innerText;
        var index = e.target.parentElement.parentElement.id;
        var correctans = list[index].ans;
        if (totaCount == 0) {
            showResult();
        }
        if (ans === correctans) {
            score += 10;
          
            animate(e, correctans);
        }
        else{
            animate(e,correctans);
        }
        
    })
})
const animate = (e, ans) => {
    // console.log(e.target+"  "+ans);
    var option = e.target.parentElement
    // console.log(e.target.innerText,"IIII");
    var op=option.querySelectorAll('.option')
    for (let i = 0; i <= options.length; i++) {
        // console.log(op[i].innerText);
        if (op[i].innerText ===ans) {
            op[i].classList.add('option-true');
        }
        else  op[i].classList.add('option-false');
    }
}

const showResult = () => {
    var cards = document.querySelectorAll('.card');
    console.log(cards);
    console.log("Toatal count:" + totaCount);
    cards.forEach(c => {
        c.classList.add('hide');
    });

    var prev = document.querySelector('.prev');
    console.log(prev);
        prev.classList.add('hide');
    var next = document.querySelector('.next');
        // next.classList.add('hide');
    next.innerText="Results"
    var card = document.createElement("div");
    card.className = "card";
    if (score > 30) {
        card.innerHTML = `<h1>Total score is ${score}</h1>
            <span> congrats! 😎 </span>
        `;
    }
    else card.innerHTML =`<h1>Total score is ${score}</h1>`;
    container.appendChild(card);
}
