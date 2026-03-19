function binary_search(arr: number[], target: number): number {
  let begin = 0;
  let end = arr.length - 1;

  while (begin <= end) {
    let mid = Math.floor((begin + end) / 2);

    if (arr[mid] === target) {
      return mid;
    }

    if (arr[mid] > target) {
      end = mid - 1;
    } else {
      begin = mid + 1;
    }
  }

  return -1;
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(binary_search(arr, 3));
