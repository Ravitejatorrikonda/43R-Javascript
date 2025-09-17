/**
 * 
 * 
 */
// let data = [{
//     "id": 1,
//     "todo": "Do something nice for someone you care about",
//     "completed": false,
//     "userId": 152
// },
// {
//     "id": 2,
//     "todo": "Memorize a poem",
//     "completed": true,
//     "userId": 13
// },
// {
//     "id": 3,
//     "todo": "Watch a classic movie",
//     "completed": true,
//     "userId": 68
// },
// {
//     "id": 4,
//     "todo": "Watch a documentary",
//     "completed": false,
//     "userId": 84
// },
// {
//     "id": 5,
//     "todo": "Invest in cryptocurrency",
//     "completed": false,
//     "userId": 163
// }
// ]
// let options={
//     "method":"POST",
//     "header":{
//         "Content-type":"application/json"
//     }

// }
// for(let i=0;i<data.length;i++){
//     let obj=data[i]
//     options.body=JSON.stringify(obj)
//     fetch("http://localhost:3000/products",options)
//     .then(res=>{
//         if(res.ok){
//             console.log(res.status + res.statusText)
//         }
//     })
// }
/**
 * 
 * array methods:-
 * 
 * index()
 * shift
 * unshift
 * push
 * pop
 * concat
 * length
 * flat
 * at()
 * reverse
 * sort()
 * includes
 * 
 * 
 */
let arr=[1,2,3,4,5]
let arr1=arr.splice("hello")
console.log(arr1)

