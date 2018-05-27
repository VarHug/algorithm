/**
 * 快速排序(递归法)
 * @param {num[][]} arr
 * @returns {num[][]}
 */
function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  let len = arr.length;
  let left = [], right = [];
  let mid = [arr[0]];
  for (let i = 1; i < len; i++) {
    if (arr[i] < mid) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return quickSort(left).concat(mid.concat(quickSort(right)));
}

/**
 * 快速排序(递归法)
 * @returns {num[][]}
 */
Array.prototype.quick_sort = function () {
  if (this.length <= 1) {
    return this;
  }
  let pivot = this[0];
  let lower = this.filter((item) => {
    return item < pivot;
  });
  lower = lower.quick_sort();

  let mid = this.filter((item) => {
    return item === pivot;
  });

  let higher = this.filter((item) => {
    return item > pivot;
  });
  higher = higher.quick_sort();

  return lower.concat(mid, higher);
};