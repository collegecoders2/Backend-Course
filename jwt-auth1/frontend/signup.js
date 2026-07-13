const btn = document.getElementById("btn")
btn.addEventListener("click",async()=>{

    const username=document.getElementById("username").value
    const password=document.getElementById("password").value

    const user = {
        username,
        password
    }

    const response = await fetch(
        "http://localhost:3000/signup",
        {
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(user)
        }
    )
    const result = await response.text()
    console.log(result)
})