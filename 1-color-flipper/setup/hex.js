const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById("btn")
const color = document.querySelector(".color")

btn.addEventListener('click',function(){
    const randomColor = getColorValue();
    // console.log(randomColor);
    document.body.style.backgroundColor = randomColor
    color.textContent = randomColor 

})

function getRandomNumber() {
    return Math.floor(Math.random() * hex.length);
}

function getColorValue() {
    let randomColor = '#'
    for (let i = 0; i <= 5; i++) {
        const randomNumber = getRandomNumber()
        randomColor = randomColor + hex[randomNumber]
    }
    return randomColor;
}