// apply
const student = {
    id: 19920,
    name: "kishore",
    getInfo: function (hobby) {
        console.log(`id is ${this.id} and name is ${this.name} and hobby is ${hobby}`);
    }
}

const student2 = {
    id: 199697,
    name: "john",
}
//function borrwing calls directly 
const info = student.getInfo.apply(student2, ["football"]);
const info1 = student.getInfo.call(student2, "cricket");
console.log(info);

// bind returns a copy of the original function which can be invoked later
const info2 = student.getInfo.bind(student2, "volleybally");
console.log(info2);
info2();
