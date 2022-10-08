function getMinMax(inputData ) {
  // ваш код...
  let myArr = inputData.split(' ');

  let onlyNums = myArr.filter(Number);

  let minValue = onlyNums[0];
  let maxValue = minValue

  for (let i = 0; i < onlyNums.length; i++) {
    minValue = Math.min(minValue, onlyNums[i]);
    maxValue = Math.max(maxValue, onlyNums[i]);
  }

  return {min: minValue, max: maxValue};
}
