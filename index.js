const nameInp = document.getElementById("name-input")
const userListWrapper = document.getElementById('user-list-wrapper')

let data = []

const dataFromLocalStorage = localStorage.getItem("userData")
if(dataFromLocalStorage.length>1){
    const extractedData = JSON.parse(dataFromLocalStorage)
    data = extractedData
}


function syncDataToLocalStorage(){
    localStorage.setItem("userData",JSON.stringify(data))
}

function addNewUser(name) {
    const newUser = {
        id : Date.now(),
        name : name
    }

    data.push(newUser)
    syncDataToLocalStorage()
}

function addBtnClickHandler(){
    const name = nameInp.value

    addNewUser(name)
    renderUserList()
}

function renderUserList(){
    let finalInnerHtml = ""

    const dataFromLocalStorage = localStorage.getItem("userData")
    const extractedData = JSON.parse(dataFromLocalStorage)

    extractedData.forEach(item => {
        finalInnerHtml+= `<p>${item.name}</p>`
    })
    userListWrapper.innerHTML = finalInnerHtml
}

renderUserList()