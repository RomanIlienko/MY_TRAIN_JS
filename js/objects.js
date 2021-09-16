//=============================================
//OBJECTS ... ОБЪЕКТЫ
//=============================================

// const goods = {
//   apples: 6,
//   grapes: 3,
//   bread: 4,
//   cheese: 7,
// };
// const values = Object.values(goods); // [6, 3, 4, 7]
// const keys = Object.keys(goods)
// let basket = []
// for (const key of keys) {
//    basket += key + ' '
// }
// console.log(basket);
// console.log(keys);
// let total = 0;
// for (const value of values) {
//   total += value;
// }
// console.log(total); // 20
// let newDt = goods
// console.log(newDt);


//----------------------------------------------------

// const id = 'lem0n'
// const password = 'qwertymike'
// const nickName = 'Lem0nko'
// const userList = {
//    id,
//    password,
//    nickName,
//    changeId(newId) {
//       this.id = newId
//    },
//    changePass(newPassword) {
//       this.password = newPassword
//     }
// }
// userList.changePass('qwertyMike9119')
// userList.changeId('Lima')
// console.log(userList);

//-------------------------------------------------------

// const coctails = {
//    strong: "negroni",
//    sour: "Whisky-sour",
//    long: "Long Island",
// }

// const keys = Object.keys(coctails);
// console.log(keys);
// const values = Object.values(coctails)
// console.log(values);
// // console.log(keys);
// for (const key of keys) {
//    // console.log(coctails[key]);
// }

//--------------------------------------------------------
//ПОИСК ДРУГА ПО ИМЕНИ В МАССИВЕ ОБЪЕКТОВ                
//--------------------------------------------------------

// const friends = [
//    { name: 'Roman', online: true },
//    { name: 'Dima', online: false },
//    { name: 'Alexey', online: true },
//    { name: 'Sergey', online: false },
//    { name: 'Yarosalav', online: true }
// ]
// const findFriendByName = function (allFriends, nameToFind) {
//    for (const friend of allFriends) {
//       if (friend.name === nameToFind) {

//          return 'Такое имя есть в списке'
//       }
      
//    }

//    return 'Такого имени нет в списке'
// }
// console.log(findFriendByName(friends, 'Yarosalav'));

//-------------------------------------------------------
//ПОЛУЧИТЬ МАССИВ ИМЕН ИЗ МАССИВА ОБЪЕКТОВ
//-------------------------------------------------------

//const getName = function (allFriends) {
//    const newArr = [];
   
//    for (const friend of allFriends) {
//       newArr.push(friend.name)
//    }
//    return newArr
// }
// console.log(getName(friends));

//-------------------------------------------------------
//НАЙТИ ВСЕХ ДРУЗЕЙ ОНЛАЙН
//-------------------------------------------------------

// const onlineFriends = function (allFriends) {
//    const friendOnline = []

//    for (const friend of allFriends) {
//       if (friend.online) {
//          friendOnline.push(friend.name)
//       } 
//    }
//    return friendOnline
// }
// console.log(onlineFriends(friends));

//-------------------------------------------------------
//НАЙТИ ВСЕХ ДРУЗЕЙ ОFFЛАЙН
//-------------------------------------------------------

// const onlineFriends = function (allFriends) {
//    const friendOffline = []

//    for (const friend of allFriends) {
//       if (!friend.online) {
//          friendOffline.push(friend)
//       } 
//    }
//    return friendOffline
// }
// console.log(onlineFriends(friends));

// const sortFriends = function (allFriends) {
//    const friendsList = {
//       online: [],
//       offline: []
//    }
   
//    for (const friend of allFriends) {
//       if (friend.online) {
//          friendsList.online.push(friend)
//       } else {
//          friendsList.offline.push(friend)
//       }
//    }
//    return friendsList
// }
// console.log(sortFriends(friends))

//-------------------------------------------------------
//КЛЮЧИ И ИХ ЗНАЧЕНИЯ В ОБЪЕКТЕ
//-------------------------------------------------------
// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const keys = [];
// const values = [];

