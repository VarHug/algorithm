class ListNode {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
  }
}

/**
 * 广度优先搜索
 * @param {ListNode} node
 */
function bfs(node) {
  if (node == null || node.value === null) {
    return null
  }
  let queue = []
  queue.push(node)
  while (queue.length) {
    let rnode = queue.shift()
    console.log(rnode.value)
    if (rnode.left !== null) {
      queue.push(rnode.left)
    }
    if (rnode.right !== null) {
      queue.push(rnode.right)
    }
  }
}
