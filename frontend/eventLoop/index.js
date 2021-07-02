const one = () => {
    console.log("one");
}

const two = () => {
    setTimeout(() => {
        console.log("whooo");
    },1000)
    console.log("two");
}

const three = () => {
    console.log("three");
}
one();
console.log("completed 1>2");
two();
console.log("completed 2>3");
three();
