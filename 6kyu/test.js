function order(words) {
  // if (!words) return '';
  let arr = words.split(' ');
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].includes('1')) {
      result[0] = arr[i];
    } else if (arr[i].includes('2')) {
      result[1] = arr[i];
    } else if (arr[i].includes('3')) {
      result[2] = arr[i];
    } else if (arr[i].includes('4')) {
      result[3] = arr[i];
    } else if (arr[i].includes('5')) {
      result[4] = arr[i];
    } else if (arr[i].includes('6')) {
      result[5] = arr[i];
    } else if (arr[i].includes('7')) {
      result[6] = arr[i];
    } else if (arr[i].includes('8')) {
      result[7] = arr[i];
    } else if (arr[i].includes('9')) {
      result[8] = arr[i];
    }
  }

  return result.join(' ');
}

console.log(order('is2 Thi1s T4est 3a')); // "Thi1s is2 3a T4est"
console.log(order('4of Fo1r pe6ople g3ood th5e the2')); // "Fo1r the2 g3ood 4of th5e pe6ople"
console.log(order('')); // ""
