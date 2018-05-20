/**
 * 单纯形算法
 * @param {num[][]} matrix 单纯形表(默认C行为最底行,B为最右列)
 * @returns {num}
 */
function simplex(matrix) {
  const INT_MAX = -1 >>> 1;
  const INT_MIN = 1 << 31;

  let m = matrix.length;
  let n = matrix[0].length;
  let x = 0;
  let y = 0;
  let maxc = INT_MIN;
  let minb = INT_MAX;

  if (m < 1 || n < 1) {
    return;
  }

  while (1) {
    findC(matrix);
    if (maxc <= 0) {
      return matrix[m - 1][n - 1];
    }
    check(matrix);
    transformation(matrix);
  }
  
  // 在非轴元素中寻找最大的C
  function findC(matrix) {
    maxc = INT_MIN;
    for (let i = 0; i < n - 1; i++) {
      if (matrix[m - 1][i] > maxc) {
        maxc = matrix[m - 1][i];
        y = i;
      }
    }
  }

  // 计算检验数
  function check(matrix) {
    minb = INT_MAX;
    let tmp;
    for (let i = 0; i < m - 1; i++) {
      if (matrix[i][y] !== 0) {
        tmp = matrix[i][n - 1] / matrix[i][y];
        if (tmp < minb) {
          minb = tmp;
          x = i;
        }
      }
    }
  }
  // 行变换
  function transformation(matrix) {
    let divisor = matrix[x][y];
    // 主行归一化
    for (let i = 0; i < n; i++) {
      matrix[x][i] /= divisor;
    }
    // 高斯行变换
    for (let i = 0; i < m; i++) {
      if (i === x) {
        continue;
      }
      if (matrix[i][y] !== 0) {
        let multiplier = matrix[i][y];
        for (let j = 0; j < n; j++) {
          matrix[i][j] = matrix[i][j] - multiplier * matrix[x][j];
        }
      }
    }
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