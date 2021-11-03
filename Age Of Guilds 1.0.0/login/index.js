function register(email, senha) {
    localStorage.setItem(email, senha)
}

function login(email, senha) {
    const userPassword = localStorage.getItem(email)
    if (userPassword === senha) {
        return true
    } else {
        return false
    }
}

function onLogin() {
    const email = document.querySelector("#email").value
    const senha = document.querySelector("#senha").value

    const canGo = login(email, senha)
    if (canGo) {

        window.location.href = "/ficha"
    } else {
        alert("Continue tentando, idiota")
    }

}

let inputs = document.getElementsByClassName('input-form');
for (let input of inputs) {
    input.addEventListener("blur", function() {
        if (input.value.trim() != "") {
            input.classList.add("has-val");
        } else {
            input.classList.remove("has-val");
        }
    });
}