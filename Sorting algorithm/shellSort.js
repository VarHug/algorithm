/**
 * 希尔排序
 * @param {num[][]} arr 
 */
function shellSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  let i, j, temp, gap;
  let len = arr.length;
  for (gap = len >> 1; gap > 0; gap >>= 1) {
    for (i = gap; i < len; i++) {
      temp = arr[i];
      for (j = i; j > 0 && arr[j - gap] > temp; j -= gap) {
        arr[j] = arr[j - gap];
      }
      arr[j] = temp;
    }
  }
  return arr;
}

Array.prototype.shell_sort = function () {
  if (arr.length <= 1) {
    return;
  }
  let i, j, temp, gap;
  let len = this.length;
  for (gap = len >> 1; gap > 0; gap >>= 1) {
    for (i = gap; i < len; i++) {
      for (j = 0; j < i; j += gap) {
        if (this[j] > this[i]) {
          this.splice(j, 0, this[i]);
          this.splice(i + 1, 1);
          break;
        }
      }
    }
  }
  return this;
};

// var arr = [13, 14, 94, 33, 82, 25, 59, 94, 65, 23, 45, 27, 73, 25, 39, 10];