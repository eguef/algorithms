const breadthFirstTraversal = (queue, array) => {
  if (!queue || !queue.length) return array

  while(queue.length) {
    const node = queue.shift()
    array.push(node.value)
    node.left && queue.push( node.left)
    node.right && queue.push( node.right)
  }
  return array
}