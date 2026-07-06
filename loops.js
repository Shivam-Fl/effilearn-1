// /* loops */
// /* start, condition, steps*/

// // let b = 0;
// // let a = false;



// let a = new Array(1,2,3,4,5,6);


// let b = [
//     [1,2,3,4],
//     [5,6,7,8],
//     [9,10,11,12]
// ]

// let c = b.flat();

// // for (let i = 0; i < c.length; i++){
// //     console.log(c[i]);
// // }

// // c.forEach((item) => {
// //     console.log(item**2);
// // })

// for(let item of c){
//     console.log(item);
// }

// for (let index in c){
//     console.log(index);
// }

// console.log(a.at(2));

// let person = {
//   name: "Priya",
//   age: 25,
//   isStudent: true,
//   walk: function() {
//         console.log("Walking");
//   }
// };

// person.walk();


let atif = {
    name: "Atif",
    score: 90,
}

let sakshi = {
    name: "Sakshi",
    score: 95,
}

let students = [atif, sakshi, {name: "Rohit", score: 85}];

function printRoster(students){
    students.forEach((item) => {
        console.log(item.name, item.score);
    });
}
printRoster(students);
