// // Імперативний підхід
// const numbers = [1, 2, 3, 4, 5];
// const filteredNumbers = [];

// for (let i = 0; i < numbers.length; i += 1) {
//   if (numbers[i] > 3) {
//     filteredNumbers.push(numbers[i]);
//   }
// }

// console.log(filteredNumbers); // [4, 5]



// // Декларативний підхід
// const numbers = [1, 2, 3, 4, 5];
// const filteredNumbers = numbers.filter(value => {
//   return value > 3;
// });

// console.log(filteredNumbers); // [4, 5]

//---------------------------------------------------------------
//FOREACH КАК ЗАМЕНА FOR...FOR OF
//---------------------------------------------------------------

// const products = [
//   { name: 'Radar', price: 1300, quantity: 4 },
//   { name: 'Scanner', price: 2700, quantity: 3 },
//   { name: 'Droid', price: 400, quantity: 7 },
//   { name: 'Grip', price: 1200, quantity: 9 },
// ];

// function find(array) {
//   const newArr = []
//   array.forEach(item => {
//     newArr.push(item)
//     console.log(item);
//   });

//   return newArr
// }
// console.log(find(products));


// //---------------------------------------------------------------
// FOREACH КАК ЗАМЕНА FOR...FOR OF
// //---------------------------------------------------------------


// function calculateTotalPrice(orderedItems) {
//   let totalPrice = 0;
//   orderedItems.forEach(item => {
//     totalPrice += item
//   });

//   return totalPrice;
// }
// console.log(calculateTotalPrice([12, 85, 37, 4]));

// //---------------------------------------------------------------
// FOREACH КАК ЗАМЕНА FOR...FOR OF
// //---------------------------------------------------------------

// const changeEven = (numbers, value) => {
//     let newArr = []
//     numbers.forEach(num => {
//         if (num % 2 === 0) {
//         newArr.push(num + value)
//         } else (
//             newArr.push(num)
//       )
//     });
      
//     return newArr

//   }
// console.log(changeEven([17, 24, 68, 31, 42], 100));

// const planets = ['Земля', 'Марс', 'Венера', 'Юпитер'];
// // Пиши код ниже этой строки
// const planetsLengths = planets.map(planet => planet.length );
// console.log(planetsLengths);

// const users = [
//   {
//     name: 'Moore Hensley',
//     email: 'moorehensley@indexia.com',
//     eyeColor: 'blue',
//     friends: ['Sharron Pace'],
//     isActive: false,
//     balance: 2811,
//     skills: ['ipsum', 'lorem'],
//     gender: 'male',
//     age: 37,
//   },
//   {
//     name: 'Sharlene Bush',
//     email: 'sharlenebush@tubesys.com',
//     eyeColor: 'blue',
//     friends: ['Briana Decker', 'Sharron Pace'],
//     isActive: true,
//     balance: 3821,
//     skills: ['tempor', 'mollit', 'commodo', 'veniam', 'laborum'],
//     gender: 'female',
//     age: 34,
//   },
//   {
//     name: 'Ross Vazquez',
//     email: 'rossvazquez@xinware.com',
//     eyeColor: 'green',
//     friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
//     isActive: false,
//     balance: 3793,
//     skills: ['nulla', 'anim', 'proident', 'ipsum', 'elit'],
//     gender: 'male',
//     age: 24,
//   },
//   {
//     name: 'Elma Head',
//     email: 'elmahead@omatom.com',
//     eyeColor: 'green',
//     friends: ['Goldie Gentry', 'Aisha Tran'],
//     isActive: true,
//     balance: 2278,
//     skills: ['adipisicing', 'irure', 'velit'],
//     gender: 'female',
//     age: 21,
//   },
//   {
//     name: 'Carey Barr',
//     email: 'careybarr@nurali.com',
//     eyeColor: 'blue',
//     friends: ['Jordan Sampson', 'Eddie Strong'],
//     isActive: true,
//     balance: 3951,
//     skills: ['ex', 'culpa', 'nostrud'],
//     gender: 'male',
//     age: 27,
//   },
//   {
//     name: 'Blackburn Dotson',
//     email: 'blackburndotson@furnigeer.com',
//     eyeColor: 'brown',
//     friends: ['Jacklyn Lucas', 'Linda Chapman'],
//     isActive: false,
//     balance: 1498,
//     skills: ['non', 'amet', 'ipsum'],
//     gender: 'male',
//     age: 38,
//   },
//   {
//     name: 'Sheree Anthony',
//     email: 'shereeanthony@kog.com',
//     eyeColor: 'brown',
//     friends: ['Goldie Gentry', 'Briana Decker'],
//     isActive: true,
//     balance: 2764,
//     skills: ['lorem', 'veniam', 'culpa'],
//     gender: 'female',
//     age: 39,
//   },
// ];

