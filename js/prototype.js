// const Game = function ({ name, price, rating, genre } = {}) {
//     this.name = name,
//     this.price = price,
//     this.rating = rating
//     this.genre = genre
// }

    
// const pcGame = new Game({
//     name: 'FarCry',
//     price: 2000,
//     rating: 9.5
// });
// console.log(pcGame);

// const wiuGame = new Game({
//     name: 'ZELDA. Breath of the Wild',
//     price: 12500,
//     rating: 10
// });
// console.log(wiuGame);

// const psGame = new Game({
//     name: 'Borderlands 3',
//     price: 1900,
//     rating: 9.8
// });
// console.log(psGame);

// console.log(Game.prototype);
// Game.prototype.changePrice = function (newPrice) {
//     this.price = newPrice
// }
// psGame.changePrice(4500)

// Game.prototype.addGenre = function (newGenre) {
//     this.genre = newGenre
// }
// wiuGame.addGenre('RPG')





// class Storage {
// 	#items;

//   constructor(item) {
//     this.#item = item
// }
  
//   	getItems() {
//     	return this.#items
//     }
  
//   	addItem(newItem) {
//     	this.#items.push(newItem);
//     }
  
//   	removeItem(item) {
//     	const itemIndex = this.#items.indexOf(item);
//   		this.#items.splice(itemIndex, 1);
//     }
// }

// const storage = new Storage(["Нанитоиды", "Пролонгер", "Антигравитатор"]);
// console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор"]
// storage.addItem("Дроид");
// console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор", "Дроид"]
// storage.removeItem("Пролонгер");
// console.log(storage.getItems()); // ["Нанитоиды", "Антигравитатор", "Дроид"]

//---------------------------------------------------------------
//---------------------------------------------------------------

// class StringBuilder  {
//     #value;

//     constructor(value) {
//         this.#value = value
//     }
    
//     getValue() {
//         return this.#value
//     }

//     padEnd(str) {
//         this.#value += str
//     }
    
//     padStart(str) {
//         this.#value = str + this.#value;    
//     }
    
//     padBoth(str) {
//         this.padStart(str);
//         this.padEnd(str);
//     }
// }

// const builder = new StringBuilder('.');
// console.log(builder.getValue()); // '.'
// builder.padStart('^');
// console.log(builder.getValue()); // '^.'
// builder.padEnd('^');
// console.log(builder.getValue()); // '^.^'
// builder.padBoth('=');
// console.log(builder.getValue()); // '=^.^='


//---------------------------------------------------------------
//---------------------------------------------------------------

// class Car {
//   static #MAX_PRICE = 50000;
//   // Пиши код ниже этой строки
//   static checkPrice(price) {
//   if ( price > Car.#MAX_PRICE ) {
//    return 'Внимание! Цена превышает допустимую.'
//   }
    
//     return 'Всё хорошо, цена в порядке.'
//   }

//   // Пиши код выше этой строки
//   constructor({ price }) {
//     this.price = price;
//   }
// }

// const audi = new Car({ price: 36000 });
// const bmw = new Car({ price: 64000 });

// console.log(Car.checkPrice(audi.price)); // Всё хорошо, цена в порядке.
// console.log(Car.checkPrice(bmw.price)); // Внимание! Цена превышает допустимую.

// class User {
//   email;

//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }
// class Admin extends User {
//   blacklistedEmails = []
	
//   static AccessLevel = {
//     BASIC: 'basic',
//     SUPERUSER: 'superuser'
//   };

//   accessLevel;

//   constructor({ email, accessLevel }) {
//     super(email);
//     this.accessLevel = accessLevel;
//   }
	
//   blacklist(email) {
//       this.blacklistedEmails.push(email)
//       return this.blacklistedEmails
//   }
 
    
// }

// const mango = new Admin({
//   email: 'mango@mail.com',
//   accessLevel: Admin.AccessLevel.SUPERUSER
// });

// // console.log(mango.email); // mango@mail.com
// // console.log(mango.accessLevel); // superuser
// // mango.blacklist('poly@mail.com');
// // console.log(mango.blacklistedEmails); // 'poly@mail.com'
// console.log(mango.isBlacklisted('mango@mail.com')); //  false
// console.log(mango.isBlacklisted('poly@mail.com')); // true 