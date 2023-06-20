const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 22, 44];


const sum = array.reduce((acc, num) => acc + num, 0);

for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
}


const double = array.map((num) => num * 2);

const even = array.filter((num) => num % 2 === 0);