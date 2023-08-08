const currentDisplay = document.querySelector('.display-current')
const buttons = document.querySelectorAll('button')


const operations = ['*', '/', '+', '-']
let firstNumber = ''
let secondNumber = ''
let operation = ''

const captureDigit = (button) => {
    let digit = button.target.textContent

    if (operations.includes(digit)) {
        if (digit === '-' && firstNumber === '') {
            firstNumber = digit
            return
        }
        if (firstNumber !== '' && secondNumber !== '') {
            equal(firstNumber, secondNumber, operation)
            operation = digit
            return
        }
        operation = digit
        return
    }

    if (digit === '=') {
        equal(firstNumber, secondNumber, operation)
        return
    }

    if (digit === 'C') {
        clear()
        return
    }
    if (digit === '←') {
        clearDigit()
        return
    }

    if (digit === '±') {
        moreOrLess()
        return
    }

    if (digit == '%') {
        percentage()
        return
    }
    if (operation == '') {
        if (digit === '.') {
            if (firstNumber.includes(digit)) {
                return
            }
        }

        firstNumber += digit
        updateScreen(firstNumber)
        return
    } else {
        if (digit === '.') {
            if (secondNumber.includes(digit)) {
                return
            }
        }


        secondNumber += digit
        updateScreen(secondNumber)
    }


}
const clearDigit = () => {
    if (secondNumber == '') {
        currentDisplay.textContent = currentDisplay.textContent.slice(0, -1)
        firstNumber = currentDisplay.textContent
    } else {
        currentDisplay.textContent = currentDisplay.textContent.slice(0, -1)
        secondNumber = currentDisplay.textContent
    }
}
const percentage = () => {
    if (secondNumber === '') {
        clear()
        return
    }

    if (operation == '-') {
        let decrease = eval(firstNumber) - eval(firstNumber * (secondNumber / 100))
        updateScreen(decrease)
        firstNumber = decrease
        return
    }
    if (operation == '+') {
        let addition = eval(firstNumber) + eval(firstNumber * (secondNumber / 100))
        updateScreen(addition)
        firstNumber = addition
        return
    }
    if (operation == '*') {
        let multiplication = eval(firstNumber * (secondNumber / 100))
        updateScreen(multiplication)
        firstNumber = multiplication
        return

    }
    if (operation == '/') {
        let division = eval(firstNumber / (secondNumber / 100))
        updateScreen(division)
        firstNumber = division
        return
    }


}
const moreOrLess = () => {
    if (secondNumber == '') {
        firstNumber = +firstNumber * (-1)
        updateScreen(firstNumber)
        return
    } else {
        secondNumber = +secondNumber * (-1)
        updateScreen(secondNumber)

    }
}
const clear = () => {
    firstNumber = ''
    secondNumber = ''
    operation = ''
    updateScreen('0')
}
const equal = (firsh, second, operador) => {
    const result = eval(`${firsh}${operador}${second}`)
    updateScreen(result)

    firstNumber = result
    secondNumber = ''

}
const updateScreen = (string) => {
    currentDisplay.textContent = string
}



buttons.forEach(button => {
    button.addEventListener('click', event => captureDigit(event))
});