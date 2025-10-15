async function fetchData() {
    let res = await fetch("http://localhost:3000/data")
    try {
        if (!res) {
            throw new Error("Data not getting")
        }
        let data = await res.json();
        showData(data)
    } catch (error) {

    }
}


//Show Data

function showData(data) {
    let container = document.getElementById("container")
    let item = document.createElement("div")
    item.innerHTML = data.map(student => {
        return `
             <h3>id: ${student.id}</h3>
             <p>name:${student.name}</p>
             <img src="${student.image}">
             <button id='deletbtn${student.id}'>Delete</button>
             <button id='editbtn${student.id}'>Edit</button>
        `
    }).join("")
    container.appendChild(item)

    data.forEach(student => {
        let deletebtn = document.getElementById(`deletbtn${student.id}`)
        let editbtn = document.getElementById(`editbtn${student.id}`)
        deletebtn.onclick = () => {
            deleteData(student.id)
        }
        editbtn.onclick = () => {
            editData(student.id)
        }
    });
}

//Delete data

async function deleteData(id) {
    let res = await fetch(`http://localhost:3000/data/${id}`, { "method": "DELETE" })
    try {
        if (!res) {
            throw new Error("Data not Deleted");
        }
        alert("Data successfully deleted")

    } catch (error) {
        console.log(error)
    }

}

//Edit Data
async function editData(id) {
    let studentId = document.getElementById("id")
    let studentName = document.getElementById("name")
    let image = document.getElementById("img")
    let res = await fetch(`http://localhost:3000/data/${id}`)
    try {
        if (!res) {
            throw new Error("Data not getting");

        }
        let student=await res.json();
        studentId.value = student.id
        studentName.value = student.name
        image.value = student.image
    } catch (error) {
        console.log(error)
    }





}




// fetchData()
document.addEventListener("DOMContentLoaded", fetchData)