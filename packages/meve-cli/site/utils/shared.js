import Vue from 'vue'

export const isArray = val => Array.isArray(val)

export function getMenuName(path) {
  return path.slice(path.lastIndexOf('/') + 1)
}

export function getLang(path) {
  return path.slice(1, path.lastIndexOf('/'))
}

export function buildTreeRelation(tree, parent, seen) {
  const flatTree = []

  tree.forEach((node) => {
    seen ? seen.push(node) : flatTree.push(node)
    node.parent = parent
    node.leaf = false

    if (isArray(node.children)) {
      buildTreeRelation(node.children, node, flatTree)
    } else {
      node.leaf = true
    }
  })

  return {
    tree,
    flatTree
  }
}

export function findNodeRelationChain(node) {
  const chain = []
  let parent = node.parent

  while (parent) {
    chain.unshift(parent)
    parent = parent.parent
  }

  return chain
}

export function nextTick() {
  return new Promise((resolve) => Vue.nextTick(resolve))
}

export function doubleRaf() {
  return new Promise((resolve) => {
    window.requestAnimationFrame(() => {
      window.requestAnimationFrame(resolve)
    })
  })
}

