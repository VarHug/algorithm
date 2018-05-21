/**
 * 单纯形算法
 * @param {num[][]} matrix 单纯形表(默认检验数行为最底行,B为最右列)
 * @returns {num}
 */
function simplex(matrix) {
  const INT_MAX = -1 >>> 1, INT_MIN = 1 << 31;
  let m = matrix.length, n = matrix[0].length, x = 0, y = 0, maxc = INT_MIN, minb = INT_MAX, xe = [], xl = [], res;
  if (m < 1 || n < 1) return;
  (function _init(matrix) {
    matrix[m - 1].forEach((item, index) => {
      if (item && index < n - 1)
        xe.push(index);
      else
        xl.push(index);
    });
  })(matrix);
  while (1) {
    _findC(matrix);
    if (maxc <= 0) {
      if (_check(matrix))
        res = '有无穷多解';
      else
        res = matrix[m - 1][n - 1];
      break;
    }
    _findB(matrix);
    if (minb === INT_MAX) {
      res = '无界解';
      break;
    }
    _pivot();
    _transformation(matrix);
  }
  return res;

  // 在非轴元素中寻找最大的C
  function _findC(matrix) {
    maxc = INT_MIN;
    matrix[m - 1].forEach((item, index) => {
      if (item > maxc && index < n - 1) {
        maxc = matrix[m - 1][index];
        y = index;
      }
    });
  }
  // 计算minb
  function _findB(matrix) {
    minb = INT_MAX;
    let tmp;
    for (let i = 0; i < m - 1; i++) {
      if (matrix[i][y] > 0) {
        tmp = matrix[i][n - 1] / matrix[i][y];
        if (tmp < minb) {
          minb = tmp;
          x = i;
        }
      }
    }
  }
  // 转轴
  function _pivot(matrix) {
    xe[y] = [xl[x], xl[x] = xe[y]][0];
  }
  // 行变换
  function _transformation(matrix) {
    let divisor = matrix[x][y];
    // 主行归一化
    for (let i = 0; i < n; i++) {
      matrix[x][i] /= divisor;
    }
    // 高斯行变换
    for (let i = 0; i < m; i++) {
      if (i === x) continue;
      if (matrix[i][y] !== 0) {
        let multiplier = matrix[i][y];
        for (let j = 0; j < n; j++) {
          matrix[i][j] = matrix[i][j] - multiplier * matrix[x][j];
        }
      }
    }
  }
  // 检验是否有无穷多解
  function _check(matrix) {
    for (let i = 0; i < xe.length; i++) {
      if (!matrix[m - 1][xe[i]]) return true;
    }
    return false;
  }
}

// minz = -x1 - x2
// s.t. = {
    // 2x1 +  x2 + x3 = 12
    //  x1 + 2x2 + x4 = 9
    // xi >= 0 (i = 1, 2, 3, 4)
// }
// 拥有唯一解-7
var demo = [
  [2, 1, 1, 0, 12],
  [1, 2, 0, 1, 9],
  [1, 1, 0, 0, 0]
]; 

// maxz = x1 + 14x2 + 6x3
// s.t. = {
    // x1 + x2 + x3 + x4 = 4
    // x3 + x6 = 3
    // 3x2 + x3 + x7 = 6
    // xi >= 0 (i = 1, 2, 3, 4, 5, 6, 7) 
// }
// 拥有唯一解32
var demo = [
  [1, 1, 1, 1, 0, 0, 0, 4],
  [1, 0, 0, 0, 1, 0, 0, 2],
  [0, 0, 1, 0, 0, 1, 0, 3],
  [0, 3, 1, 0, 0, 0, 1, 6],
  [1, 14, 6, 0, 0, 0, 0, 0]
];

// maxz = x1 +x 2
// s.t. = {
    // x1 - x2 + x3 = 1
    // -3x1 + 2x2 + x4 = 6
    // xi >= 0 (i = 1, 2, 3, 4)
//}
// 无界解
var demo = [
  [1, -1, 1, 0, 1],
  [-3, 2, 0, 1, 6],
  [1, 1, 0, 0, 0]
];

// maxz = 50x1 + 50x2
// s.t. = {
    // x1 + x2 + x3 = 300
    // 2x1 + x2 + x4 = 400
    // x2 + x5 = 250
    // xi >= 0 (i = 1, 2, 3, 4, 5)
//} 无穷多解
var demo = [
  [1, 1, 1, 0, 0, 300],
  [2, 1, 0, 1, 0, 400],
  [0, 1, 0, 0, 1, 250],
  [50, 50, 0, 0, 0, 0]
];