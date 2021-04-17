// //Swapping 
// let firstColor = 'red';
// let secondColor = 'blue';

// console.log('First Color: ' + firstColor + ' Second Color ' + secondColor);

// let temp = '';

// temp = firstColor;
// firstColor = secondColor;
// secondColor = temp;

// console.log('First Color: ' + firstColor + ' Second Color ' + secondColor);


// // if.... else

// let hour = 19;

// if(hour >= 6 && hour < 12)
//     console.log('Good Morning!');
// else if(hour >=12 && hour < 18)
//     console.log('Good Afternoon!')
// else
//     console.log('Good Evening!')

    
// // Switch

// let role;

// switch(role){
//     case 'guest':
//         console.log('Guest User');
//         break;
    
//     case 'Moderator':
//         console.log('Moderator User');
//         break;

//     default:
//         console.log('Default User');
// }
// // For loop
// for (let i = 0; i <= 5; i++ ){
//     console.log(i);
// }
// // While loop
// let j = 0;
// while (j<=5){
//     console.log(j);
//     j++;
// }
// //do..while
// let i = 0;
// do{
//     console.log(i);
//     i++
// }while(i<=5)


// //For ...... in

// const person = {
//     name: 'Rama',
//     id: 545
// };

// for(let key in person)
// console.log(key, person[key]);

// const colors = ['red', 'blue', 'green'];

// for(let index in colors)
// console.log(index, colors[index]);

// // For.......Of
// for(let color of colors)
// console.log(color);

// //Break and Continue
// i = 0;
// while(i<=10){
//     if(i===8) break;
//     if(i % 2 === 0){
//         i++;
//         // continue;
//     }
//     console.log(i);
//     i++
// }
// // Exercise-1 Function which retunrs max of two.

// function MaximumOfTwo (x, y){
     
//     // if(x > y) 
//     // console.log(x);
//     // else console.log(y);
    

//     return (x > y) ? x : y;
// }
// let a = MaximumOfTwo(0, 20);
// console.log(a);

// // Exercise-2 Ladnscape or Portrait

// function Ladnscape(width, height) {
//     return (width > height);
// }
// let b = Ladnscape(30, 40);
// console.log(b);

// //Exercise-3 FizzBuzz

// function FizzBuzz(number){
//     if(isNaN(number)) return 'Not a number';
//     if(number % 3 === 0 && number % 5 === 0) return 'FizzBuzz'; continue;
//     if(number % 3 === 0) return 'Fizz';
//     if(number % 5 === 0) return 'Buzz';
//     return number;
       
// }

// console.log(FizzBuzz(15));

// //Exercise 4- Demerit points

// function checkSpeed(speed){
//     const speedLimit = 70;
//     const kmPerSpeed = 5;
//     if(speed < speedLimit + kmPerSpeed ){ 
//         return 'Ok';
//     }
    
//     const points = Math.floor((speed - speedLimit)/5);
//     if( points >= 60) return '12 Demerit Points. Speed was ' + speed +'. Licence Suspended';
//     return points  + ' Demerit Points. Speed was ' + speed;
        

    
// }

// console.log(checkSpeed(75));

// //Exercise 5 - Even and Odd Numbers.
// function showNumbers(limit){
    
//     for(let i=0; i <= limit; i++){
//         if(i%2) console.log( i +' ODD');
//         else console.log( i , ' EVEN');
//     }
//     for(let i=0; i<=limit; i++){
//         const message = (i%2) ? 'ODD' : 'EVEN';
//         console.log(i, message);
//     }
// }

// showNumbers(10);


// // Exercise 6 - Count Truthy

// const array = ['rama', 'nayudu', 'sadam', 's', null, NaN, false];

// function countTruthy(array){
//     let count = 0;
//     for(let i = 0; i < array.length - 1; i++ ){
//         if(array[i]) count++;
//     }
//     console.log(count); 
// }

// // Simple way
// function countTruthySimple(array){
//     let count = 0;
//     for( let value of array){
//         if(value) count++;
//     }
//     console.log(count);
// }

// countTruthy(array);
// countTruthySimple(array)


// // Exercise 7 - Show String peoperties

// const movie = {
//     title: 'abc',
//     releaseYear: 2020,
//     rating: 4.7,
//     director: 'xyz'
// };

// function showProperties(object){
//     for(let key in object){
//         // console.log(typeof(object[key])); 
//         if(typeof(object[key]) === 'string') console.log(key, object[key]);
//     }
// }

// showProperties(movie);


