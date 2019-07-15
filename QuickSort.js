const quickSort = (arr) => {
  if (arr.length === 0) {
    return arr;
  }

  const left = [];
  const right = [];
  const pivot = arr.pop();

  arr.forEach((item) => {
    if (item <= pivot) {
      left.push(item);
    } else {
      right.push(item);
    }
  });

  return [].concat(quickSort(left), pivot, quickSort(right));
}