//---------------------------------------------------------------
//flatMap()
//---------------------------------------------------------------

// const getUserFriends = users => {
//     const userFriends = users.flatMap(user => user.friends)
//     return userFriends
//   };
// console.log(getUserFriends(users));

//---------------------------------------------------------------
//map()
//---------------------------------------------------------------

// const getUserNames = users => {
//     const userName = users.map(user => user.name)
//     return userName
//   };
// console.log(getUserNames(users));

//---------------------------------------------------------------
//filter() возвращает новый массив элементов которые TRUE
//---------------------------------------------------------------

// const basket = [
//     {name: 'meat', price: 150, weight: 2, wasLive: true},
//     {name: 'fish', price: 120, weight: 3, wasLive: true},
//     {name: 'potatoes', price: 40, weight: 2, wasLive: false},
//     {name: 'watermelon', price: 55, weight: 5, wasLive: false},
// ]

// const filtered = basket.filter(item => item.wasLive === false)
// console.log(filtered);

// const numbers = [1, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60]

// const filtered = numbers.filter(num => num >= 30)
// console.log(filtered);

//---------------------------------------------------------------
//find() возвращает первое TRUE
//---------------------------------------------------------------

// const filteredOne = numbers.find(num => num === 25)
// console.log(filteredOne);

//---------------------------------------------------------------
//find()
//---------------------------------------------------------------

// const userName = users.find(user => user.name === 'Carey Barr')
// console.log(userName);

// const books = [
//     {
//       title: 'Последнее королевство',
//       author: 'Бернард Корнуэлл',
//       genres: ['приключения', 'историческое']
//     },
//     {
//       title: 'На берегу спокойных вод',
//       author: 'Роберт Шекли',
//       genres: ['фантастика', 'мистика']
//     },
//     {
//       title: 'Красна как кровь',
//       author: 'Ли Танит',
//       genres: ['ужасы', 'мистика', 'приключения']
//     }
//   ];

//   const allGenres = books.flatMap(book => book.genres);
// console.log(allGenres);
  
// const uniqueGenres = allGenres.filter();


// const getFriends = (users) => {
//     const friends = users.flatMap(user => user.friends)
//     console.log(friends);
//     const filtered = friends.filter((friends, index, array) => 
//         array.indexOf(friends) === index

//     )

//     return filtered
// };
// console.log(getFriends(users));

//---------------------------------------------------------------
//every()проверяет проходят ли все элементы массива тест предоставляемый коллбек-функцией.
//Возвращает true или false.
//---------------------------------------------------------------

// const isEveryUserActive = (users) => {
//    return users.every(user => user.isActive === true)
// };
// console.log(isEveryUserActive(users));

//---------------------------------------------------------------
// some()проверяет проходит ли хотя бы один элемент массива тест 
//предоставляемый коллбек - функцией.Возвращает true или false.
//---------------------------------------------------------------

// const isSomeUserActive = (users) => {
//    return users.some(user => user.isActive)
// };
// console.log(isSomeUserActive(users));

//---------------------------------------------------------------
//reduce()
//---------------------------------------------------------------

