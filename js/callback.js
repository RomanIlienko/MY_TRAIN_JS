// const filter = function (array, test) {
//   const filteredElements = [];

//   for (const element of array) {
//       const passed = test(element);
//       console.log(test(element));

//     if (passed) {
//       filteredElements.push(element);
//     }
//   }

//   return filteredElements;
// };

// const fruits = [
//     { name: 'apples', quantity: 110, isFresh: true, age: 'young' },
//     { name: 'grapes', quantity: 150, isFresh: false, age: 'old' },
//     { name: 'cherry', quantity: 130, isFresh: true, age: 'young' },
//     { name: 'pear', quantity: 140, isFresh: true, age: 'old' },
//     { name: 'pineapple', quantity: 200, isFresh: false, age: 'young' },
// ];

// const freshFruits = filter(fruits, fruit => fruit.isFresh);
// console.log(freshFruits); 

// const fruitsWithQuantity = filter(fruits, fruit => fruit.quantity >= 120);
// console.log(fruitsWithQuantity);




// const fruits = [
//     { name: 'apples', quantity: 110, isFresh: true, age: 'young' },
//     { name: 'grapes', quantity: 150, isFresh: false, age: 'old' },
//     { name: 'cherry', quantity: 130, isFresh: true, age: 'young' },
//     { name: 'avocado', quantity: 140, isFresh: true, age: 'old' },
//     { name: 'pineapple', quantity: 200, isFresh: false, age: 'young' },
// ];


//  function firstFn(value,callback) {
//     callback(value)    
//  }
// firstFn('My new lesson', setMessage)
 
// function setMessage(message) {
//     console.log(message);
// }

// ----------------------------------------------------------------

// function getCourse( callback1, callback2, callback3, callback4 ) {
//     callback1()
//     callback2()
//     callback3()
//     callback4()
// }
// getCourse(showName, showAge, showSkill, showPhoto )

// function showName() {
//     console.log('Roman');
// }
//  function showAge() {
//     console.log(30);
// }
// function showSkill() {
//     console.log('JS');
// }
// function showPhoto() {
//     console.log('https://www.google.com/search?q=%D0%BA%D0%B0%D1%80%D1%82%D0%B8%D0%BD%D0%BA%D0%B8&rlz=1C1SQJL_ruUA944UA944&sxsrf=ALeKk032tJXrO8sV_shfdjMPXV2Pu18vyQ:1626880089709&tbm=isch&source=iu&ictx=1&fir=D7vBWSFMCZDnPM%252CbzlpbwEP8kf0HM%252C_&vet=1&usg=AI4_-kRHOCQIc4sdvZT095tYd6M5nK4Uqg&sa=X&ved=2ahUKEwja8NrOuPTxAhXFgf0HHSFcB9UQ9QF6BAgPEAE#imgrc=D7vBWSFMCZDnPM');
// }

// ------------------------------------------------------------------
// ПОЛУЧИТЬ ЧИСЛО ФИБОНАЧЧИ
// ------------------------------------------------------------------
// function toGetFibonacci(value, callback) {
//     let firstNum = 0
//     let secondNum = 1
//     const newArr = [firstNum, secondNum]
    
//     for (let i = 1; i <= value; i ++) {
//         let number = firstNum + secondNum
//         firstNum = secondNum
//         secondNum = number
//         newArr.push(number)
//     }

//     return callback(newArr)
// }
// console.log(toGetFibonacci(10, getSum)); 

// function getSum(arr) {
//     let totalNum = 0
//     for (const num of arr) {
//         totalNum += num
//     }

//     return totalNum
// }
// const newArr1 = [1,2,3,4,5,6,7]
// function getSom(arr, callback) {
//  return callback(arr)
// }
// console.log(getSom(newArr1, getSum));

// const array = [
//     { day: 'Monday', temperature: 30.5 },
//     { day: 'Tuesday', temperature: 29.5 },
//     { day: 'Wednesday', temperature: 31.2 },
//     { day: 'Thursday', temperature: 32.1 },
//     { day: 'Friday', temperature: 31.8 },
//     { day: 'Saturday', temperature: 33.7 },
//     { day: 'Sunday', temperature: 29.6},
// ]

// -------------------------------------------------------------
// CALLBACK
// -------------------------------------------------------------


