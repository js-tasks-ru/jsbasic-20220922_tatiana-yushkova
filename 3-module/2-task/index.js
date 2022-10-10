function filterRange(arr, a, b) {
  // ваш код...
  return arr.filter(function (item) {
    if(item >= a && item <= b) {
      return item;
    }
  });
}
