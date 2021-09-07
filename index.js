function submitData(userName, userEmail){
    let userData = {
        name: userName,
        email: userEmail
    }

    let userObject = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"          
        },
        body: JSON.stringify(userData)
    }
    return fetch('http://localhost:3000/users', userObject)
        .then(function(response){
            return response.json()
        })
        .then(function(object){
            document.body.innerHTML += object["id"]
        } )
        .catch(function(error){
            document.body.innerHTML += error.message
        })
}
