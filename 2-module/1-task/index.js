function sumSalary(salaries) {
  // ваш код...
  let sum = 0;

  for (let salary of Object.values(salaries)) {
    if(typeof(salary) == 'number' && !isNaN(salary) && salary !== Infinity && salary !== -Infinity) {
      sum += salary;
    }
  }

  return sum;
}
