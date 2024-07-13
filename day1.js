// task 1
var salary = 10000
console.log(salary)

// task 2
let job = "backend"
console.log(job)


// task 3
const isRemote = false
console.log(isRemote)

// task 4
const number = 123
const string = "abc"
const boolean = true
const object = { name: "Pranshu", age: 29 }
const array = [1,2,3]
const a = null
const b = undefined

console.log(typeof number);
console.log(typeof string);
console.log(typeof boolean);
console.log(typeof object);
console.log(typeof array);
console.log(typeof a);
console.log(typeof b);

// task 5
let i = 0
console.log(i)
i = 1
console.log(i);

// task 6
const j = 0
console.log(i)
// j = 1
// console.log(i) // error const cant be reassigned

// feature1 
function dataType(data){
    const varaiable = data
    console.log(`Value is ${data} and data type is ${typeof data}`);
}

console.log(dataType(number))
console.log(dataType(string))
console.log(dataType(boolean))
console.log(dataType(object))
console.log(dataType(array))
console.log(dataType(a))
console.log(dataType(b))

// reassignment demo

function reassign(l,c){
    try {
        let data1 = l
        data1 = 12
        console.log(data1);
    } catch (e) {
        console.log("Error: " + e.message);
    }

    try {
        const data2 = c
        data2 = 12
        console.log(data2);
    } catch (e) {
        console.log("Error: " + e.message);
    }
}

reassign(2,"abc")



