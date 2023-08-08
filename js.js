// let currentOperation = document.querySelector('.display-current')
// let previousOperation = document.querySelector('.display-previous')
// const buttons = document.querySelectorAll('button')




// class Calculator {
//     constructor(currentOperation, previousOperation) {
//         this.currentOperation = currentOperation
//         this.previousOperation = previousOperation
//         this.operation = ['-', '+', '*', '/']
//         this.numbersTyped = ''
//     }

//     getCharacter(character) {
//         let digit = character.target.textContent

//         this.sorting(digit)
//     }
//     sorting(digit) {


//         if (digit === 'C') {
//             this.clear()
//         } else if (digit === '←') {
//             this.clearDigit()
//         } else { //é operação
//             if (this.operation.includes(digit)) {
//                 previousOperation.textContent += digit
//             } else {//è número
//                 if (digit === '=') {
//                     this.equal(this.numbersTyped)
//                 }
//                 this.numbersTyped += digit
//                 this.updateScrean(digit)
//                 this.numbersTyped += digit
//             }

//         }

//     }

//     updateScrean(digit) {
//         currentOperation.textContent += digit
//         previousOperation.textContent += digit
//     }


//     clearDigit() {
//         currentOperation.textContent = currentOperation.textContent.slice(0, -1)
//         previousOperation.textContent = previousOperation.textContent.slice(0, -1)
//     }
//     clear() {
//         currentOperation.textContent = ''
//         previousOperation.textContent = ''
//         numbersTyped = ''
//     }
//     equal(string) {
//         console.log(string)
//         let result = eval(string)
//         currentOperation.textContent = result
//         console.log(result)
//     }
// }


// const calc = new Calculator()












// buttons.forEach(element => {
//     element.addEventListener('click', (e) => {
//         calc.getCharacter(e)
//     })
// });