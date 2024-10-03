// Your existing family object setup
var person = {
    name: "John",                // String
    lastName: "Doe",
    age: 35,                     // Number
    gender: "male",
    luckyNumbers: [7, 11, 13, 17], // Array
    significantOther: person2   // Object, yes, the same variable/object defined after
};

var person2 = {
    name: "Jane",
    lastName: "Doe",
    age: 38,
    gender: "female",
    luckyNumbers: [2, 4, 6, 8],
    significantOther: person
};

var family = {
    lastName: "Doe",
    members: [person, person2]   // Array of objects, don't forget to add Jimmy
};

// 1. Change the fourth luckyNumber of John Doe to 33
person.luckyNumbers[3] = 33;

// 2. Create a new person and add it to the family object
var jimmy = {
    name: "Jimmy",
    lastName: "Doe",
    age: 13,
    gender: "male",
    luckyNumbers: [1, 2, 3, 4],
    significantOther: null
};

family.members.push(jimmy);

// 3. Update the addAllFamilyLuckyNumbers function
function addAllFamilyLuckyNumbers(anArray){
    let sumOfAllLuckyNumbers = 0; // sumOfAllLuckyNumbers is a number, the sum of all lucky numbers.

    // Loop through each member in the family
    for (let member of anArray) {
        // Loop through each lucky number of the member
        for (let number of member.luckyNumbers) {
            sumOfAllLuckyNumbers += number;
        }
    }
  
    return sumOfAllLuckyNumbers;
}

// Do not make changes below:
console.log(addAllFamilyLuckyNumbers(family.members)); 
