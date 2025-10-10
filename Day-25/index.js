/**
 * DOM:-
 * -----
 * 
 * document.getelementByid()
 * document.getElementsByClassname()
 * querrySelectore()
 * querrySelectoreaAll()
 * 
 */

// let container=document.getElementsByClassName("container")[0]
// container.innerHTML="hello there"
// console.log(container);

async function getData() {
    let res = await fetch("https://fakestoreapi.com/products");
    let data = await res.json()
    displayData(data)
}
function displayData(data) {
    let container = document.getElementById("container")
    data.forEach(obj => {
        let div = document.createElement("div")
        div.innerHTML = `
           <h3>id:${obj.id}</h3>
            <p><b>Title:</b>${obj.title}</p>
            <img src=${obj.image}>
        `
        container.appendChild(div)
    });
}


















// function displayData(data){
//     let table=document.createElement("table")
//     data.forEach(obj => {
//        let tr=document.createElement("tr")
//        let td=document.createElement("td")
//        td.innerHTML=`
//              <h3>id:${obj.id}</h3>
//              <p><b>Title:</b>${obj.title}</p>
//              <img src=${obj.image}>
//        `
//        tr.appendChild(td)
//        table.appendChild(tr)
//     });
//     document.body.appendChild(table)

// }
getData()

