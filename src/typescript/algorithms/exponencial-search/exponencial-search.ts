let numbers = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41,
  42, 43, 44, 45, 46, 47, 48, 49, 50,
];

function BinarySearch(
  arr: number[],
  value: number,
  left: number = 0,
  right: number,
): number {
  let steps = 0;

  while (left <= right) {
    let mid = Math.floor((right + left) / 2);
    steps++;

    if (arr[mid] === value) {
      return mid;
    }

    if (arr[mid] > value) {
      right = mid - 1;
    }

    if (arr[mid] < value) {
      left = mid + 1;
    }
  }

  return -1;
}

function ExponentialSearch(arr: number[], target: number) {
  if (arr.length === 0) return -1;

  if (arr[0] === target) {
    return 0;
  }

  let n = arr.length;
  let bound = 1;

  while (bound < n && arr[bound] <= target) {
    if (arr[bound] == target) return bound;
    bound *= 2;
  }

  let start = Math.floor(bound / 2);
  let end = Math.min(bound, n - 1);
  return BinarySearch(arr, target, start, end);
}

console.log(ExponentialSearch(numbers, 10));

export {};
