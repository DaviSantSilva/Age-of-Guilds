//registro
function register(email, senha) {
    localStorage.setItem(email, senha)
}

function onRegister() {
    const email = document.querySelector("#email").value
    const senha = document.querySelector("#senha").value

    register(email, senha)
    window.location.href = "/login"
}
//-------------------------------------------------------------
//login 
function login(email, senha) {
    const userPassword = localStorage.getItem(email)
    if (userPassword === senha) {
        return true
    } else {
        return false
    }
}