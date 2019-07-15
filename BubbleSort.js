const bubbleSort = arr => {
  let swapped;
  let passes = 0;
  let len = arr.length;
  do {
    swapped = false;
    for (let i = 0; i < len; i++) {
      if (arr[i] > arr[i + 1]) {
        let tmp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = tmp;
        swapped = true;
      }
    }
    passes++
  } while (swapped);

  return arr, passes;
};
