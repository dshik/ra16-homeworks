function isNumber(value) {
  return typeof(value) === 'number';
}

function withValidator(isValid, operation) {
  return function(...args) {
    if (!args.every(isValid)) {
      throw new Error('Передан некорректный аргумент');
    }
    return operation.apply(this, args);
  }
}

function withLogger(tag, operation) {
  return function (...args) {
    console.log(tag, ...args);
    return operation.apply(this, args);
  }
}

function mul(a, b) {
  return a * b;
}

function add(a, b) {
  return a + b;
}

function sub(a, b) {
  return a - b;
}

function div(a, b) {
  return a / b;
}

const a = 9;
const b = 3;

const numberAdd = withValidator(isNumber, add);
const numberMul = withValidator(isNumber, mul);
const numberDiv = withValidator(isNumber, div);
const numberSub = withValidator(isNumber, sub);

const loggerNumberAdd = withLogger("Сложение", numberAdd);
const loggerNumberMul = withLogger("Умножение", numberMul);
const loggerNumberDiv = withLogger("Деление", numberDiv);
const loggerNumberSub = withLogger("Вычитание", numberSub);

console.log(loggerNumberAdd(a, b));
console.log(loggerNumberMul(a, b));
console.log(loggerNumberDiv(a, b));
console.log(loggerNumberSub(a, b));
