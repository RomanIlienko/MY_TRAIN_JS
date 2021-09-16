// const string = 'I love JavaScript, and i will reach success!'
// let newString = string.split("");
// console.log(newString);
// let exNewString = newString.join(' ')
// console.log(exNewString);
// let haveL = exNewString.includes('l')
// console.log(haveL);
// let newL = Number(haveL);
// console.log(newL);
// newL = String(newL);
// console.log(newL);
// let isNum = isNaN(newL);
// console.log(isNum);

// const first = function (a, b, c) {

//     return a + b + c;
// };

// const add = first(11, 22, 66);
// console.log(add);
// let message;
// const operation = function (balance, request) {
//     if (request <= balance) {
//         return message = "Операция проведена успешно"
//     } else if (request > balance) {
//         return message = 'На счету мало средств';
//     } else {
//         return message = 'Введте сумму';
//     }

// }
// operation(1200, 1100);
// console.log(message);

// let up = null || "false" && "mango";
// console.log(up);

// const numbers = [1, 3, 14, 18, 4, 7, 29, 6, 34];
// for (let i = 0; i < numbers.length; i++) {
//     if (i % 2 === 0)
//     console.log(`Number ${i + 1}`,numbers[i]);
// }

// for (let num of numbers) {
//     if (num % 2 === 0)
//         console.log(num);
//  };

// function getExtremeElements(array) {
//     // Change code below this line
//     let newArr = []
//     const firstEl = array[0];
//     const lastEl = array[array.length - 1]
//     newArr.push(firstEl, lastEl)

// function calculateEngravingPrice(message, pricePerWord) {
//    // Change code below this line
//    let totalPrice;
//    let oneWord = message.split(' ');
//    totalPrice = oneWord * pricePerWord;
//    return totalPrice;
//    calculateEngravingPrice('I love you', 10)
//    console.log(oneWord);
// }

   // Change code above this line

// let zel = ['Lera', 'Lesha', 'Marina', 'Elya', 'Vasya', 'Denis'];
// // console.log(zel);

// let lastW = zel[3];
// // console.log(lastW);

// lastW = 'Vika';
// // console.log(lastW);

// zel[3] = 'Ira';
// // console.log(zel);

// for (let w = 0; w < zel.length; w = w + 1) {
//    // console.log(zel[w]);

// };

// zel[6] = 'Sasha';
 
// for (const wk of zel) {
//    if (wk === 'Vasya')
//       continue;
//    // console.log(wk);
// }
 

// const zelTwo = zel;
// console.log(zelTwo);
// console.log(zel);


// function checkStorage(available, ordered) {
//   // Change code below this line
  

//   if (ordered === 0) 
//     return "Your order is empty!";
  
//   if (ordered > available) 
//     return "Your order is too large, not enough goods in stock!";
   
//     return "The order is accepted, our manager will contact you";
 

  
//   // Change code above this line
// }
// console.log(checkStorage(10, 0));
// const friends = ['Roma', 'Dima', 'Costa', 'Alex'];
// for (const friend of friends) {
//    console.log(friend);
// }

//------------------------------------------
//СРЕДНЕЕ АРИФМЕТИЧЕСКОЕ И ТОТАЛ ВСЕХ ЧИСЕЛ
//------------------------------------------
// const sum = [12, 45, 36, 109, 65, 17, 9, 15, 30];

// let total = 0;
// let cut;
// for (const i of sum) {
//    total += i
//    cut = total / sum.length 
//    }
// console.log(total);
// console.log(cut);

//------------------------------------------
// ТОТАЛ ВСЕХ ЧИСЕЛ
//------------------------------------------
// function calculateTotalPrice(order) {
//   let total = 0;
//   // Change code below this line
// for (let i of order) {
// total += i
// }
//   // Change code above this line
//   return total;
// }

//------------------------------------------
//КАЖДОЕ ЧИСЛО С ПРОЦЕНТОМ
//------------------------------------------
// for (let i = 0; i < sum.length; i++) {
//    sum[i] = Math.round(sum[i] *= 1.1)
//       console.log(sum[i]);
//       }


//------------------------------------------
//CУММА ВСЕХ ЧЕТНЫХ
//------------------------------------------
// const sum = [12, 45, 36, 109, 65, 17, 9, 15, 30, 66, 100, 22, 2];
// let good = 0
// for (let i of sum) {
//    console.log(i);
//    if (i % 2 === 0) {
//       console.log('четное');
//       good += i
      
