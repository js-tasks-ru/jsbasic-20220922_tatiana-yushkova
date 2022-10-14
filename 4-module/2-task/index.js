function makeDiagonalRed(table) {
  // ваш код...
  for (let i = 0; i < table.rows.length; i++) {
    let result = table.rows[i].cells[i];
    result.style.background = 'red';
  }
}