const users = [
  {
    name: 'Moore Hensley',
    email: 'moorehensley@indexia.com',
    eyeColor: 'blue',
    friends: ['Sharron Pace'],
    isActive: false,
    balance: 2811,
    skills: ['ipsum', 'lorem'],
    gender: 'male',
    age: 37,
  },
  {
    name: 'Sharlene Bush',
    email: 'sharlenebush@tubesys.com',
    eyeColor: 'blue',
    friends: ['Briana Decker', 'Sharron Pace'],
    isActive: true,
    balance: 3821,
    skills: ['tempor', 'mollit', 'commodo', 'veniam', 'laborum'],
    gender: 'female',
    age: 34,
  },
  {
    name: 'Ross Vazquez',
    email: 'rossvazquez@xinware.com',
    eyeColor: 'green',
    friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
    isActive: false,
    balance: 3793,
    skills: ['nulla', 'anim', 'proident', 'ipsum', 'elit'],
    gender: 'male',
    age: 24,
  },
  {
    name: 'Elma Head',
    email: 'elmahead@omatom.com',
    eyeColor: 'green',
    friends: ['Goldie Gentry', 'Aisha Tran'],
    isActive: true,
    balance: 2278,
    skills: ['adipisicing', 'irure', 'velit'],
    gender: 'female',
    age: 21,
  },
  {
    name: 'Carey Barr',
    email: 'careybarr@nurali.com',
    eyeColor: 'blue',
    friends: ['Jordan Sampson', 'Eddie Strong'],
    isActive: true,
    balance: 3951,
    skills: ['ex', 'culpa', 'nostrud'],
    gender: 'male',
    age: 27,
  },
  {
    name: 'Blackburn Dotson',
    email: 'blackburndotson@furnigeer.com',
    eyeColor: 'brown',
    friends: ['Jacklyn Lucas', 'Linda Chapman'],
    isActive: false,
    balance: 1498,
    skills: ['non', 'amet', 'ipsum'],
    gender: 'male',
    age: 38,
  },
  {
    name: 'Sheree Anthony',
    email: 'shereeanthony@kog.com',
    eyeColor: 'brown',
    friends: ['Goldie Gentry', 'Briana Decker'],
    isActive: true,
    balance: 2764,
    skills: ['lorem', 'veniam', 'culpa'],
    gender: 'female',
    age: 39,
  },
];


// const numbers = [1, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60]
// const numbers2 = [10, 20, 50]
// const total = numbers2.reduce((totalNum, value) => {
//     return totalNum + value
//  }, 0)
// console.log(total);
// const fn = ()

// const basket = [
//     {name: 'meat', price: 150, weight: 2},
//     {name: 'fish', price: 120, weight: 3},
//     {name: 'potatoes', price: 40, weight: 2},
//     {name: 'watermelon', price: 55, weight: 5},
// ]

// const totalPrice = basket.reduce((total, value) => {
//     return total + value.price

// }, 0);
// console.log(totalPrice);

// const totalWeight = basket.reduce((total, item) => {
//     return total + item.weight

// },0)
// console.log(totalWeight);

// const myBag = basket.map(oneSal => oneSal.name)
// console.log(myBag);

//---------------------------------------------------------------

// const players = [
//   { name: 'Манго', playtime: 1270, gamesPlayed: 4 },
//   { name: 'Поли', playtime: 469, gamesPlayed: 2 },
//   { name: 'Аякс', playtime: 690, gamesPlayed: 3 },
//   { name: 'Киви', playtime: 241, gamesPlayed: 1 },
// ];

// const totalAveragePlaytimePerGame = players.reduce((total, player) => {
// return total + player.playtime / player.gamesPlayed
// }, 0);
// console.log(totalAveragePlaytimePerGame);

//---------------------------------------------------------------

// const calculateTotalBalance = users.reduce((total, user) => {
//     return total + user.balance

// }, 0)
// console.log(calculateTotalBalance);

//---------------------------------------------------------------

// const calculateTotalBalance = users => {
//    return users.reduce((total, user) => 
//    total + user.balance
   
//    ,0)
// };
// console.log(calculateTotalBalance(users))

//---------------------------------------------------------------

// const getTotalFriendCount = users => {
//   return users.reduce((total, user) => 
//   total + user.friends.length
//   , 0) 
// };
// console.log(getTotalFriendCount(users));

//---------------------------------------------------------------

// const tweets = [
//     { id: '000', likes: 250, tags: ['JS', 'React'] },
//     { id: '001', likes: 100, tags: ['Node', 'Python'] },
//     { id: '002', likes: 143, tags: ['CSS', 'HTML'] },
//     { id: '003', likes: 210, tags: ['C++', 'C#'] },
//     { id: '004', likes: 190, tags: ['Java', 'JS'] },
//     { id: '005', likes: 228, tags: ['C++', 'React'] },
//     { id: '006', likes: 167, tags: ['JS', 'Node'] }
// ];

