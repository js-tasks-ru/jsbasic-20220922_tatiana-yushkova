function showSalary(users, age) {
  // ваш код...
  return users.filter(u => u.age <= age).map(u => u.name + ', ' + u.balance).join('\n');
}
