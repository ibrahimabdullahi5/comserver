document.getElementById("fetchButton").addEventListener("click",fetchData)

async function fetchData(){
    try{
        const response=await fetch('http://localhost:3000/users')
        const data=await response.json()
        console.log(data)
    }catch(error){
        console.error("there is network problem",error)
    }
}