// //Exercise 8 - Sum of multiples of 3 and 5
// {
//     // sum(30) 
//     function sum(number){
//         let sum = 0;
//         for(let i = 0; i <= number; i++)            
//             if(i % 3 === 0 || i % 5 === 0) sum += i;

//         return sum;

//     } 
//     console.log(sum(10));
// }

// // Exercise 9 - Grade
// {

//     const marks = [90, 90, 90];
//     console.log(calculateMarks(marks));
//     function calculateMarks(marks){
//         const average = calculateAverage(marks);
//         if(average >= 90) return 'A';
//         if(average >= 80) return 'B';
//         if(average >= 70) return 'C';
//         if(average >= 60) return 'D';
//         return 'F';
//     }
    
//     function calculateAverage(array){

//         const length = array.length;
//         let sum = 0;
//         for(let value of array){
//             sum += value;
//         }
//         return sum/length;
//     }

// }

// // Excercise 10 - Stars

// {
//     showStarsDecreasing(10);
//     showStartsIncrasing(10);

//     function showStarsDecreasing(rows){
       
//         for(let i = rows; i > 0; i--){
//             let pattern = '';
//             for (let j = 0; j< i; j++)
//             pattern += '+';
//              console.log(pattern);

//         }
//     }

//     function showStartsIncrasing(rows){
        
//         for(let i = 1; i <= rows; i++ ){
//             let pattern = '';
//             for(let j=0; j<i; j++){
//                 pattern += '*';
                
//             }
//             console.log(pattern);
//         }

//     }
// }

//Exercise 11 Prime Number

// {

//     console.log(showPrimeNumbers(10));

//     function showPrimeNumbers(number){
//         for(let i = 2; i <= number; i++){
//             let isPrime = true;
//             for(let j=2; j < i; j++){ 
//                 if(i % j === 0){
//                     isPrime = false;
//                     break;
//                 }
//             } 
//             if(isPrime) console.log(i);
//         }
//     }

// }

// const colors = ['red', 'green', 'blue'];

// const items = colors.map(color => `<li>${color}</li>`);

// console.log(items);

// //Object

// const circle = {
//     radius: 1,
//     location: {
//         x: 1,
//         y: 1
//     },
//     isVisible: true,
//     draw: function(){
//         console.log("Draw Method");
//     }
// };

// circle.draw(); // Function inside an object is called as method!

// //Factory Functions

// function createCircle(radius) {
//     return {
//         radius,
//         draw(){
//             console.log('Cirle draw with radius ', radius  );
//         }
        
//     };
// }

// const circle1 = createCircle(5);
// const circle2 = createCircle(10);
// console.log(circle1.draw);
// console.log(circle1.draw);
// console.log(circle2.draw());

// // Constructor Functions

// function Circle(radius){
//     this.radius = radius;
//     this.draw = function () {
//         console.log("Draw from Constructor Function");
//     }
// }

// const circle = new Circle(7); // new key word creates a new object
// console.log(circle);

// //Dynamic Nature of Object: After creaing an object we can add or delete properties of it.  We can't reset to another object. 

// const dynamicObject = {
//     size: 10
// }

// dynamicObject.color = 'red';
// dynamicObject.draw = function () {
//     console.log('dynamic object draw method.');
// };

 

// delete dynamicObject.size;

// console.log(dynamicObject);
 

// /* Enumerating Properties of an Object */

// const EnuObj = {
//     color: 'red',
//     size: 20,
//     display() {
//         console.log("display method form EnuObj");
//     }
// };

// for(let key in EnuObj) console.log(key, EnuObj[key]); 

// // we cannot use of operator on object it is not iterable. Insted we can use Object.keys() method which return array 
// for(let key of Object.keys(EnuObj)) console.log(key); 

// // Same like Object.keys() method, object.entries will return key value pair
// for (let entry of Object.entries(EnuObj)) console.log(entry);

// // 'in' operator is used to check whetehr given property exist in object or not 

// 'color' in EnuObj  ? console.log('yes') : console.log('no'); //output will be yes, EnuObj has color property 

// 'width' in EnuObj ? console.log('yes') : console.log('no'); // output will be no, EnuObj does not have width property 

// const another = EnuObj;

// console.log(another);
// console.log(EnuObj);


//  const movies = ["a", "b", "c", "d"];
 
//  console.log(movies);
 
//  const index = 2;

//  console.log(movies[index]);
 
//  movies[index] = {...movies[index]};
 
//  console.log(movies[index]);

//  console.log(movies);

 


