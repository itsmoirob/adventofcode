const a1 = 1122;
const a2 = 1111;
const a3 = 1234;
const a4 = 91212129;

const captcha = (a) => {
  const tempA = a.toString().split('');
  tempA.push(a.toString().split('').shift());
  let value = 0;
  for (let index = 0; index < tempA.length; index++) {
    if(index === tempA.length) {
      return;
    }
    if(tempA[index] === tempA[index+1]) {
      value += parseInt(tempA[index]);
    }
  }
  return value;
};

console.log(captcha(a4));