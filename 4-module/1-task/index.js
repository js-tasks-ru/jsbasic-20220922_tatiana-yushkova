function makeFriendsList(friends) {
  // ваш код...
  let myUl = document.createElement('ul');
  document.body.appendChild(myUl);

  for (let elem of friends) {
    let e = `<li>${elem.firstName} ${elem.lastName}</li>`
    myUl.insertAdjacentHTML('beforeend', e);
  }

  return myUl;
}
