function hideSelf() {
  // ваш код...
  let myButton = document.querySelector('button');

  myButton.addEventListener('click', hideSelf);

  function hideSelf() {
      return myButton.hidden = true;
  }
}
