/**
 * 选择排序
 * @param {num[]} arr 
 */
function selectionSort(arr) {
  if (arr.length <= 1) {
    return;
  }
  let min, temp;
  let len = arr.length;
  for (let i = 0; i < len - 1; i++) {
    min = i;
    for (let j = i + 1; j < len; j++) {
      if (arr[min] > arr[j]) {
        min = j
      }
    }
    temp = arr[i];
    arr[i] = arr[min];
    arr[min] = temp;
  }
  return arr;
}

Array.prototype.selection_sort = function () {
  if (this.length <= 1) {
    return;
  }
  let min, temp;
  let len = this.length;
  for (let i = 0; i < len - 1; i++) {
    min = i;
    for (let j = i + 1; j < len; j++) {
      if (this[min] > this[j]) {
        min = j
      }
    }
    temp = this[i];
    this[i] = this[min];
    this[min] = temp;
  }
  return this;
};