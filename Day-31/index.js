/**
 * 
 * BOM:-(Browser object model)
 * 
 * ES6:-
 */
// let resultWindow;
// function openWindow(){
//    resultWindow= window.open("","","width=500px, height=500px")

//        resultWindow.document.write(`
//     <!DOCTYPE html>
//     <html>
//     <head><title>BOM</title></head>
//     <body>
//     <h3>Hello There </h3>
//     </body>
//     </html>
    
//     `)

// }
// // function closeWindow(){
// //     let flag=window.confirm(resultWindow);
// //     if(flag){
// //         resultWindow.close()
// //     }else{
// //         alert("Thank you")
// //     }
// // }



// window.setInterval(()=>{
//     window.location.reload()
// },1000)
let result=null;
function start(){
    let i=1;
  result=window.setInterval(()=>{
     let date=new Date()
     console.log(date)
    },1000)
}

function stop(){
window.clearInterval(result)

}


// localStorage.setItem("data","alekhya")

// function saveData(){
//     let input=document.getElementById("input")
//     localStorage.setItem("name",input.value)
// }