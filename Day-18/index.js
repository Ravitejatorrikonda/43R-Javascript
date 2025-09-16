/**
 * 
 * 
 */
let options = {
    "method": "DELETE"
    // "headers":{
    //     "Content-Type":"application/json"
    // },
    // "body":JSON.stringify({

    //     "name":"Monkeys"
    // })
}

fetch("http://localhost:5000/products")
    .then(res => {
        return res.json()
    })
    .then(data => {
        for (let i = 0; i < data.length; i++) {
            fetch(`http://localhost:5000/products/${data[i].id}`, options)
                .then(res => {
                      if(res.ok){
                        console.log(res.status + res.statusText)
                      }else{
                        console.log("data not deleted");
                        
                      }
                })
        }
    }
    )