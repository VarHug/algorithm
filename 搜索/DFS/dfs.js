class ListNode {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
  }
}

/**
 * 深度优先搜索
 * @param {ListNode} node
 */
function dfs(node) {
  if (node == null || node.value === null) {
    return null
  }
  let stack = []
  stack.push(node)
  while (stack.length) {
    let rnode = stack.pop()
    console.log(rnode.value)
    if (rnode.right !== null) {
      stack.push(rnode.right)
    }
    if (rnode.left !== null) {
      stack.push(rnode.left)
    }
  }
}
