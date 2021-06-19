// 1. Write a JavaScript program to list the properties of a JavaScript object.
// Sample object: var student = { name: "David Rayy", sclass: "VI", rollno: 12 };
// Sample Output: name, sclass, rollno

const getData = (student) => {
  console.log(
    ` Name : ${student.name} , class : ${student.class} , rollno : ${student.rollno}`
  );
};
var student = {
  name: "David Rayy",
  sclass: "VI",
  rollno: 12,
};
getData(student);

// 2. Write a JavaScript program to delete the rollno property from the following object.
// Also print the object before or after deleting the property.
// Sample object: var student = { name: "David Rayy", sclass: "VI", rollno: 12 };
const deleteProperty = (student) => {
  delete student.rollno;
  console.log(
    ` Name : ${student.name} , class : ${student.class} , rollno : ${student.rollno}`
  );
};

// deleteProperty(student);

// 3. Write a JavaScript program to get the length of a JavaScript object.
// Sample object: var student = { name: "David Rayy", sclass: "VI", rollno: 12 };

const getLenght = (student) => {
  var size = 0,
    index;
  for (index in student) {
    size += 1;
  }
  console.log("size " + size);
};
getLenght(student);

//
// 4. Write a JavaScript program to display the reading
// status(i.e.display book name, author name and reading status) of the following books.
var library = [
  { author: "Bill Gates", title: "The Road Ahead", readingStatus: true },
  { author: "Steve Jobs", title: "Walter Isaacson", readingStatus: true },
  {
    author: "Suzanne Collins",
    title: "Mockingjay: The Final Book of The Hunger Games",
    readingStatus: false,
  },
];
const display = (library) => {
  library.forEach((element) => {
    console.log(
      `Name of the book:  ${element.title} , author: ${element.author} and reading status :${element.readingStatus}`
    );
  });
};
display(library);

// 5. Write a JavaScript program to get the volume of a Cylinder with four decimal places using object classes. Volume of a cylinder : V = πr2h where r is the radius and h is the height of the cylinder. Try To Attempt : Difficult Level Increased
var cylinder = {
    radius: 20,
    height:40
};
const getVolume = (cylinder) => {
    var volume = 2 * (3.14) * cylinder.radius * cylinder.height;
    console.log(volume.toFixed(4));
}
getVolume(cylinder);

//6. Write a JavaScript program to sort an array of JavaScript objects.  Sample Object :
var library = [{ title: 'The Road Ahead', author: 'Bill Gates', libraryID: 1254 }, { title: 'Walter Isaacson', author: 'Steve Jobs', libraryID: 4264 }, { title: 'Mockingjay: The Final Book of The Hunger Games', author: 'Suzanne Collins', libraryID: 3245 }];
// Expected Output: [[object Object] { author: "Walter Isaacson", libraryID: 4264, title: "Steve Jobs" }, [object Object] { author: "Suzanne Collins", libraryID: 3245, title: "Mockingjay: The Final Book of The Hunger Games" }, [object Object] { author: "The Road Ahead", libraryID: 1254, title: "Bill Gates" }]


const sortObject = (x,y) => {
    if (x.title < y.title) {
        return -1;
    }
    else 1;
}
console.log(library.sort(sortObject));