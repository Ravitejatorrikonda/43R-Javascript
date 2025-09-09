/**
 * 
 * 
 */

// const URL="https://fakestoreapi.com/products"
// fetch(URL).then(res=>res.json())
// .then(data=>console.log(data))
// .catch(data=>console.error(data.message))

fetch("https://dummyjson.com/todos")
.then(res=>res.json())
.then(data=>{
    for(let i=0;i<data.todos.length;i++){
        console.log(data.todos[i].todo)
    }
})

