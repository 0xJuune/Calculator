//var
const calcButtonNumber = document.querySelectorAll('.gridItemNumber')
const calcButtonFunction = document.querySelectorAll('.gridItem')
const display = document.querySelector('.visualFeed')
const subDisplay = document.querySelector('#subDisplay')


let numberStore = '0'
let numberStoreTwo = '0'
let expressionDisplay = null
let operatorStore = null


//funcs
let test = (ya) => {
        if (numberStore == 0 || operatorStore == 'equal')  {
            numberStore = ya;
            (operatorStore == 'equal') ? operatorStore = null: operatorStore = operatorStore;
        }
        else {
            numberStore += ya;          
        }
}


let addToNumberStore = (idNumber) => {
    if (numberStore.length < 15) {
        test(idNumber)}
    else {
         console.log('too big');
    }
    display.textContent = numberStore;
}

let functionButton = (button) => {
    switch (button) {
        case 'AC':
            return clearMath()
        case '-':
            // move display to small screen(expressionStore) add - symbol, 
            operatorStore = 'minus';
            expressionDisplay = `${numberStore} -` 
            subDisplay.textContent = expressionDisplay;
            numberStoreTwo = numberStore;
            numberStore = '0';
            display.textContent = numberStore;
            break;
        case '=':
            numberStore = evaluate(operatorStore)
            numberStore = numberStore.toString()
            display.textContent = numberStore
            operatorStore = 'equal'
            // evaluate(operatorStore)
            break;
        default:
            return null
    }

    
}

let clearMath = () => {
    numberStore = '0'; 
    operatorStore = null;
    display.textContent = numberStore;
    subDisplay.textContent = 0;
}

let evaluate = (operator) => {
    let a = Number(numberStoreTwo)
    let b = Number(numberStore)
    switch (operator) {
        case 'minus':
            subDisplay.textContent = `${a} - ${b} = `;
            return a - b;
        default:
            return "fuck";
        // case 'equal':
        //     numberStore = '0';
        //     display.textContent = numberStore;
}
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