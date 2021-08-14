export default class IMC {
  constructor(inputName, inputWeight, inputHeight, resultElement) {
    this.inputNameValue = document.querySelector(inputName).value
    this.inputWeightValue = document.querySelector(inputWeight).value.replace(',','.')
    this.inputHeightValue = document.querySelector(inputHeight).value.replace(',','.')
    this.resultElement = document.querySelector(resultElement)
  }

  isFilled() {
    return this.inputNameValue && this.inputWeightValue && this.inputHeightValue;
  }

  generateImcValue() {
    this.imcValue = (this.inputWeightValue / (this.inputHeightValue * this.inputHeightValue)).toFixed(1)
  }

  generateClassification() {
      if (this.imcValue < 18.) {
        this.classification = `underweight`
      } else if (18.5 >= this.imcValue <= 24.9) {
        this.classification = `normal weight`
      } else if (24.9 > this.imcValue <= 29.9) {
        this.classification = `overweight`
      } else if (29.9 > this.imcValue <= 34.9) {
        this.classification = `obese 1`
      } else if (34.9 > this.imcValue <= 39.9) {
        this.classification = `obese 2`
      } else if (this.imcValue > 39.9) {
        this.classification = `obese 3`
      }
  }

  generateMessage(fill) {
    if (fill) this.result = `${this.inputNameValue}, your imc is ${this.imcValue} and you are ${this.classification} `
    else this.result = `Please fill in all fields correct for correct operation.`
    this.resultElement.innerHTML = this.result
  }

  init() {
    if (this.isFilled()) {
      this.generateImcValue()
      this.generateClassification()
      this.fill = true
    } else {
      this.fill = false
    }
    this.generateMessage(this.fill)
  }
}

