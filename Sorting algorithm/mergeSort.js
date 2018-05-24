/**
 * 归并排序（递归法：自顶向下归并）
 * @param {num[][]} input 
 */
function mergeSort(input) {
  if (input.length <= 1) {
    return;
  }
  let temp = new Array(input.length).fill(0);
  return mergeSortRecursive(input, temp, 0, input.length - 1);

  /**
   * sort and merge
   * @param {num[][]} arr 
   * @param {num[][]} temp 
   * @param {num} start 
   * @param {num} end 
   */
  function mergeSortRecursive(arr, temp, start, end) {
    // sort
    if (start >= end) {
      return;
    }
    let mid = ((end - start) >> 1) + start;
    let start1 = start, end1 = mid;
    let start2 = mid + 1, end2 = end;
    mergeSortRecursive(arr, temp, start1, end1);
    mergeSortRecursive(arr, temp, start2, end2);
    // merge
    let k = start;
    while (start1 <= end1 && start2 <= end2) {
      temp[k++] = arr[start1] < arr[start2] ? arr[start1++] : arr[start2++];
    }
    while (start1 <= end1) {
      temp[k++] = arr[start1++];
    }
    while (start2 <= end2) {
      temp[k++] = arr[start2++];
    }
    for (k = start; k <= end; k++) {
      arr[k] = temp[k];
    }
    return arr;
  }
}