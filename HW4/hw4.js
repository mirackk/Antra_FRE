// write a js prototype methods for array: map
const arr = [1,2,3,4,5]

const timesTwo = function(number){
    return number*2
}

// Implement Array.myMap
Array.prototype.myMap = function(cb) {
    const newArr =[];
    for (let i = 0; i < this.length; i++){
        newArr.push(cb(this[i], i, this));
    }
    return newArr;
}
const newArr = arr.myMap(timesTwo)

console.log(newArr);

// write a js prototype methods for array: filter
const isEven = function(number){
    return number % 2 === 0;
}

Array.prototype.myFilter = function(cb){
    const newArr = [];
    for (let i = 0; i < this.length; i++){
        if (cb(this[i], i, this)){
            newArr.push(this[i]);
        }
    }
    return newArr;
}

const evenArr = arr.myFilter(isEven);
console.log(evenArr);

// write a js prototype methods for array: reduce
const sum = function(accumulator, currentValue){
    return accumulator + currentValue;
}

Array.prototype.myReduce = function(cb, initialValue){
    let accumulator = initialValue;
    for (let i = 0; i < this.length; i++){
        accumulator = cb(accumulator, this[i]);
    }
    return accumulator;
}

const total = arr.myReduce(sum, 0);
console.log(total);