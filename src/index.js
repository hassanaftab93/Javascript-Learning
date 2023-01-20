// // This is a comment

// let firstName = "Hassan";
// let lastName = "Aftab";
// console.log(firstName,lastName);
// console.log("Hello World with JS!");

// const interestRate = 1.5;

// //Primitives:

// let name = "Hassan";    //String
// let age = 5;            //Number
// let isApproved = false; //Boolean
// let value = undefined;  //Undefined | Type + Value
// let color = null;       //null      | Object

// //ReferenceTypes:

// let person = {
//     name: 'Hassan',
//     age: 30
// };

// person.name = 'Overwritten Name'

// console.log(person);

// console.clear();

// let selectedColors = ['red','blue','green'];
// selectedColors[selectedColors.length] = 'purple';
// selectedColors[selectedColors.length] = 'silver';
// console.log(selectedColors);

// console.clear();

// //Functions

// function greet(name) {
//     console.log('Hello '+ name);
// }

// function square(number) {
//     return number*number;
// }

// greet(firstName);
// console.log('Squared value: '+square(2));

let hour = 20;

if(hour >= 6 && hour <12)
    console.log('Good Morning');
else if (hour >=12 && hour < 18)
    console.log('Good Afternoon');
else
    console.log('Good Evening');