// var bonus = document.querySelector('div.bonus') = resultado;
// var tbonus = bonus.textcontent;

// var n1 = document.querySelector('div.numero');
// var tn1= n1.textcontent;

// var resultado = n1 -10 /2;
// console.log(resultado);

function getBonus(cardValue) {
    let result = (cardValue - 10) / 2
    result = Math.floor(result)
    return result
}

function onChangeCardInput(cardValue, bonusId) {
    const bonus = getBonus(cardValue)
    const bonusElement = document.querySelector(`#${bonusId}`)
    bonusElement.innerHTML = bonus
}

var forca = document.getElementById('input-forca').value;
localStorage.getItem("input-forca");
console.log(input-forca)



