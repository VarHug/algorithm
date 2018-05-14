/**
 * 冒泡排序
 * @param {num[]} arr 
 */
function bubble_sort(arr) {
  if (arr.length <= 1) {
    return;
  }
  let temp;
  let len = arr.length;
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        temp = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
}

Array.prototype.bubble_sort = function () {
  if (arr.length <= 1) {
    return;
  }
  let temp;
  let len = this.length;
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len - 1 - i; j++) {
      if (this[j] > this[j + 1]) {
        temp = this[j + 1];
        this[j + 1] = this[j];
        this[j] = temp;
      }
    }
  }
  return this;
}