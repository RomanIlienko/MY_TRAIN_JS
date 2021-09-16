// // const promise = new Promise((resolve, reject) => {
// //     const check = Math.random() > 0.5;

// //     setTimeout(() => {
// //         if (check) {
// //         resolve('Иди нахуй')
// //     }
    
// //     reject('Еще раз иди нахуй')
// //     }, 1500)
// // })

// // promise.then(
// //     result => {
// //     console.log(result);
// //     }).catch(
// //     error => {
// //     console.log(error);
// // }
// // ).finally(() => {
// //     console.log('буква ю');
// // })

// // ------------------------------------------------------------------------------


// // const randomIntegerFromInterval = (min, max) => {
// //   return Math.floor(Math.random() * (max - min + 1) + min);
// // };

// // const makeTransaction = transaction => {

// //   const delay = randomIntegerFromInterval(200, 500);
    
// //   return new Promise((resolve, reject) => {
       
// //     setTimeout(() => {
// //     const canProcess = Math.random() > 0.3;

// //     if (canProcess) {
// //         resolve([transaction.id, delay]);
// //     } else {
// //         reject(transaction.id);
// //     }
// //     }, delay);
// //   })
// // };

// // const logSuccess = ([id, time]) => {
// //   console.log(`Transaction ${id} processed in ${time} ms`);
// // };

// // const logError = id => {
// //   console.warn(`Error processing transaction ${id}. Please try again later.`);
// // };


// // makeTransaction({ id: 70, amount: 150 })
// //   .then(logSuccess)
// //   .catch(logError);

// // makeTransaction({ id: 71, amount: 230 })
// //   .then(logSuccess)
// //   .catch(logError);

// // makeTransaction({ id: 72, amount: 75 })
// //   .then(logSuccess)
// //   .catch(logError);

// // makeTransaction({ id: 73, amount: 100 })
// //   .then(logSuccess)
// //     .catch(logError);
  

// // --------------------------------------------------------------------------------------

// // const delay = ms => {
// //     return new Promise((resolve) => {
// //         setTimeout(() => {
// //             resolve(ms)
// //         }, ms)
// //     })
// // };

// // const logger = time => console.log(`Resolved after ${time}ms`);

// // // Вызовы функции для проверки
// // delay(2000).then(logger); // Resolved after 2000ms
// // delay(1000).then(logger); // Resolved after 1000ms
// // delay(1500).then(logger); // Resolved after 1500ms


// // --------------------------------------------------------------------------------------
// // Перепиши функцию `toggleUserState()` так, чтобы она не использовала
// // callback-функцию `callback`, а принимала всего два параметра `allUsers` и
// // `userName` и возвращала промис.


// // const users = [
// //   { name: 'Mango', active: true },
// //   { name: 'Poly', active: false },
// //   { name: 'Ajax', active: true },
// //   { name: 'Lux', active: false },
// // ];

// // const toggleUserState = (allUsers, userName) => {
// //     return new Promise((resolve) => {
// //         const updatedUsers = allUsers.map(user =>
// //             user.name === userName ? { ...user, active: !user.active } : user);

// //         resolve(updatedUsers);
// //      })
// // };

// // const logger = updatedUsers => console.table(updatedUsers);


// // toggleUserState(users, 'Mango').then(logger);
// // toggleUserState(users, 'Lux').then(logger);

// // -------------------------------------------------------------------------------------- 

// // const fetchPokemonById = id => {
// //     return fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
// //     .then(result => result.json())
// // }

// // fetchPokemonById(25).then(onSuccess).catch(onError)
// // fetchPokemonById(3).then(onSuccess).catch(onError)
// // fetchPokemonById(17).then(onSuccess).catch(onError)
// // fetchPokemonById(251).then(onSuccess).catch(onError)
// // fetchPokemonById(29).then(onSuccess).catch(onError)

// // function onSuccess(pokemon) {
// //     console.log(pokemon);
// // }

// // function onError(error) {
// //     console.log(error);
// //  }

// // -------------------------------------------------------------------------------------- 
// const refs = {
//     button: document.querySelector('.button'),
//     win: document.querySelector('.win'),
//     progress: document.querySelector('.progress'),
//     table: document.querySelector('.table'),
// }

// let raceCounter = 0

// refs.button.addEventListener('click', onStart)

// function onStart() {
//     raceCounter += 1
//     const promisesHorses = horses.map(horsesRun)

//     refs.win.textContent = ''
//     refs.progress.textContent = 'Заезд начался, ставки не принимаются!'

//     //--cамая быстрая лошадь
//     Promise.race(promisesHorses).then(({ horse, time }) => {
//         refs.win.textContent = `${horse} is WIIIIN for ${time} secs. Congratulations)`
//         updateTable({ horse, time, raceCounter })
//     })

    
//     //--все лошади по очереди
//     Promise.all(promisesHorses).then(horses => {
//         console.log(horses);
//         refs.progress.textContent = 'Заезд окончен, ставки принимаются!' 
//     })
// }
    


// function updateTable({ horse, time, raceCounter }) {
//     const tr = `<tr><td>${raceCounter}</td><td>${horse}</td><td>${time}</td></tr>`
//     refs.table.insertAdjacentHTML('beforeend', tr)
// }


// const horses = [
//     'Flashlight',
//     'Thunder',
//     'Kemix',
//     'Beauty',
//     'Fly',
//     'Lovely'
// ]

// function horsesRun(horse) {
//     return new Promise((resolve) => {
//         const time = calculateTime(1000, 3000)
        
//         setTimeout(() => {
//             resolve({ horse, time })
//         }, time)
//     })
// }


// function calculateTime(min, max) {
//     return Math.floor(Math.random() * (max - min + 1) + min);
// }



