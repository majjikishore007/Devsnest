var container = document.createElement("div");
container.className = "container";

var mainCon = document.querySelector(".mainCon");
mainCon.appendChild(container);
console.log(mainCon);

for (let i = 0; i < 6; i++) {
  const row = document.createElement("div");
  row.className = "row";
  for (let j = 0; j < 6; j++) {
    const card = document.createElement("div");
    card.className = "card";
    row.appendChild(card);
  }
  container.appendChild(row);
}
var totaCount = 36;
var cuurCount = 0;


var Tc = document.querySelector('.totalseats');
var cc = document.querySelector('.bookedseats');
Tc.innerHTML = `<h1>Totalseats :${totaCount}</h1>`;
 cc.innerHTML = `<h1>Bookedseats :${cuurCount}</h1>`;
console.log(Tc);
container.addEventListener("click", (e) => {
  
  var card = e.target;
  // console.log(card);
  if (
    !card.classList.contains("card") &&
    !card.classList.contains("card-afterClick")
  ) {
    // console.log("preventing");

    e.preventDefault();
    return;
  }
  if (card.classList.contains("card-afterClick")) {
    card.classList.remove("card-afterClick");
    cuurCount -= 1;
    console.log(cuurCount + "and :" + totaCount);
  } else {
    cuurCount += 1;
    // console.log("else part");
    console.log(cuurCount + "and :" + totaCount);
    card.classList.add("card-afterClick");
  }
    totaCount=36-cuurCount
    console.log(cuurCount + "and :" + totaCount);
   Tc.innerHTML = `<h1>Totalseats :${totaCount}</h1>`;
 cc.innerHTML = `<h1>Bookedseats :${cuurCount}</h1>`;
});

