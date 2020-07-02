import Big from './big.mjs';

const operate = (numberOne, numberTwo, operation) => {
  const nOne = Big(numberOne);
  const nTwo = Big(numberTwo);
  
  switch (operation) {
    case '+':
      nOne.plus(nTwo);
      break;
    case '-':
      nOne.minus(nTwo);
      break;
    case '/':
      nOne.div(nTwo);
      break;
    case 'x':
      nOne.times(nTwo);
      break;
    case '%':
      nOne.minus(nTwo);
      break;  
    default:
      break;
  }
}