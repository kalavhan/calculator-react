import operate from './operate';

const calculate = ({ total, next, operation }, buttonName) => {
  if (buttonName.match(/0-9/)) {
    if (!next && !operation) {
      return { total: `${total}${buttonName}`, next, operation };
    }
    if (next == null) {
      return { total, next: buttonName, operation };
    }
  }
  if (buttonName.match(/[÷+-x%]/) && total != null) {
  }
};

export default calculate;
