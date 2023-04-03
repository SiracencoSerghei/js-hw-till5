// const myPromise = new Promise((resolve, reject) => {
    
// });

// myPromise
//     .then(value => {
    
//     })
//     .catch(error => {

//     })

    // fetch('https://jsonplaceholder.typicode.com/todos')

// fetch("https://jsonplaceholder.typicode.com/todos/1")
//     .then(response => {
//         console.log(response);
//         return response.json();
//     })
//     .then(json => console.log(json))
//     .catch(error => console.error(error.message))

// ----------------------------------------

// const getData = (url) => 
//     new Promise((resolve, reject) =>
//         fetch(url)
//             .then(response => response.json())
//             .then(json => resolve(json))
//         .catch(error => reject(error))
//     )

// getData("https://jsonplaceholder.typicode.com/todos")
//     .then(data => console.log(data))
//     .catch(error => console.log(error.message))

// --------------------------------------


// async function asyncFn {
//     return 'Success'
// }

// const asyncFn = async () => {
//     return 'success'
// }

// console.log(asyncFn()
//     .then(value => console.log(value))
//     .catch(error => console.log(error)));

// --------------------------------------

// const timerPromise = () => 
//     new Promise((resolve, reject) =>
//     setTimeout(() => resolve(console.log('fn')), 2000))



// const asyncFn = async () => {
//     console.log('timer start')
//     const startTime = performance.now()
//      console.log(startTime);
//     await timerPromise()
//     const endTime = performance.now()
//     console.log(endTime)
//     console.log('timer ended', endTime - startTime)
// }
// asyncFn()

// ===================================

// const getData = async (url) => {
//     const res = await fetch(url)
//     const json = await res.json()
//     return json
// } 

// const url = "https://jsonplaceholder.typicode.com/todos";

// try {
//     const data = await getData(url)
// console.log(data)
// } catch (error) {
//     console.log(error.message)
// }