// for (const key in apartment) {
// keys.push(key)
// }
// for (const value in apartment) {
// values.push(apartment[value])
//   }
// console.log(keys);
// console.log(values);

//-------------------------------------------------------
//УЗНАТЬ КОЛИЧЕСТВО СВОЙСТВ В ОБЪЕКТЕ
//-------------------------------------------------------
// const obj = {
//    a: 1,
//    b: 5,
//    c: 50,
//    d: 100
// }

// const props = Object.keys(obj)
// console.log(props);

//-------------------------------------------------------
//РАБОТА С КОРЗИНОЙ ТОВАРОВ
//-------------------------------------------------------
// const items = [
//    { name: 'lemon', price: 50 },
//    { name: 'orange', price: 60 },
//    { name: 'banana', price: 40 },
//    { name: 'lime', price: 80 },
//    { name: 'avocado', price: 100}
// ];

// const cart = {
//    items: [],
//   getItems() {
//      return this.items
//     },
//   add(product) {
//      this.items.push(product)
//     },
//   remove(productName) {
//     const { items } = this

//     for (let i = 0; i < items.length; i += 1) {
//       console.log(i);
//       const { name } = items[i]
//       console.log(name);
//       if (name === productName) {
//         items.splice(i, 1)
//        }
//     }

//   },
  
//    clear() { },
//    countTotalPrice() { },
//    increaseQuantity(productName) { },
//    decreaseQuantity(productName) { }

// }

// console.log(cart.getItems());


// cart.add({ name: 'lemon', price: 50 })
// cart.add({ name: 'orange', price: 60 })
// cart.add({ name: 'banana', price: 40 })
// cart.add({ name: 'lime', price: 80 })
// cart.add({ name: 'avocado', price: 100 })
// cart.add({ name: 'pineapple', price: 120 })

// console.log(cart.remove());

//-------------------------------------------------------
//SPREAD
//-------------------------------------------------------
// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// const arr1 = [10, 11, 12]
// const arr2 = [13, 14, 15]
// const arr3 = [16, 17, 18]
// const newArr = [...arr1, ...arr2]
// const maxNum = Math.max(...newArr)
// console.log(newArr);
// console.log(maxNum);


// const coctails = {
//    strong: "negroni",
//    sour: "Whisky-sour",
//    long: "Long Island",
// }

// function countProps(object) {
//   let propCount = 0;
//    for (const key in object) {
//       if (object.hasOwnProperty(key)) {
//          propCount ++
//       }
//    }
   
//    return propCount; 
// }



// console.log(countProps(coctails));



// const products = [
//   { name: 'Radar', price: 1300, quantity: 4 },
//   { name: 'Scanner', price: 2700, quantity: 3 },
//   { name: 'Droid', price: 400, quantity: 7 },
//   { name: 'Grip', price: 1200, quantity: 9 },
// ];

// function getProductPrice(productName) {
//    for (const product of products) {
//       if (product.name === productName) {
//          return product.price
//        }
//    }
//    return null
// }
// console.log(getProductPrice(''));

//-----------------------------------------------------
//ПОИСК ВСЕХ ЗНАЧЕНИЙ СВОЙСТВА С ОДИНАКОВЫМ ИМЕНЕМ В
//КАЖДОМ ОБЪЕКТЕ ИЗ МАССИВА
//-----------------------------------------------------

// const products = [
//   { name: 'Radar', price: 1300, quantity: 4 },
//   { name: 'Scanner', price: 2700, quantity: 3 },
//   { name: 'Droid', price: 400, quantity: 7 },
//   { name: 'Grip', price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
//    const propArr = [];
   
//    for (const item of products) {
//       const obj = Object.keys(item)
//       for (const key of obj) {
//          if (key === propName) {
//             propArr.push(item[key])
//          }
//       }
//    }
   
//    return propArr
// }
// console.log(getAllPropValues('name'));

//-----------------------------------------------------
//Функция должна вернуть общую стоимость(цена * количество) 
//товара с таким именем из массива products.
//-----------------------------------------------------

