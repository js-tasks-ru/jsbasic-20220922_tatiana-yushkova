function highlight(table) {
  // ваш код...
  for (let row of table.children[1].rows) {
    //available
    let dataAvailable = row.cells[3];

    if (dataAvailable.hasAttribute("data-available")) {
      if (dataAvailable.dataset.available === "true") {
        row.classList.add("available");
      } else row.classList.add("unavailable");
    } else row.hidden = true;


    //gender
    let gender = row.cells[2].textContent;
    if (gender === 'm') {
      row.classList.add("male");
    } else if (gender === 'f') row.classList.add("female");


    //age
    let age = row.cells[1].textContent;
    if (age < 18) {
      row.style.textDecoration = 'line-through';
    }
  }
}
