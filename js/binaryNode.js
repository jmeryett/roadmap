angular.module('roadmapApp')
.factory('BinaryNode', [function (){
  function newNode (data, parent) {
    var node = {};
    node.data = data;
    node.parent = parent;
    node.left = null;
    node.right = null;
    node.section = data.section
    return node;
  }
  return {
    newNode: newNode
  }
}])