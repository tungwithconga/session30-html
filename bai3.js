function sortCharacters(inputString) {
    const letters = [];
    const digits = [];
    const specialChars = [];
    for (let char of inputString) {
      if (/[a-zA-Z]/.test(char)) {
        letters.push(char);
      } else if (/[0-9]/.test(char)) {
        digits.push(char);
      } else {
        specialChars.push(char);
      }
    }
  
    const sortedArray = letters.concat(digits, specialChars);
  
    return sortedArray;
  }
  
  const readline = require('readline');
  
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  rl.question('Nhập vào chuỗi: ', (answer) => {
    const inputString = answer;
  
    const resultArray = sortCharacters(inputString);
  
    console.log('Mảng kết quả:', resultArray);
  
    rl.close();
  });
  