// const products = [
//   { name: 'Radar', price: 1300, quantity: 4 },
//   { name: 'Scanner', price: 2700, quantity: 3 },
//   { name: 'Droid', price: 400, quantity: 7 },
//   { name: 'Grip', price: 1200, quantity: 9 },
// ];

// const calculateTotalPrice = function (productName) {
//    for (const obj  of products) {
//       if (obj.name === productName) {
//          return obj.price * obj.quantity
//       }
//    }

//    return 0
// }
// console.log(calculateTotalPrice('Grip'));

// const book = {
//   title: "Последнее королевство",
//   author: "Бернард Корнуэлл",
//   genres: ["историческая проза", "приключения"],
//   public: true,
//   rating: 8.38,
// };


// const { title, author, genres } = book;
// console.log(title, author, genres);

//-----------------------------------------------------
//Функция addOverNum() считает сумму всех аргументов.
//Измени параметры и тело функции addOverNum() так, чтобы она 
//считала сумму только тех аргументов, которые больше чем заданное число.
// Это число должно быть первым параметры функции.
// -----------------------------------------------------

// function addOverNum(firstNumber,...args) {
//   let total = 0;

//   for (const arg of args) {
//     if (arg > firstNumber) {
//       total += arg;
//     }
//   }

//   return total;
// }
// console.log(addOverNum(20, 21, 40, 10, 5, 29));

//-----------------------------------------------------
//МАССИВ СОВПАДЕНИЯ ЧИСЕЛ
//-----------------------------------------------------

// function findMatches(array1, ...array) {
//   const matches = [];
//   for (const num of array) {
//     if (array1.includes(num)) {
//       matches.push(num)
//      }
    
//   }
//   return matches;
// }
// console.log(findMatches([4, 89, 17, 36, 2], 8, 17, 89, 27, 2));

//-----------------------------------------------------
//ДЕСТРУКТУРИЗАЦИЯ
//-----------------------------------------------------

// const profile = {
//   name: 'Roman',
//   tag: 'Lemon',
//   location: "Kyiv, Ukraine",
//   avatar: "sdfsdf",
//   stats: {
//     followers: 10000,
//     views: 100000,
//     likes: 150150
//   }
// }

// const {
//   name,
//   tag,
//   location,
//   avatar,
//   stats: { followers, views, likes } } = profile;
// console.log(name, tag, location, avatar, followers, views, likes);

//--------------------------------------------------------------------

// const drinks = {
//   negroni: 2,
//   longIsland: 1,
//   oldFashion: 5,
//   sour: 6
// }

// const entries = Object.entries(drinks)

// for (const [coctails, matches] of entries) {
//   console.log(coctails, matches);
// }

// const guests = {
//   man: 15,
//   woman: 15,
//   dogs: 8,
//   cats: 3,
//   kids: 5
// }

// const whoAre = Object.entries(guests)

// for (const [who, howMany] of whoAre) {
//   console.log(who, howMany);
// }

//--------------------------------------------------------------------

// const flat = {
//    name: 'Roman',
//    woman: 'Lera',
//    dog: 'Koko',
//    tech: ['PC', 'telephone', 'TV', 'washingmachine'],
//    techCount: 4,
//    changeName(newName) {
//       this.name = newName;
//    },
//    techAdd(newItem1, newItem2 ) {
//       this.tech.push(newItem1, newItem2)
//    },
//    changeWoman(newName) {
//       this.woman = newName;
//    },
//    getTrack() {
//       return this.techCount
//     }
// }
// const keys = Object.keys(flat)
// for (const key of keys) {
//    console.log(flat[key]);
// }
// console.log(keys);
// const values = Object.values(flat)
// console.log(values);
// flat.changeWoman('Marina')
// flat.techAdd('grill', 'coffemachine')
// flat.techAdd('boiler', 'freezer')
// flat.changeName('Roma');
// flat.size = 3;
// console.log(flat);

//--------------------------------------------------------------------

