// two rules
// 1.all functions are scaned and made available
// 2. all varibale are scaned and made undefined

// tipper("80");

// function tipper(a) {
//   var bill = parseInt(a);
//   console.log(bill + 5);
// }

// var bigTipper = function (a) {
//   var bill = parseInt(a);
//   console.log(bill + 15);
// };

// bigTipper("200");

// console.log(name);
// var name = "hitesh";

// function sayName() {
//   var name = "MR. H";
//   console.log(name);
// }
// sayName();

// console.log(name);

    let x, y;
    try{
        throw new Error();
    }
    catch(x){
        (x=1),(y=2);
        console.log(x);
    }
    console.log(x);
      console.log(y);