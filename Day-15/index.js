/**
 * 
 * Promises:-
 * 
 */
// let promise=new Promise((resolve,reject)=>{

//    resolve("success");


// })
// console.log(promise)
// promise.then(res=>console.log(res)).catch(data=>console.log(data))

// console.log(Promise.resolve("hello there").then(res=>console.log(res)))



// function sum(val) {
//    return Promise.resolve(val+10)
// }
// sum(10).then(res=>console.log(res))

// let promise1=new Promise((res,rej)=>{
//     res(10)
// })

// function sum(val){
//     return promise1
// }
// sum().then(res=>console.log(res))

// function sum(val, callback) {
//     callback(val + 10)
// }
// function sub(val, callback) {
//     callback(val - 5)
// }
// function mul(val, callback) {
//     callback(val * 2)
// }
// function div(val, callback) {
//     callback(val / 2)
// }
// sum(10, (sumres) => {

//     sub(sumres, (subres) =>

//         mul(subres, (mulres) => {
//             div(mulres, (divres) => {
//                 console.log(divres)
//             })
//         })
//     )
// })

function sum(val) {
    return new Promise((resolve, reject) => {
        resolve(val + 10)
    })
}

function sub(val) {
    return new Promise((resolve, reject) => {
        resolve(val - 5)
    })
}

function mul(val) {
    return new Promise((resolve, reject) => {
        resolve(val * 2)
    })
}
// mul(15).then(res=>console.log(res))

function div(val) {
    return new Promise((resolve, reject) => {
        resolve(val / 2)
    })
}
// div(30).then(res=>console.log(res))

// sum(10).then(sumres => sub(sumres)
//     .then(subres => mul(subres)
//         .then(mulres => div(mulres)
//             .then(divres =>console.log(divres))
//         )
//     )
// )

function order() {
    return new Promise(resolve => {
        resolve("order Placed")
    })
}

function dispatch() {
    return new Promise(resolve =>
        resolve("dispatch success")
    )
}
function shipping() {
    return new Promise(resolve => {
        resolve("shipping success")
    })
}
function deliver() {
    return new Promise(resolve =>
        resolve("deliver success")
    )
}
// order().then(res=>console.log(res))
// dispatch().then(res=>console.log(res))
// shipping().then(res=>console.log(res))
// deliver().then(res=>console.log(res))

// order().then(message => {console.log(message)
//     dispatch().then(mes => {console.log(mes)
//         shipping().then(mes => { console.log(mes)
//             deliver().then(mes => { console.log(mes)
//             })
//         })
//     })
// }


// )
async function x() {
  let res=  await order()
    
    console.log(res)
    
   

    
}
x()