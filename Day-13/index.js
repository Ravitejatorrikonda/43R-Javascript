/**
 * 
 * 
 * 
 */

// console.log("start")
// setTimeout(()=>{
// console.log("first function")
// },3000)
// for(i=0;i<=50000;i++){
//     console.log("i")
// }
// setTimeout(()=>{
//     console.log("second function")
// },1000)

// function sum(val, callback) {
//     callback(val+10)
// }
// function sub(val, callback) {
//     if(false){
//         callback(val-5)
//     }else{
//         console.log("not valid")
//     }
// }
// function mul(val, callback) {
//     callback(val * 2)
// }
// function div(val, callback) {
//     callback(val / 2)
// }




// sum(10,(sumres)=>{
//     console.log(sumres)
// })
// sub(10,(subres)=>{
//     console.log(subres)
// })
// mul(5,(mulres)=>{
//     console.log(mulres)
// })
// div(10,(divres)=>{
//     console.log(divres)
// })

// sum(10, (sumres) => {
//     console.log(sumres)
//     sub(sumres, (subres) => {
//         // console.log(subres)
//         mul(subres,(mulres)=>{
//             //  console.log(mulres)
//             div(mulres,(divres)=>{
//                 console.log(divres)
//             })
//         })
//     })
// })

function orderplaced(callback) {
    console.log("order placed")
    callback("dispatch success")
}
function shipping(callback) {
    console.log("shipping success")
    callback("delivered success")
}



orderplaced((message1) => {
    console.log(message1)
    if (0) {
        shipping((message2) => {
            console.log(message2)
        })
    } else {
        console.log("something error")
    }
})
// shipping((message2)=>{
//     console.log(message2)
// })