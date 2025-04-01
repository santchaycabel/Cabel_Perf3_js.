// 1. concat()
let arr1 = ["Santchay", "Efrelle"];
let arr2 = ["Emil", "Mark", "irene"];
let combinedArray = arr1.concat(arr2);
console.log("Combined Array:", combinedArray);

// 2. push()
let fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.push("Kiwi");
console.log("I want to add one fruit:", fruits);

// 3. unshift()
let array1 = [1, 2, 3];
array1.unshift(4, 5);
console.log("Add numbers:", array1);

// 4. pop()
let favFruits = ["mango", "Banana", "melon", "peach"];
favFruits.pop();
console.log("My favorite fruits:", favFruits);

// 5. shift()
let array2 = [1, 2, 3];
array2.shift();
console.log("Reject numbers:", array2);

// 6. sort()
let arrangefruits = ["Mango", "banana", "melon", "lemon"];
arrangefruits.sort();
console.log("Arrange my fruits:", arrangefruits);

// 7. slice()
let sliedfruts = ["Jackfruits", "banana", "guava", "lemon"];
let slicedFruits = sliedfruts.slice(1, 3);
console.log("I like to sliced fruits:", slicedFruits);

// 8. splice()
let months = ["January", "March", "April", "June"];
months.splice(1, 0, "February");
months.splice(4, 1, "May");
console.log("I love May:", months);

/*Output:

Output:

Combined Array: [ 'Santchay', 'Efrelle', 'Emil', 'Mark', 'irene' ]
I want to add one fruit: [ 'Banana', 'Orange', 'Apple', 'Mango', 'Kiwi' ]
Add numbers: [ 4, 5, 1, 2, 3 ]
My favorite fruits: [ 'mango', 'Banana', 'melon' ]
Reject numbers: [ 2, 3 ]
Arrange my fruits: [ 'Mango', 'banana', 'lemon', 'melon' ]
I like to sliced fruits: [ 'banana', 'guava' ]
I love May: [ 'January', 'February', 'March', 'April', 'May' ]

