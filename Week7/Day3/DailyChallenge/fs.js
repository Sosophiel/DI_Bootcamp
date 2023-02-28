const fs = require('fs');

let data = fs.readFileSync('RightLeft.txt', 'utf-8');
console.log(data);
let position = 0
for (const ch of data){
  if (ch == '>') position = position + 1;
  else if (ch == '<') position = position - 1
}

console.log(position)


data = fs.readFileSync('RightLeft.txt', 'utf-8');
console.log(data);
position = 0
let index = 0
for (const ch of data){
  if (ch == '>') position = position + 1;
  else if (ch == '<') position = position - 1  
  index = index + 1
  if(position == -1) {
    break;
  }

}

console.log(position, index)