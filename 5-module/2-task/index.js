function toggleText() {
  // ваш код...
  let myButton = document.querySelector('.toggle-text-button');
  let textBlock = document.querySelector('#text');

  myButton.addEventListener('click', () => textBlock.hidden = !textBlock.hidden);
}