// const bookShelf = {
//   books: ['The last kingdom', 'Haze', 'The guardian of dreams'],
//   updateBook(oldName, newName) {
//   const bookIndex = this.books.indexOf(oldName)
//   this.books.splice(bookIndex ,1, newName)
//   },

// };
// console.log(bookShelf.updateBook('Haze', 'Hazzze'));

//--------------------------------------------------------------------
//РАБОТА С МАССИВОМ ОБЪЕКТОВ
//--------------------------------------------------------------------

// const atTheOldToad = {
//    potions: [
//     { name: 'Speed potion', price: 460 },
//     { name: 'Dragon breath', price: 780 },
//     { name: 'Stone skin', price: 520 },
//   ],
//   getPotions() {
//     return this.potions;
//   },
//   addPotion(potionName) {
//     if (this.potions.includes(potionName)) {
//       return `Potion ${potionName} is already equipped!`;
//     }

//     this.potions.push(potionName);
//   },
//   removePotion(potionName) {
//     const { potions } = this
//     for (let i = 0; i < potions.length; i += 1) {
//       const itemName = potions[i]
//       if (potionName === itemName.name) {
//         const potionIndex = i;
//         potions.splice(potionIndex, 1)
//         if (potionIndex === -1) {
//           return `Potion ${potionName} is not in inventory!`;
//         }
//       }
//     }
    
//     return potions
//   },
//   updatePotionName(oldName, newName) {
//     const { potions } = this
//     for (const potion of potions) {
//       if (potion.name === oldName) {
//         return potion.name = newName
//        }
//     }
//     return `Potion ${oldName} is not in inventory!`;
//   },
// };
// console.log(atTheOldToad.removePotion("Dragon breath"));
// console.log(atTheOldToad.updatePotionName("Stone skin", "Invulnerability potion"));

// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const keys = [];
// const values = [];
// // Change code below this line
// for (const key in apartment) {
// keys.push(key)
// }
// for (const value in apartment) {
// values.push(apartment[value])
// }
// console.log(keys);
// console.log(values);

// function countProps(object) {
//   let propCount = 0;
//   for (let num in object) {
//     if (object.hasOwnProperty(num))
//     propCount ++
//   } 
//     return propCount;
// }

// console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }));


// function countTotalSalary(salaries) {
//   let totalSalary = 0;
//   const sal = Object.values(salaries)
//   for (const item of sal) {
//     console.log(item);
//     totalSalary += item
//   }
  
//   return totalSalary;
// }
// console.log(countTotalSalary({ kiwi: 200, poly: 50, ajax: 150 }));
// const products = [
//   { name: 'Radar', price: 1300, quantity: 4 },
//   { name: 'Scanner', price: 2700, quantity: 3 },
//   { name: 'Droid', price: 400, quantity: 7 },
//   { name: 'Grip', price: 1200, quantity: 9 },
// ];

// function getValue(objName) {
//   let newArr = []
//   for (const item of products) {
//     // console.log(item);
//     const key = Object.keys(item)
//     // console.log(key);
//     for (const value of key) {
//       // console.log(value);
//       if (value === objName) {
//         console.log(item[value]);
//         newArr.push(item[value])
//        }
      
//     }
//   }
//   return newArr
// }
// console.log(getValue('name'));

// const products = [
//   { name: 'Radar', price: 1300, quantity: 4 },
//   { name: 'Scanner', price: 2700, quantity: 3 },
//   { name: 'Droid', price: 400, quantity: 7 },
//   { name: 'Grip', price: 1200, quantity: 9 },
// ];

// function calculateTotalPrice(productName) {
//   let total = 0;
//   for (const product of products) {
//     if (product.name === productName) {
//       total = product.price * product.quantity

//     }
    
//   }
//   return total
// }
// console.log(calculateTotalPrice('Grip'));

// function addOverNum(firstNum, ...args) {
//   let total = 0
//   for (const arg of args) {

//     if (arg > firstNum) {
//       total += arg
//      }
//    }
//    return total
// }
// console.log(addOverNum(20, 74, 11, 62, 46, 12, 36));

