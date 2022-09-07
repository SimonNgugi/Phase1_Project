let email = document.getElementById("email")

let search = document.getElementById("search");
search.addEventListener("click", () => {
    console.log(email.value)
    fetch(`https://api.eva.pingutil.com/email?email=${email.value}`)
    .then(resp => resp.json())
    .then(result => {
        console.log(result.data.deliverable)
        let findings = result.data.deliverable
        let comment = document.getElementById("comment")
        if(findings){
            comment.textContent = "Hello Member"
        }else{
            comment.textContent = "Kindly Join Us"
        }
    })
})