// const allTags = tweets.flatMap(user => user.tags)
// // console.log(allTags);

// const totalTagsByUser = allTags.reduce((acc, tag) => {
//     if (acc[tag]) {
//         acc[tag] += 1
//         return acc
//     }
//     acc[tag] = 1
//     return acc
// }, {})
// console.log(totalTagsByUser);
// const findTotalLike = tweets.reduce((total, user) => {

//     return total + user.likes
// }, 0)
// console.log(findTotalLike);

//---------------------------------------------------------------
//reduce() и push() в пустой массив

// const total = tweets.reduce((totalArr, tweet) => {
//     totalArr.push(tweet.likes)

//     return totalArr
// }, [])
// console.log(total);

//---------------------------------------------------------------
// const allTags = tweets.flatMap(user => user.tags)
// console.log(allTags);
//---------------------------------------------------------------
// const allLikes = tweets.map(user => user.likes)
// console.log(allLikes);
//---------------------------------------------------------------
// const everyLike = tweets.every(user => user.likes > 250)
// console.log(everyLike);
//---------------------------------------------------------------
// const someLike = tweets.some(user => user.likes > 249)
// console.log(someLike);
//---------------------------------------------------------------


//---------------------------------------------------------------
//sort()МУТИРУЕТ ИСХОДНЫЙ МАССИВ
//...array делаем распрыление перед сортом
//---------------------------------------------------------------
// ПО НАРАСТАНИЮ
// const numbers = [9, 2, 7, 4, 5, 8, 1, 3]
// const sorted = [...numbers].sort()
// console.log(sorted);
// //---------------------------------------------------------------
// //ПО УБЫВАНИЮ
// const newSorted = [...numbers].sort((curEl, nextEl) => {
//     return nextEl - curEl
// })
// console.log(newSorted);
//---------------------------------------------------------------

//---------------------------------------------------------------
//CHAINING. Цепочки методов
//---------------------------------------------------------------

// const books = [
//   { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
//   { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
//   { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
//   { title: 'Красна как кровь', author: 'Ли Танит', rating: 8.14 },
//   { title: 'Сны В Ведьмином Доме', author: 'Говард Лавкрафт', rating: 8.67 }
// ];
// const MIN_BOOK_RATING = 8;

// const names = [...books]
// .filter(book => book.rating > MIN_BOOK_RATING)
// .map(book => book.author)
// .sort((a,b) => a.localeCompare(b) );
// console.log(names);

//---------------------------------------------------------------
//Сорттровка по возрастанию количества их друзей в массиве объектов users

// const getNamesSortedByFriendCount = users => {
//  return [...users]
//    .sort((a, b) => a.friends.length - b.friends.length )
//   .map((user) => user.name )
// };
// console.log(getNamesSortedByFriendCount(users));

//---------------------------------------------------------------
//возвращзает массив уникальных имён друзей (свойство friends) отсортированный по алфавиту .

// const getSortedFriends = users => {
//   return [...users]
//     .flatMap(user => user.friends)
//     .filter((user, index, array) =>  array.indexOf(user) === index )
//   .sort()
// };
// console.log(getSortedFriends(users));


//---------------------------------------------------------------
// массив имён пользователей отсортированный по возрастанию количества их друзей

// const getNamesSortedByFriendCount = users => {
//   return [...users]
//     .sort((a, b) => a.friends.length - b.friends.length)
//     .map(user => user.name )
// };
// console.log(getNamesSortedByFriendCount(users));

//---------------------------------------------------------------
// ФУНКЦИЯ возвращает массив уникальных имён друзей (свойство friends)
// отсортированный по алфавиту.

// const getSortedFriends = users => {
//   return [...users]
//     .flatMap(user => user.friends)
//     .filter((user, index, array) => array.indexOf(user) === index)
//     .sort()
// };
// console.log(getSortedFriends(users));

//---------------------------------------------------------------
//ФУНКЦИЯ возвращает общий баланс пользователей (свойство balance),
//пол которых(свойство gender) совпадает со значением параметра gender
// const getTotalBalanceByGender = (users, gender) => {
//   return users
//     .filter(user => user.gender === gender)
//     .reduce((acc, user) => acc + user.balance
//       , 0)
// };
// console.log(getTotalBalanceByGender(users, 'male'));