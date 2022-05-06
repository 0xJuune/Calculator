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
let resultOverride = (number) => {
        if (numberStore == 0 || operatorStore == 'equal')  {
            numberStore = number;
            (operatorStore == 'equal') ? operatorStore = null: operatorStore = operatorStore;
        }
        else {
            numberStore += number;          
        }
}

let addToNumberStore = (idNumber) => {
    if (numberStore.length < 15) {
        resultOverride(idNumber)}
    else {
         console.log('too big');
    }
    display.textContent = numberStore;
}
let operationUpdateDisplay = () => {
    subDisplay.textContent = expressionDisplay;
    numberStoreTwo = numberStore;
    numberStore = '0';
    display.textContent = numberStore;
}

let functionButton = (button) => {
    switch (button) {
        case 'AC':
            return clearMath()
        case '-':
            operatorStore = 'minus';
            expressionDisplay = `${numberStore} -` 
            operationUpdateDisplay()
            break;
        case '+':
            operatorStore = 'plus';
            expressionDisplay = `${numberStore} +` 
            operationUpdateDisplay()
            break;
        case '*':
            operatorStore = 'multiply';
            expressionDisplay = `${numberStore} x` 
            operationUpdateDisplay()
            break;
        case '/':
            operatorStore = 'divide';
            expressionDisplay = `${numberStore} /` 
            operationUpdateDisplay()
            break;
        case 'equal':
            numberStore = evaluate(operatorStore)
            numberStore = numberStore.toString()
            display.textContent = numberStore
            operatorStore = 'equal'
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
        case 'plus':
            subDisplay.textContent = `${a} + ${b} = `;
            return a + b;
        case 'multiply':
            subDisplay.textContent = `${a} x ${b} = `;
            return a * b;
        case 'divide':
            subDisplay.textContent = `${a} / ${b} = `;
            return ((b == 0) ? 'ERR: div by 0': a / b);
        default:
            return numberStore;
}
}


calcButtonNumber.forEach((button) =>
  button.addEventListener('click', () => addToNumberStore(button.id))
)

calcButtonFunction.forEach((button) =>
  button.addEventListener('click', () => functionButton(button.id)) 
)
