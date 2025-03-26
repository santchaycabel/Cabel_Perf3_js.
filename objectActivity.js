// Create an object called car with properties: type, model, and color
let car = {
    type: "Sedan",
    model: "2020",
    color: "Red"
};

// Use typeof to check the type of the object and log it to the console
console.log("My type of car:", typeof car);  // Output: object

// Update the type property to "Toyota"
car.type = "Toyota";
console.log("I want to update my car:", car);

// Add a new property 'wheels' with the value 4
car.wheels = 4;
console.log("Count the wheels of my car:", car);

/*output
My type of car: object
I want to update my car: { type: 'Toyota', model: '2020', color: 'Red' }
Count the wheels of my car: { type: 'Toyota', model: '2020', color: 'Red', wheels: 4 }
