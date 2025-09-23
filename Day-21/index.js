/**
 * 
 * Async and Await in javascript
 * async Promise object
 * es-8 update
 * 
  */
// function x() {
//     return Promise.resolve("Hello There")
// }
// console.log(x());

// x().then(res => console.log(res))







// console.log(Promise.resolve("Hello There").then(data=>console.log(data)));


// let promise1=new Promise((resolve,reject)=>{
//     resolve("hello there")
// })
//  async function getdata(){
//  let res=await promise1
//  console.log(res);

// }
// getdata()


// fetch("http://localhost:3000/data",{"method":"GET"})
// .then(res=>res.json())
// .then(data=>console.log(data))
// async function getdata() {
//     let res=await fetch("http://localhost:3000/data")
//     let data=await res.json()
//     showData(data)  
// }
// function showData(data){
//     data.forEach(obj => {
//         console.log(obj)
//     });
// }
// getdata()

// let promise1 = new Promise(resolve => {
//     setTimeout(() => {
//         resolve("hello there")
//     }, 3000)
// })

// async function x() {
//     let res = promise1
//     console.log(res);
//     console.log("Hello World");


// }
// x()
// promise1.then(res=>console.log(res))
// console.log("hello World");
async function x() {
  return "Hello There"
}

x()





