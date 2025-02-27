const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const even = [];
//
// for (const x of numbers) {
//     if ( x % 2 === 0 ) {
//         even.push(x);
//     }
// }
//
// console.log(even);

const isEven = x => x % 2 === 0; //Predicate

const even = numbers.filter(isEven);


/////////////////////////////////////////////////////

//const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let result = true;
//
// for (const x of numbers) {
//     if ( x % 2 === 0 ) {
//        result = false;
//        break;
//     }
// }
//
// console.log(result);


/////////////////////////////////////////////////////

//const numbers = [1, 3, 5, 7, 9, 10];

// let result = false;
//
// for (const x of numbers) {
//     if ( x % 2 !== 0 ) {
//        result = true;
//        break;
//     }
// }
//
// console.log(result);

//////////

//const numbers = [1, 2, 4, 6, 8, 10];

// const isOdd = x => x % 2 !== 0;

//console.log(numbers.every(isOdd);
//console.log(numbers.some(isOdd);
//if (numbers.some(isOdd)) {
//    console.log("There is at least one odd number in the array!");
//}

/*sort();
    numerical order instead of alphabetical order

const numbers = [10, 2, 3, 4, 5, 6, 7, 8, 9, 1];

///
const numericalAscending = (a, b) => a-b;
///

const numericalAscending = (a, b) => {
    if (a > b) {
        return 1;
    } else if (a < b){
        return -1;
    } else {
        return 0;
    }
}

///
const numericalDescending = (a, b) => b-a;
///

const numericalDescending = (a, b) => {
    if (a > b) {
        return -1;
    } else if (a < b){
        return 1;
    } else {
        return 0;
    }
}

///
const sortNumber = number.slice().sort(numericalAscending);
///

const sortNumber = number.slice().sort(numericalDescending);
console.log(sortedNumbers);
 */