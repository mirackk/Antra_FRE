// 1
// a function that reverse a number
// convert the number to the string
// reverse the string
// convert the string to the number
const reverseNumber = (num) => {
    return parseInt(num.toString().split('').reverse().join(''));
}
console.log(reverseNumber(234234));

// 2
// Write a JavaScript function that checks whether a passed string is palindrome or not
const isPalindrome = (str) => {
    a = str.split('');
    b = a.reverse();
    c = b.join('');
    return str === c;
}
console.log(isPalindrome('racecar'));

// 3
// Write a JavaScript function that generates all combinations of a string. 
const combinations = (str) => {
    let result = [];
    let f = (prefix, str) => {
        for (let i = 0; i < str.length; i++) {
            result.push(prefix + str[i]);
            f(prefix + str[i], str.slice(i + 1));
        }
    }
    f('', str);
    return result;
}
console.log(combinations('abc'));

// 4
// Write a JavaScript function that returns a passed string with letters in alphabetical order
const alphabetOrder = (str) => {
    return str.split('').sort().join('');
}
console.log(alphabetOrder('webmaster'));


// 5
// Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case.
const upperFirst = (str) => {
    let a = str.split(' ');
    for (let i = 0; i < a.length; i++) {
        a[i] = a[i][0].toUpperCase() + a[i].slice(1);
    }
    return a.join(' ');
}
console.log(upperFirst('the quick brown fox'));

// 6
// Write a JavaScript function that accepts a string as a parameter and find the longest word within the string. 
// Example string: 'Web Development Tutorial' 
const longest = (str) => {
    let a = str.split(' ');
    res = ""
    for (let i = 0; i < a.length; i++) {
        if (a[i].length > res.length) {
            res = a[i];
        }
    }
    return res;
}
console.log(longest('Web Development Tutorial'));

// 7
// Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string.
const countVowels = (str) => {
    let a = str.split('');
    let count = 0;
    for (let i = 0; i < a.length; i++) {
        if (a[i].match(/[aeiou]/)) {
            count++;
        }
    }
    return count;
}
console.log(countVowels('The quick brown fox'));

