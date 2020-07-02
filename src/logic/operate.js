import Big from './big.mjs';

const operate = (numberOne, numberTwo, operation) => {
  const nOne = Big(numberOne);
  const nTwo = Big(numberTwo);
  let result = '0';
  switch (operation) {
    case '+':
      result = Number(nOne.plus(nTwo)).toString();
      break;
    case '-':
      result = Number(nOne.minus(nTwo)).toString();
      break;
    case '÷':
      if (nOne !== '0') {
        result = Number(nOne.div(nTwo)).toString();
      }
      break;
    case 'x':
      result = Number(nOne.times(nTwo)).toString();
      break;
    case '%':
      result = Number(nOne.div(100).times(nTwo)).toString;
      break;
    default:
      break;
  }
  return result;
};
export default operate;
