/**
 * 
 * Events:-
 * 
 */
// let btn1=document.getElementById("btn1")
// let btn2=document.getElementById("btn2")
// btn1.onclick=()=>{
//     // alert("43r java batch");
//     document.body.style.background="blue"
//     // btn2.remove()
// }

// let container=document.getElementsByClassName("container")[0]
// let btn=document.getElementById("btn")
// btn.onclick=()=>{
//     container.style.opacity="0"
// }
let btn=document.getElementById("btn")
// btn.onclick=()=>{
//     console.log("calling");
    
// }
btn.addEventListener("click",async ()=>{
    let res=await fetch("http://localhost:3000/products")
    try {
        if(!res){
            throw new Error("data not getting by this time")
        }
        let products=await res.json()
        // console.log(product)
        showData(products)
    } catch (error) {
        console.log(error)
    }
    
})

function showData(products){
    let container=document.getElementById("container")
    products.forEach((obj,index) => {
        // console.log(obj)

        let item=document.createElement("div")
        item.innerHTML=`
        <h3>id: ${obj.id}</h3>
        <h3>price: ${obj.price}</h3>
        <button onclick='deleteData(${index})'>Delete</button>
        `
//    let btn1=document.getElementsByClassName("${index}")[0]
// btn1.onclick=(index)=>{
//     console.log(index);
    
// }
   


        container.appendChild(item)
    });
}
function deleteData(index){
    console.log(index);
    
}