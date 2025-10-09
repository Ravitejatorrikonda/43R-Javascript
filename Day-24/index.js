/**
 * 
 * DOM :- Document Object Model:-
 * ---------------------------------
 * 
//  */
// let container=document.createElement("div")
// let p=document.createElement("p")
// p.innerText="Hello There"
// container.appendChild(p)
// console.log(container);
// document.body.appendChild(container)

// let table=document.createElement("table")
// let t_row=document.createElement("tr")
// for(let i=1;i<=3;i++)
// {
//     let td=document.createElement("td")
//     td.innerText=i;
//     t_row.appendChild(td)
    
// table.appendChild(t_row)
// }
// document.body.appendChild(table)
// console.log(table);

// let container1=document.createElement("div")
// container1.innerText="<i style='color:red;'>hELLO There 1</i>"
// document.body.appendChild(container1)

// let container2=document.createElement("div")
// container2.innerHTML="<i style='color:red;'>Hello There 2</i>"
// document.body.appendChild(container2)
// let container=document.createElement("div")
// container.className="main1"
// container.setAttribute=("name","main")
// document.body.appendChild(container)
// console.log(container)


// let arr=["sampanth","Poojitha","gay3","sreeja","shabana"]
// let container=document.createElement("div")
// arr.forEach(student=>{
//     let p=document.createElement("p")
//     p.innerHTML=student;
//     //`
//     // <h3>name:</h3>${student}
//     // `
//     container.appendChild(p)
//     console.log(p)
// })
// document.body.appendChild(container)


async function getdata() {
    let res=await fetch("http://localhost:3000/data")
    let data=await res.json()
    saveData(data)
}
function saveData(data){
    let container=document.createElement("div")
    data.forEach(student => {
        let p=document.createElement("p")
        p.innerHTML=`
        name:${student.name}
        `
        container.appendChild(p)        
    });
 document.body.appendChild(container)   
}
getdata()