//     }

// }
// console.log('total', good);

//------------------------------------------
//ПОИСК НУЖНОГО ПАРОЛЯ
//------------------------------------------

// const passwords = ['qwertyzxcvbn', 'qwerytrewqzxc', 'ytrewqbvcxz', 'asdfghqwerty', 'qwertymike', 'qweasdfasdq' , 'fsdfgghryfd'];
// const needPass = 'qwertymike'
// let message;

// ЦИКЛ ФОР ОФ
// for (let pass of passwords) {
//    if (pass === needPass) {
//       message = 'There is right password'
//       break;
//    } 
//       message = 'There is wrong password'
   
// }

//ЦИКЛ ФОР
// for (let i = 0; i < passwords.length; i++) {
//    console.log(passwords[i]);
// const right = passwords[i]
//    if (right === needPass) {
//       message = 'There is right password'
//    } else {
//       message = 'There is wrong password'
//    }
   
// }

//  console.log(message);
//------------------------------------------
//КОМПОЗИЦИЯ МАССИВОВ
//------------------------------------------
// function makeArray(firstArray, secondArray, maxLength) {
//     // Change code below this line
// const newArray = firstArray.concat(secondArray)

// return newArray.slice(0, maxLength)
//     // Change code above this line
// }
//   console.log(makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3));

//------------------------------------------
//САМОЕ ДЛИННОЕ СЛОВО
//------------------------------------------
// let string = 'I Love Java Script'
//    const word = string.split(' ')
//    console.log(word);
// const = longestWord = word

//------------------------------------------
//НАЙТИ САМОЕ МАЛЕНЬКОЕ ЧИСЛО
//------------------------------------------   
// const coins = [51, 18, 13, 24, 7, 85, 19]
// let smallCoin = coins[0];
// for (const coin of coins) {
//    if (coin < smallCoin) {
//       smallCoin = coin
//     }
// }
// console.log(smallCoin);

//------------------------------------------
//НАЙТИ САМОЕ ДЛИННОЕ СЛОВО
//------------------------------------------   
// function findLongestWord(string) {
//   // Change code below this line
// let longestWord = '';
// const word = string.split(' ')
// for (let i = 0; i < word.length; i += 1 ) {
//    if (longestWord.length < word[i].length) {
//       longestWord = word[i]
//    }
//  }
//  return longestWord
// }
// console.log(findLongestWord("The quick brown fox jumped over the lazy dog"))
//-------------------------------------------
// function mostLongWord(string) {
//    let longWord = '';
//    let newString = string.split(' ')
//    for (let i = 0; i < newString.length; i += 1) {
//       if (longWord.length < newString[i].length)
//          longWord = newString[i]
      
//     }
//     return longWord
// }
//  console.log(mostLongWord("The quick brown fox jumped over the lazy dog"));

//------------------------------------------
//ВОЗВРАТ МАССИВА всех целых чисел от значения min до max
//------------------------------------------    
// function createArrayOfNumbers(min, max) {
//   const numbers = [];
//   for (let i = min; i <= max; i += 1) {
//   numbers.push(i)
//   }

//   return numbers;
// }
// console.log(createArrayOfNumbers(4, 10));

//------------------------------------------
//ФИЛЬТРАЦИЯ МАССИВА ЧИСЕЛ
//------------------------------------------
// function filterArray(numbers, value) {
//   let array = []
// for (let i = 0; i < numbers.length; i += 1) {
// if(numbers[i] > value) {
//   array.push(numbers[i])
// }
// }
//   return array
// }
// console.log(filterArray([10, 12, 15, 17, 14, 20, 22, 11, 24], 14));

//------------------------------------------
//Функция checkFruit(fruit) принимает строку 
// с названием фрукта(параметр fruit)
// и проверяет есть ли такой фрукт в массиве fruits.
//------------------------------------------
// function checkFruit(fruit) {
//   const fruits = ["apple", "plum", "pear", "orange"];

//   return fruit = fruits.includes(fruit); // Change this line
// }

//------------------------------------------
//ОБЩИЕ ЭЛЕМЕНТЫ
//------------------------------------------
// function getCommonElements(array1, array2) {
//   let newArray = []
// for (let i = 0; i < array1.length; i += 1) {
// if (array2.includes(array1[i])) {
//  newArray.push(array1[i])
// } 
// }
// return newArray
// }
// console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]));

