// let a = 20;
// if (a % 2 === 0) {
//     console.log("Even Number");
// } else {
//     console.log("Odd Number");
// }

// const a = 1;
// if (a > 0) {
//     console.log("Positive");
// } else if (a < 0) {
//     console.log("Negative");
// } else {
//     console.log("Zero");
// }

// const marks = 50;
// let branch;
// switch (true) {
//     case marks >= 90:
//         branch = "CSE";
//         break;
//     case marks >= 80:
//         branch = "ECE";
//         break;
//     case marks >= 70:
//         branch = "CE";
//         break;
//     case marks >= 60:
//         branch = "ME";
//         break;
//     default:
//         branch = "Go home";
//         break;
// }
// console.log(`Student branch is  : ${branch}`);

// let i = 0;
// for (i = 0; i <= 10; i++) {
//     console.log("Number is : " + i);
// }

// function add(nummber1, number2) {
//     return nummber1 + number2;
// }
// function ujwal() {
//     console.log("I am Ujwal");
// }
// console.log(ujwal());
// console.log(add(10, 24));

// const getData = async () => {
//     let data = "Hello";
//     return data;
// }
// getData().then(data => console.log(data));

const getData = async () => {
    let y = await "Hello";
    console.log(y);
}
console.log(1);
getData();
console.log(2);