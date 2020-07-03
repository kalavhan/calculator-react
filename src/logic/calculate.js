import operate from './operate';

const calculate = ({ total, next, operation }, buttonName) => {
  if (buttonName.match(/[0-9]/)) {
    if (!operation) {
      if (total) {
        return { total: `${total}${buttonName}`, next, operation };
      }
      return { total: buttonName, next: null, operation };
    }
    if (operation) {
      if (!next) {
        return { total, next: buttonName, operation };
      }
      return { total, next: `${next}${buttonName}`, operation };
    }
  } else if (buttonName === '.') {
    if (!operation) {
      if (!total) {
        return { total: '0.', next, operation };
      }
      if (!total.includes('.')) {
        return { total: `${total}.`, next, operation };
      }
    } else {
      if (!next) {
        return { total, next: '0.', operation };
      }
      if (!next.includes('.')) {
        return { total, next: `${next}.`, operation };
      }
    }
  } else if (buttonName === '+/-') {
    if (!operation && !next) {
      return { total: operate(total, '-1', 'x'), next, operation };
    }
    if (operation && next) {
      return { total, next: operate(next, '-1', 'x'), operation };
    }
  } else if (buttonName.match(/[%+\x2Dx\xF7]/) && total && !next) {
    return { total, next, operation: buttonName };
  } else if (buttonName === '=' && total && next && operation) {
    return { total: operate(total, next, operation), next: null, operation: null };
  } else if (buttonName === 'AC') {
    return { total: null, next: null, operation: null };
  }
  return { total, next, operation };
};

export default calculate;
