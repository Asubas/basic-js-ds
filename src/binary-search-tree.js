const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {

  constructor(){
    this.rootTree = null;
  }

  root() {
    return this.rootTree;
  }

  add(data) {
   this.rootTree = addSomeList(this.rootTree,data);

   function addSomeList(node,data){
    if(!node){
      return new Node(data);
    }
    if(node.data === data){
      return node;
    }
    if(data < node.data){
      node.left = addSomeList(node.left,data);
    } else {
      node.right = addSomeList(node.right,data);
    }

    return node;

   }
  }

  has(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  find(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  remove(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  min() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  max() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
}

module.exports = {
  BinarySearchTree
};