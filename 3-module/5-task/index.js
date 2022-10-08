function getMinMax(inputData ) {
  // ваш код...
  let myArr = inputData.split(' ');

  let minValue = myArr[0];

  let maxValue = minValue;

  for (let i = 0; i < myArr.length; i++) {
    let el = +myArr[i];
    if (el < minValue) minValue = el;
    else if (el > maxValue) maxValue = el;
  }

  return {min: minValue, max: maxValue};
}
