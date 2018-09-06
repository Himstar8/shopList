function closeToZero(arr) {
  if (arr.length == 0) {
    return 0;
  } else if (arr.length == 1) {
    return arr[0];
  } else {
    var arr1 = arr.map(c => {
      return Math.abs(c);
    });
    arr1.sort((a, b) => {
      return a - b;
    });
    if (arr1[0] == arr[1]) {
      return arr1[0];
    } else {
      return arr.indexOf(arr1[0]) == -1 ? -arr1[0] : arr1[0];
    }
  }
}

console.log(
  closeToZero([
    7,
    -10,
    13,
    8,
    4,
    -7.2,
    -12,
    -3.7,
    3.5,
    -9.6,
    6.5,
    -1.7,
    -6.2,
    7
  ])
);