// 8
// Write a JavaScript function that accepts a number as a parameter and check the number is prime or not. 
const isPrime = (num) => {
    if (num < 2) {
        return false;
    }
    for (let i = 2; i*i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}
console.log(isPrime(38));

// 9 
// Write a JavaScript function which accepts an argument and returns the type. 
// Note: There are six possible values that typeof returns: object, boolean, function, number, string, and undefined.
const getType = (arg) => {
    return typeof arg;
}
console.log(getType('abc'));

// 10
// Write a JavaScript function which returns the n rows by n columns identity matrix. 
const identityMatrix = (n) => {
    let res = [];
    for (let i = 0; i < n; i++) {
        let a = [];
        for (let j = 0; j < n; j++) {
            if (i === j) {
                a.push(1);
            } else {
                a.push(0);
            }
        }
        res.push(a);
    }
    return res;
}

// 11
// Write a JavaScript function which will take an array of numbers stored and find the second lowest and second greatest numbers, respectively. 
const secondLowestAndGreatest = (arr) => {
    arr.sort((a, b) => a - b);
    return [arr[1], arr[arr.length - 2]];
}
console.log(secondLowestAndGreatest([1, 2, 3, 4, 5]));

// 12
// Write a JavaScript function which says whether a number is perfect.
const isPerfect = (num) => {
    let sum = 0;
    for (let i = 1; i < num; i++) {
        if (num % i === 0) {
            sum += i;
        }
    }
    return sum === num;
}
console.log(isPerfect(28));

// 13
// Write a JavaScript function to compute the factors of a positive integer.
const factors = (num) => {
    let res = [];
    for (let i = 1; i <= num; i++) {
        if (num % i === 0) {
            res.push(i);
        }
    }
    return res;
}

// 14
// Write a JavaScript function to convert an amount to coins.
// Sample function: amountTocoins(46, [25, 10, 5, 2, 1])
// Here 46 is the amount. and 25, 10, 5, 2, 1 are coins.
const amountToCoins = (amount, coins) => {
    let res = [];
    for (let i = 0; i < coins.length; i++) {
        while (amount >= coins[i]) {
            res.push(coins[i]);
            amount -= coins[i];
        }
    }
    return res;
}

// 15
// Write a JavaScript function to compute the value of bn where n is the exponent and b is the bases.
// Accept b and n from the user and display the result.
const power = (b, n) => {
    return Math.pow(b, n);
}
// // Import the readline module
// const readline = require('readline');

// // Create an interface for input and output
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// // Function to ask a question and return the response
// function askQuestion(query) {
//   return new Promise(resolve => rl.question(query, ans => {
//     resolve(ans);
//   }));
// }

// async function computePower() {
//   // Ask for the base
//   const base = await askQuestion("Enter the base (b): ");
//   // Ask for the exponent
//   const exponent = await askQuestion("Enter the exponent (n): ");

//   const baseNum = Number(base);
//   const exponentNum = Number(exponent);

//   // Validate the input
//   if (isNaN(baseNum) || isNaN(exponentNum)) {
//     console.log("Please enter valid numbers for both base and exponent.");
//   } else {
//     // Compute and display the result
//     const result = Math.pow(baseNum, exponentNum);
//     console.log(`The result of ${baseNum}^${exponentNum} is: ${result}`);
//   }

//   rl.close();
// }

// computePower();


// 16
// Write a JavaScript function to extract unique characters from a string.
const unique = (str) => {
    let res = '';
    for (let i = 0; i < str.length; i++) {
        if (res.indexOf(str[i]) === -1) {
            res += str[i];
        }
    }
    return res;
}

// 17
// Write a JavaScript function to get the number of occurrences of each letter in specified string. 
const occurrences = (str) => {
    let res = {};
    for (let i = 0; i < str.length; i++) {
        if (res[str[i]]) {
            res[str[i]]++;
        } else {
            res[str[i]] = 1;
        }
    }
    return res;
}

// 18
//  Write a function for searching JavaScript arrays with a binary search.
const binarySearch = (arr, target) => {
    let left = 0;
    let right = arr.length - 1;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (arr[mid] === target) {
            return mid;
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return -1;
}

// 19
// Write a JavaScript function that returns array elements larger than a number. 
const largerThan = (arr, num) => {
    return arr.filter((el) => el > num);
}
console.log(largerThan([1, 2, 3, 4, 5], 3));

// 20 
// Write a JavaScript function that generates a string id (specified length) of random characters.
const randomId = (len) => {
    let res = '';
    let chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < len; i++) {
        res += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return res;
}
console.log(randomId(10));

// 21
// Write a JavaScript function to get all possible subset with a fixed length (for example 2) combinations in an array. 
const subset = (arr, len) => {
    let res = [];
    let f = (prefix, arr) => {
        if (prefix.length === len) {
            res.push(prefix);
            return;
        }
        for (let i = 0; i < arr.length; i++) {
            f(prefix.concat(arr[i]), arr.slice(i + 1));
        }
    }
    f([], arr);
    return res;
}
console.log(subset([1,2,3],2))

// 22
// Write a JavaScript function that accepts two arguments, a string and a letter and the function will count the number of occurrences of the specified letter within the string. 
const countChar = (str,ch) =>{
    // res = 0
    dic = {}
    for(let i=0;i<str.length;i++){
        if(dic[str[i]]){
            dic[str[i]]++;
        }
        else{
            dic[str[i]]=1;
        }
    }
    if(dic[ch]){
        return dic[ch]
    }
    return 0
}
console.log(countChar('microsoft.com', 'c' ));

// 23
// Write a JavaScript function to find the first not repeated character. 
const firstNotRepeated = (str) => {
    dic = {}
    for(let i=0;i<str.length;i++){
        if(dic[str[i]]){
            dic[str[i]]++;
        }
        else{
            dic[str[i]]=1;
        }
    }
    for(let i=0;i<str.length;i++){
        if(dic[str[i]]===1){
            return str[i]
        }
    }
    return ""
}
console.log(firstNotRepeated('abacddbec'));

// 24
// Write a JavaScript function to apply Bubble Sort algorithm.
const bubbleSort = (arr) => {
    for(let i=0;i<arr.length;i++){
        for(let j=0;j<arr.length-i-1;j++){
            if(arr[j]>arr[j+1]){
                [arr[j],arr[j+1]]=[arr[j+1],arr[j]]
            }
        }
    }
    return arr;
}

// 25
// Write a JavaScript function that accept a list of country names as input and returns the longest country name as output.
const longestCountry = (arr) => {
    let res = "";
    for(let i=0;i<arr.length;i++){
        if(arr[i].length>res.length){
            res = arr[i];
        }
    }
    return res;
}

// 26
// Write a JavaScript function to find longest substring in a given a string without repeating characters. 
const longestSubstring = (str) => {
    let res = "";
    let temp = "";
    for(let i=0;i<str.length;i++){
        if(temp.indexOf(str[i])===-1){
            temp+=str[i];
        }
        else{
            if(temp.length>res.length){
                res = temp;
            }
            temp = str[i];
        }
    }
    return res;
}

// 27
// Write a JavaScript function that returns the longest palindrome in a given string.
const longestPalindrome = (str) => {
    const judge = (left, right) => {
        while (left >= 0 && right < s.length && s[left] === s[right]) {
          left -= 1;
          right += 1;
        }
        return s.substring(left + 1, right);
    };
  
    if (!s) {
        return "";
    }
      
    let longest = "";
    for (let i = 0; i < s.length; i++) {
        let cur = judge(i, i);
        if (cur.length > longest.length) {
          longest = cur;
        }
        cur = judge(i, i + 1);
        if (cur.length > longest.length) {
          longest = cur;
        }
    }
    return longest;
}

// 28
// Write a JavaScript function to pass a 'JavaScript function' as parameter.
const passFunction = (func) => {
    return func();
}

// 29
// Write a JavaScript function to get the function name.
const functionName = () => {
    return this.name;
}
