const myArr = [0,1,2,3,4,5]
// console.log(myArr[1]);
// o/p:1

// const myHeros=["batman", "spiderman", "eorderwomen"]
// console.log(myHeros[1]);
// o/p:spiderman

// const newArr = new Array(9,8,7)
// console.log(myArr[0]);

//Array Method
// myArr.push(6)
// console.log(myArr);
// o/p:[ 0, 1, 2, 3, 4, 5, 6]

// myArr.pop()
// console.log(myArr);
// o/p:[ 0, 1, 2, 3, 4]

// myArr.unshift(7)
// console.log(myArr);
// o/p:[7, 0, 1, 2, 3, 4, 5]

// myArr.shift()
// console.log(myArr);
// o/p:[ 1, 2, 3, 4, 5 ]

// console.log(myArr.includes(5));
// o/p:true
// console.log(myArr.indexOf(5))
//o/p:5

// const newArr = myArr.join()
// console.log(myArr);
// console.log(newArr);
// console.log(typeof newArr);
// o/p:[ 0, 1, 2, 3, 4, 5 ]
// 0,1,2,3,4,5
// string

//slice plice
// console.log("A", myArr);
// const myNewArr = myArr.slice(1,3)
// console.log("c", myArr);
// console.log(myNewArr);
// o/p:A [ 0, 1, 2, 3, 4, 5 ]
// c [ 0, 1, 2, 3, 4, 5 ]
// [ 1, 2 ]

console.log("B", myArr);
const myNewArr2 = myArr.splice(1,3)
console.log("c", myArr);
console.log(myNewArr2);
// o/p:B [ 0, 1, 2, 3, 4, 5 ]
// c [ 0, 4, 5 ]
// [ 1, 2, 3 ]
