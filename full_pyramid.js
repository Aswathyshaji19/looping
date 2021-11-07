let totalrow = 5;
let str = "";
for (let row = 1; row <= totalrow; row++) {
  // printing spaces
  for (let space = 1; space<= totalrow - row; space++) {
    str += " ";
  }
  // printing star
  for (let star = 1; star <=2*row-1; star++) {
    str += "*";
  }
  str += "\n";
}
console.log(str);