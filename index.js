let email = document.getElementById("email")

let search = document.getElementById("search");
search.addEventListener("click", () => {
    console.log(email.value)
    fetch(`https://api.eva.pingutil.com/email?email=${email.value}`)
    .then(resp => resp.json())
    .then(result => {
        console.log(result.data.deliverable)
    })
})