//------------------------------------------
//Оператор break
//------------------------------------------
// const start = 6;
// const end = 27;
// let number;
// for (let i = start; i <= end; i += 1) {
//   if (i % 5 === 0) {
//     number = i;
//     break;
//   }
// }
// console.log(number);

//------------------------------------------
//CОДЕРЖИТ ЛИ СТРОКА КАКОЕ НИБУДЬ VALUE. ВОЗВРАТ БУЛЯ
//------------------------------------------
// function includes(array, value) {
// for (let i of array) {
// if (i === value) {
// return true 
// } 
// }
//   return false
// }

// console.log(includes([1, 2, 3, 4, 5], 3));

//------------------------------------------
//СШИВАЕТ МАССИВ В СТРОКУ
//------------------------------------------
// const friends = ['Mango', 'Poly', 'Ajax', 'Kiwi']
//------join--------
// const rdy = friends.join(',')
// console.log(rdy);

//------FOR OF & SLICE--------
// let string = ''
// // console.log(string);
// for (let friend of friends) {
//    string += friend + ','
// }
//  let newStr = string.slice(0, string.length - 1)
//    console.log(newStr);

// ------------------------------------------------------------
//ЗАМЕНЯЕТ РЕГИСТР КАЖДОГО СИМВОЛА В СТРОКЕ НА ПРОТИВОПОЛОЖНЫЙ
//-------------------------------------------------------------
// const string = 'I Love JaVa ScripT'
// let newStr = string.split('')
// let invertStr = ''
// // ------------------------------------------------------------
// //FOR OF & IF ELSE
// //-------------------------------------------------------------
// for (let letter of newStr) {
//    // if (letter === letter.toLowerCase()) {
//    //    invertLetter += letter.toUpperCase()
//    // } else {
//    //    invertLetter += letter.toLowerCase()
//    // }
// // ------------------------------------------------------------
// //-------------ТЕРНАРНЫЙ ОПЕРАТОР
// //-------------------------------------------------------------
//    invertStr +=
//       letter === letter.toLowerCase()
//          ?  letter.toUpperCase()
//          :  letter.toLowerCase();
   
// }
// console.log('invertStr',invertStr);

// // ------------------------------------------------------------
// //-------------SLUG ЧЕРЕЗ 3 ПЕРЕМЕННЫХ
// //-------------------------------------------------------------
// function slug(title) {
// let string = title.toLowerCase()
// let newStr = string.split(' ')
// let res = newStr.join('-')
// return res
// }
// console.log(slug('And I Fall Appart'));

// // ------------------------------------------------------------
// //-------------SLUG ЧЕРЕЗ ЧЕРЕЗ 1 ПЕРЕМЕННУЮ
// //-------------------------------------------------------------
// const string = 'Will you wait for me'
// const newStr = string.toLowerCase().split(' ').join('-');
// console.log(newStr);

//------------------------------------------------------------
//---------------СКРИПТ КОТОРЫЙ СЧИТАЕТ СУММУ ЭЛЕМЕНТОВ В ДВУХ МАССИВАХ
//---------------МОЙ ВАРИАНТ
//------------------------------------------------------------
// const array1 = [5, 10, 15, 20, 25]
// const array2 = [1, 5, 9, 13, 17]
// let total = 0
// let newArr
// let total1 = 0
// let total2 = 0
// for (let num of array1) {
//    total1 += num;
// }
// for (let num of array2) {
//    total2 += num;
// }
// newArr = total1 + total2
// console.log(newArr);

//------------------------------------------------------------
//-----------------ПРАВЛЬНЫЙ ВАРИАНТ
//------------------------------------------------------------
// const newArr = array1.concat(array2)
// for (let num of newArr) {
//    total += num
// }
//  console.log(total);

//------------------------------------------------------------
//----------------РАБОТА С КОЛЛЕКЦИЕЙ КАРТОЧЕК
//------------------------------------------------------------
// const cards = [
//    'Карточка-1',
//    'Карточка-2',
//    'Карточка-3',
//    'Карточка-4',
//    'Карточка-6',
// ]
//----------------SPLICE - УДАЛЕНИЕ-------------------------------------------
// const needCard = 'Карточка-3'
// const cardIdx = cards.indexOf(needCard)
// console.log('Index', cardIdx);
// const rmvCrd = cards.splice(cardIdx, 1)
// console.log(rmvCrd);
// console.log(cards);

//--------------ВСТАВИТЬ КАРТУ----------------------------------------------
// const card5 = 'Карточка-5'
// const indx = 4
// cards.splice(indx, 0, card5)
// console.log(cards);

