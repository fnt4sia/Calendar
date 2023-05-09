const quote = document.querySelector("#quote")
const subPage = document.querySelectorAll(".sub-page")
let counter = true

function slide() {
    if (counter){
        subPage[0].style.transform = "translateX(-100%)"
        subPage[1].style.transform = "translateX(0%)"
        subPage[2].style.transform = "translateX(0%)"
        quote.innerHTML = "With Tense-Fi, productivity becomes a necessity."
        quote.style.fontSize = "2rem"
        counter = false
    }
    else {
        subPage[0].style.transform = "translateX(0%)"
        subPage[1].style.transform = "translateX(42.85%)"
        subPage[2].style.transform = "translateX(100%)"
        quote.innerHTML = "You are welcomed to start your daily journey with Tense-Fi."
        quote.style.fontSize = "1.6rem"
        counter = true
    }
}