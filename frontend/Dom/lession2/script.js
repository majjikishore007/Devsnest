console.log("hello wolrd");
let element = document.createElement("div");
element.className = "container"

// element.innerHTML = "<h1>hello wolrd</h1>";
for (let i = 0; i < 5; i++){
    let par = document.createElement("p")
    par.innerText = "hello";
    par.id = `${i}`
    par.className="ele"
    element.appendChild(par);
}
document.body.appendChild(element);