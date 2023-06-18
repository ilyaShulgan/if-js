// 1
const user = 'John Doe';
const student = 'Ilya';
console.log(student);
console.log(user);
console.log(student + user);

console.log('------2-----');
// 2
let test = 1;
test += '1';
console.log(test);
test = test - 1;
console.log(test);
const tests = true;
console.log(tests);
console.log('------3-----');
// 3
let result = 1;
const mass = [2, 3, 5, 8];
for (let i = 0; i < mass.length; i++) {
  result = result * mass[i];
  console.log(result);
}
console.log('------4-----');
// 4
const mas = [2, 5, 8, 15, 0, 6, 20, 3];
for (let i = 0; i < mas.length; i++) {
  if (mas[i] > 5 && mas[i] < 10) {
    console.log(mas[i]);
  }
}
console.log('------5-----');
// 5
const massive = [2, 5, 8, 15, 0, 6, 20, 3];
for (let i = 1; i <= 20; i += 1) {
  if (massive[i] % 2 === 0) {
    console.log(massive[i]);
  }
}