// const pizzaPalace = {
//   pizzas: ['Ультрасыр', 'Аль Копчино', 'Четыре нарезона'],
//     order(pizzaName, callback1, callback2) {
//       for (const pizza of this.pizzas) {
//         if (pizzaName === pizza) {
//         return callback1(pizzaName)
//         }
//         // console.log(pizza);
//         }
//         return callback2(pizzaName)
//     }
  
// };
// console.log(pizzaPalace.order('Венская', makePizza, onOrderError));



// function makePizza(pizzaName) {
//   return `Ваш заказ принят. Готовим пиццу ${pizzaName}.`;
// }


// function onOrderError(error) {
//   return `Ошибка! ${error}`;
// }

// pizzaPalace.order('Аль Копчино', makePizza, onOrderError);
// pizzaPalace.order('Четыре нарезона', makePizza, onOrderError);
// pizzaPalace.order('Биг майк', makePizza, onOrderError);
// pizzaPalace.order('Венская', makePizza, onOrderError);

// ---------------------------------------------------------------


// function filtered(arr, callback) {
    
    

//     return callback(arr)
// }
// console.log(filtered(list, getAge)); 

// function getAge(arr) {
//     const array = []
//     for (const obj of arr) {
//         let age = obj.age
//         if (age > 25) {
//          array.push(age)
//         }
//     }
//     return array
// }
// getAge(list);


// -------------------------------------------------------------
// РАБОТА С КОЛЛБЭКОМ
// -------------------------------------------------------------
// const list = [
//     { name: 'Roman', age: 18 },
//     { name: 'Lera', age: 19 },
//     { name: 'Dima', age: 15 },
//     { name: 'Sergey', age: 16 },
//     { name: 'Alexey', age: 17 },
//     { name: 'Marina', age: 16 },
//     { name: 'Koko', age: 19 },
//     { name: 'Yaroslav', age: 18 }
// ];

// //-------------------------------------------------------------
// // Функция высшего порядка
// function ageChecker(array,callback) {
//     return callback(array)
// }
// //-------------------------------------------------------------

// //-------------------------------------------------------------
// //Функция обратного вызова (callback)
// function ofAge(array) {
//     const namesArray = []
//     for (const obj of array) { 
//         if (obj.age >= 18) {
//             namesArray.push(obj)
//         }
//     }

//     return namesArray
// }
// //-------------------------------------------------------------

// //-------------------------------------------------------------
// //Функция обратного вызова (callback)
// function notOfAge(array) {
//     const ageArr = []
//     for (const obj of array) {
//         if (obj.age < 18) {
//             ageArr.push(obj)
//         }
//     }

//     return ageArr
// }
// //-------------------------------------------------------------

// //-------------------------------------------------------------
// //Функция обратного вызова (callback)
// function midAge(array) {
//     let total = 0
//     for (const obj of array) {
//         total += obj.age / 8
//     }
    
//     return Math.round(total)
// }
// //-------------------------------------------------------------

// //-------------------------------------------------------------
// //ОБЪЯВЛЯЕМ ПЕРЕМЕННУЮ КАК РЕЗУЛЬТАТ ФУНКЦИИ
// const ofAgeStudents = ageChecker(list, ofAge)
// console.log(ofAgeStudents);

// const notOfAgeStudents = ageChecker(list, notOfAge)
// console.log(notOfAgeStudents);

// const midAgeStudents = ageChecker(list, midAge)
// console.log(midAgeStudents);
// -------------------------------------------------------------


// const orders = [
//   { email: 'solomon@topmail.ua', dish: 'Burger' },
//   { email: 'artemis@coldmail.net', dish: 'Pizza' },
//   { email: 'jacob@mail.com', dish: 'Taco' },
// ];

// function composeMessage(position) {
//     return `Готовим ${orders.dish} для ${orders.email}. Ваш заказ ${position + 1} в очереди`
// }
// const messages = []
// for (let i = 0; i < orders.length; i++) {
//     messages.push(composeMessage.call(orders[i], position))
//  }

// console.log(messages);

// //-------------------------------------------------------------

// //-------------------------------------------------------------

// function discount15(discount, price) {
//   return price / 100 * discount
// }
// // console.log(discount(15, 3500));


// function getDiscount(discount) {
//   return (price) => {
//     return price / 100 * discount
//   }
// }
// const discount20 = getDiscount(20)
// console.log(discount20(500));
// console.log(discount20(1000));

