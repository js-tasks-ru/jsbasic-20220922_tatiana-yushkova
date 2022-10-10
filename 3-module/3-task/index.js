function camelize(str) {
  // ваш код...

  let s1 = str.split('-');
  let s2 = s1.map((word, index) => index === 0 ? word : word[0].toUpperCase() + word.slice(1));

  return s2.join('');
}