//-------------ОБНОВЛЕНИЕ ПО ИНДЕКСУ---------------------------------------
// const neddleCard = 'Карточка-4.1'
// cards.splice(3, 1, neddleCard)
// console.log(cards);
// const sum1 = [122, 451, 36, 109, 65, 17, 9, 151, 30, 66, 100, 22, 2];
// const sum2 = [12, 45, 36, 109, 65, 17, 9, 15, 30, 66, 100, 22, 2];
// const sum = [12, 45, 36, 109, 65, 17, 9, 15, 302, 66, 100, 22, 2];

//--------------ПРИМЕР ФУНКЦИИ С ВОЗВРАТОМ СУММЫ ЧИСЕЛ ---------------------------------------
// const fn = function (array) {
//    let good = 0

//    for (let i of array) {
//       good += i
//    }

//   return good
// }
// const result = fn([12, 45, 36, 109, 65, 17, 9, 15, 30, 66, 100, 22, 2]);
// console.log(result);

//ПРИМЕР ФУНКЦИИ С ПОИСКОМ НУЖНОГО ЛОГИНА---------------------------------------
// const loginList = ['lem0nko', 'LemOonko', 'DropDead', 'Psycho', 'GanJaMan', 'ReacT']
// const loginList1 = ['lem0nko1', 'LemOonko1', 'DropDead1', 'Psycho1', 'GanJaMan1', 'ReacT1' ]
//-----------------FOR OF-------------------------------------------------
// const toFindfLogin = function (allLogins, rightLogin) {
//    for (const login of allLogins) {
//       if (login === rightLogin) {
//          return `login ${rightLogin} is find`
//       }
//    }

//    return `login ${rightLogin} is not find`
// }
// const okLogin = toFindfLogin(loginList, 'GanJaMan')
// console.log(okLogin);

//----------------ТЕРНАРНИК---------------------------------------------
// const toFindfLogin = function (allLogins, rightLogin) {
//   return allLogins.includes(rightLogin)
//    ?  `login ${rightLogin} is find`
//       : `login ${rightLogin} is not find`;
// }
// const okLogin = toFindfLogin(loginList, 'GanJaMan')
// console.log(okLogin);

//--------------ПРИМЕР ФУНКЦИИ С ПОИСКОМ МЕНЬШЕГО ЧИСЛА---------------------------------------
// const numList = [12, 21, 15, 62, 24, 98, 64, 35, 53, 11, 34, 67, 88, 5]
// const numList2 = [124, 213, 152, 621, 241, 981, 641, 352, 532, 119, 345, 671, 881]

// const smallestNumber = function (listOfNums) {
//    let smallNum = listOfNums[0];

//    for (const num of listOfNums) {
//       if (num < smallNum) {
//          smallNum = num
//       }
//    }

//    return smallNum
// }
// const value = smallestNumber(numList)
// console.log(value);

//-----------------ПРИМЕР SLUG ФУНКЦИИ---------------------------------------
   // const slugify = function (string) {
   // //---------- ЗАПИСЬ В ТРИ ПЕРЕМЕННЫЕ-------------
   // const newStr = string.toLowerCase()
   // const splitStr = newStr.split(' ')
   // const resultStr = splitStr.join('-')
   // return resultStr

   // //-----------ЗАПИСЬ В ОДИН РЕТУРН--------------------------
   // return string.toLowerCase().split(' ').join('-')
   // }

// const exStr = slugify('I love Java Script')
// console.log(exStr);

//-----------------ПРИМЕР ФУНКЦИИ РАБОТЫ С ПРОИЗВОЛЬНЫМ КОЛИЧЕСТВОМ ЧИСЕЛ КАК АРГУМЕНТОВ---------------------------------------
// const fn = function (...args) {
//    let total = 0

//    for (const arg of args) {
//       total += arg
      
//    }

//    return total
// }
// console.log(fn(5, 10, 15, 20));
// console.log(fn(5, 10, 15, 20, 30, 20));

//----------------СОВПАДАЮТ ЛИ ЦИФРЫ В МАССИВЕ И АРГУМЕНТАХ---------------------
// const add = function (array, ...args) {
//    let newArr = []

//    for (const arg of args) {
//       if (array.includes(arg)) {
//          newArr.push(arg)
//       }
//    }

//    return newArr
// }
// console.log(add([100, 15, 25, 50, 7, 12], 10, 20, 25, 50));

//---------------