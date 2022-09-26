const container = document.querySelector('.container');
const output = document.querySelector('.output')
const numbers = document.querySelectorAll('.nums')
const operators = document.querySelectorAll('operators')

console.log(output)
function DisplayTheNumber() {
    numbers.forEach((number) => {
        number.addEventListener('click', () => {
            output.textContent = number.textContent
        })
    })
}
DisplayTheNumber()