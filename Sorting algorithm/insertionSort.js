/**
 * 插入排序(交换)
 * @param {num[]} arr 
 */
function insertionSort(arr) {
  if (arr.length <= 1) {
    return;
  }
  let i, j, temp;
  let len = arr.length;
  for (i = 1; i < len; i++) {
    temp = arr[i];
    for (j = i; j > 0 && arr[j - 1] > temp; j--) {
      arr[j] = arr[j - 1];
    }
    arr[j] = temp;
  }
  return arr;
}
// 利用内置函数还原实现‘插入’排序
Array.prototype.insertion_sort = function () {
  if (this.length <= 1) {
    return;
  }
  let i, j;
  let len = this.length;
  for (let i = 1; i < len; i++) {
    for (let j = 0; j < i; j++) {
      if (this[j] > this[i]) {
        this.splice(j, 0, this[i]);
        this.splice(i + 1, 1);
        break;
      }
    }
  }
  return this;
};