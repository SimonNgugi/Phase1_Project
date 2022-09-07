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

let homeContainer = document.getElementById("container").innerHTML
let newContent = document.getElementById("container")
let aboutUsButton = document.getElementById("aboutUs")
aboutUsButton.addEventListener("click", () => {
    console.log(homeContainer)
    newContent.innerHTML = "<div id='aboutUs' style='margin-top:100px;font-size: 40px;'><h1>What is Lorem Ipsum?</h1><p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p></div>"
    form.style.visibility = "hidden"
})

let homeButton = document.getElementById("home")
homeButton.addEventListener("click", () => {
    newContent.innerHTML = homeContainer
    form.style.visibility = "visible"
})

let form = document.getElementById("form")

let contactUsButton = document.getElementById("contactUs")
contactUsButton.addEventListener("click", () => {
    newContent.innerHTML =""
    let contactUsContainer = document.createElement("div")
    let companyNamePar = document.createElement("h1")
    companyNamePar.textContent = "My Cover"
    contactUsContainer.appendChild(companyNamePar)
    newContent.appendChild(contactUsContainer)
    form.style.visibility = "hidden"
})