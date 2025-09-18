/**
 * 
 * array itarative methods
 * 
 * forEach
 * map
 * filter
 * reduce
 * reduceright
 * every
 * some 
 * find
 * 
 */


// let arr = [1, 2, 3, 4, 5,]
// //[1,4,9,16,25]

// let refArr = []
// for (let i = 0; i < arr.length; i++) {
//     refArr.push(arr[i] * arr[i])
// }
// console.log(refArr);


// arr.forEach(ele=>refArr.push(ele**2))
// console.log(refArr);
// let arr=["html","css","javascript","java"]
// let refarr=[]
// // for(let i=0;i<arr.length;i++){
// //     refarr.push(arr[i].toUpperCase())
// // }
// // console.log(refarr);
// arr.forEach(ele=>refarr.push(ele.toUpperCase()))
// console.log(refarr)

// //[odd,even,odd,even,odd]

// //[1,4,9,16,25]

// let refarr=arr.map(ele=>ele**2)
// console.log(refarr)

let arr=[1,2,3,4,5]

// filter
//[2,4]
// let refarr=arr.filter(ele=>ele%2==0)
// console.log(refarr)

fetch("http://localhost:3000/data",{"method":"GET"})
.then(res=>res.json())
.then(data=>{
    data.forEach(ele => {
        console.log(ele.name)
    });
})







