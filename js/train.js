// let myName = 'Roman';
// let secondName = 'Ilienko';

// let isOnline = true;
// console.log(isOnline);

// let newString = Number(isOnline);
// console.log(newString);

// let numberToString = String(newString);
// console.log(numberToString + "11");


// function count(pricePerItem, orderedQuantity) {
// //    console.log(`Sum of this num is ${pricePerItem} + ${orderedQuantity}`)
//     let totalPrice = pricePerItem * orderedQuantity;
//     return totalPrice;
// };
// count(433, 122);





// function add(a, b, c) {
//   console.log(`Addition result equals ${a + b + c}`);

// }

// add(15, 27, 10);
// add(10, 20, 30);
// add(5, 10, 15);


// let num = Math.random(10) * 10;
// console.log(num);
// console.log(Math.round(num));


// console.log(Math.max(10, 12, 2, 14, 56, 34, 767, 3432, 567, 434, 323, 2345, 2131, 1231, 545));



// console.log(myName + ' ' + secondName);

// let string = "my name is roman";

// console.log(string.toUpperCase());
// console.log(string.length);

// let stringLow = "HELLO MOTHERFUCKERS";
// console.log(stringLow.toLowerCase());

// let message = "Hello"
// let rAlert = alert("hello");
// console.log(rAlert);

// function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
//     let message;
//     const totalPrice = pricePerDroid * orderedQuantity;
//     if (totalPrice > customerCredits) {
//         message = "Insufficient funds!";
//     } else {
//         customerCredits -= totalPrice;
//         message = `You ordered ${orderedQuantity} droids, you have ${customerCredits} credits left`;
//     }
//     return message;
// }

// console.log(makeTransaction(5000, 5, 40000));

// function getDiscount(totalSpent) {
//   const BASE_DISCOUNT = 0;
//   const BRONZE_DISCOUNT = 0.02;
//   const SILVER_DISCOUNT = 0.05;
//   const GOLD_DISCOUNT = 0.1;
//   let discount;
//   // Change code below this line
// if (totalSpent >= 50000) {
// discount = GOLD_DISCOUNT

// } else if (totalSpent >= 20000 && totalSpent < 50000) {
// discount = SILVER_DISCOUNT

// } else if (totalSpent >= 5000 && totalSpent <= 19999) {
// discount = BRONZE_DISCOUNT

// } else if (totalSpent < 5000) {
// discount = BASE_DISCOUNT
// };
//   // Change code above this line
//   return discount;
// }

// console.log(getDiscount());


// let user = prompt('Enter ur name')

// if (user === 'Roman') {
//     alert('Hello Roman')
// } else if (user === 'Igor') {
//     alert('Hello Igor')
// } else if (user === 'Vlad') {
//     alert('Hello Vlad')
// } else if (user === 'Sasha') {
//     alert('Hello Sasha')
// } else if (user === 'Bogdan') {
//     alert('Hello Bogdan')
// } else {
//     alert("Your are not our user")
// }


// switch (user) {
//     case "Roman":
//         alert('Hello Roman')
//         break;

//     case "Igor":
//         alert('Hello Igor')
//         break;

//     case "Vlad":
//         alert('Hello Vlad')
//         break;

//     case "Sasha":
//         alert('Hello Sasha')
//         break;

//     case "Bogdan":
//         alert('Hello Bogdan')
//         break;

//     default:
//         alert('Ur not our User, sorry!')
// };      

// const newArr = ['Mon', 'Tue', 'Wed', 'Thu'];

// for (let day = 0; day < newArr.length; day++) {
//     console.log(newArr[day], day);
// };

// for (let day of newArr) {
//     console.log(day);
// };

// const array1 = ['Hello, my name is Roman'];

// for (const symbol of array1) {
//     console.log(symbol);
// };



// const string = 'javascript';

// for (const character of string) {
//   console.log(character);
// }



// const clients = ['Mango', 'Poly', 'Ajax'];
// const clientNameToFind = prompt('Enter the name');
// let message;

// for (const client of clients) {
//   /*
//    * На кожній ітерації ми будемо перевіряти чи збігається елемент масиву з
//    * ім'ям клієнта. Якщо збігається то ми записуємо в message повідомлення
//    * про успіх і робимо break щоб не шукати далі
//    */

//   if (client === clientNameToFind) {
//     message = 'Клієнт з таким іменем є в базі даних!';
//     break;
//   }

//   // Якщо вони не збігаються то запишемо в resultMsg повідомлення про відсутність імені
//   message = 'Клієнта з таким іменем немає в базі даних!';
// }

// console.log(message); // Клієнт з таким іменем є в базі даних!



// const clients = ['Mango', 'Poly', 'Ajax'];
// const clientNameToFind = 'Poly';
// let message;

// for (const client of clients) {


//   if (client === clientNameToFind) {
//     message = 'Клієнт з таким іменем є в базі даних!';
//     break;
//   }


//   message = 'Клієнта з таким іменем немає в базі даних!';
// }

// console.log(message); 

// const numbers = [1, 3, 14, 18, 4, 7, 29, 6, 34];
// const bigInt = 15;
// const newNum = [];

// for (const num of numbers) {
//     if (num < bigInt) {
//         newNum.push(num)
//         console.log(newNum);
//     } else {

//     }
//  }

