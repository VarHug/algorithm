/**
 * @description 求数组的最大深度
 * @param {Array} list
 * @returns {Number}
 */
function maxDepth(list) {
  const queue = [...list];
  let depth = 0;
  while (queue.length) {
    for (let i = 0, len = queue.length; i < len; i++) {
      const elem = queue.shift();
      if (Array.isArray(elem)) {
        queue.push(...elem);
      }
    }
    depth++;
  }
  return depth;
}
