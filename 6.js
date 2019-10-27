const array1 = ['1', '2', '3', '4', '5'];
const array2 = ['6', '7', '8', '9', '0'];
const c= [];

const a = array1.reverse();
const b = array2.reverse();

for (let i = 0; i < array1.length; i++) {
  c.push(a[i]);
  c.push(b[i]);
}
console.log(c);
