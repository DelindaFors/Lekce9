/*const formatPriceCZK = (price) => {
    return `${price} CZK`
}

const formatPriceEUR = (price) => {
    return `${price} EUR`
}

const formatPriceUSD = (price) => {
    return `${price} USD`
}

const renderProduct = (name, decription, price, formatPrice) => {
    return `
    <h2> ${name}</h2>
    <p> ${description}</p>
    <p> ${formatPrice(price)} </p>
    `
}

document.body.innerHTML = renderProduct ("Pizza Salami", "Nejlepší pizza na světě", 200, formatPriceCZK)*/

/*const message = () => {
    alert ("Haha, vypršel ti čas, opakuješ semestr :)")
}

setTimeout (message, 5000)*/

/*setInterval(() => {
    document.body.innerHTML += "<p>YOU HAVE BEEN HACKED HAHAHAHAHA</p>"
}, 5000)*/

/*let seconds = 0
let minutes = 0

/*odpočítavací hodiny
setInterval(() => {
    if(seconds === 60) {
        seconds = 0
        minutes++ // minutes = minutes + 1; minutes--
    } else {
        seconds++
    }

    document.body.innerHTML = `${String(minutes).padStart (2,"0")}:${String (seconds).padStart (2,"0")}`
}, 1000)*/

/*let btn = document.querySelector ("#test")

btn. eddEventListener ("click", (e) => {
    e.target
}) funkce v parametru*/

/*ukol objednavka*/

/*const changeTitle = () => {
    const odstavecElement = document.querySelector('#button-order');
    odstavecElement.textContent = 'Objednáno';
  };

const buttonElement = document.querySelector('#button-order');
buttonElement.addEventListener('click', changeTitle);*/

const form = document.querySelector ("#form")

form.addEventListener ("submit", (e) => {
    const txtEl = document.querySelector ("elTxt")
    e.preventDefault () /*zablokovaná následná funkce - neaktualizuje se stránko po odeslání formuláře*/
    
    alert (`Vítej uživateli, ${Number (txtEL.value)}!`)
})
