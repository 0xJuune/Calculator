//var
const calcButtonNumber = document.querySelectorAll('.gridItemNumber')
const calcButtonFunction = document.querySelectorAll('.gridItem')
const display = document.querySelector('.visualFeed')
const displayContent = document.querySelector('.visualFeed').textContent

let numberStore = '0'
let numberEval = Number(numberStore)


//funcs
// let addToDisplay = (number) => {
//     (display.textContent == 0) ? display.textContent = number: display.textContent += number ;
// }
let addToNumberStore = (idNumber) => {
    (numberStore.length < 15) ? ((numberStore == 0) ? numberStore = idNumber: numberStore += idNumber): console.log('too big');
    display.textContent = numberStore;
    numberEval = Number(numberStore);
}

let functionButton = (button) => {
    switch (button) {
        case 'AC':
            
    }
    
}

let clearMath = () => {
    
}





//stuff



calcButtonNumber.forEach((button) =>
  button.addEventListener('click', () => addToNumberStore(button.id))
)

calcButtonFunction.forEach((button) =>
  button.addEventListener('click', () => functionButton(button.id)) 
)








//addEventListener for setting variables/array items by #ID, (html buttons have ID for 0-9, and + - * /, 
//for calculation id = will call a func. That func will reference the parsed IDs in the array/variables. 

// display var gets stored when an operator button is pressed, and then display var is cleared. 