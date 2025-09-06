let count = 0;
// select value and btns
const value = document.querySelector('#value')
const btns = document.querySelectorAll(".btn")

btns.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
        if (e.currentTarget.classList.contains('increase')) {
            count++;
        }
        else if (e.currentTarget.classList.contains('decrease')) {
            count--;
        }
        else {
            count = 0;
        }
        if (count > 0) {
            value.style.color = 'green'
        }
        if (count < 0) {
            value.style.color = 'red'
        }
        if (count == 0) {
            value.style.color = 'black'
        }
        value.textContent = count;
    })


})

