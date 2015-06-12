angular.module('roadmapApp')
.factory('mapMaker', ['rawMap', 'BinaryNode', function (rawMap, BinaryNode){
  var _rawMap = rawMap.getMap();
  var bn = BinaryNode;
  var tree;

  function addNode (item, tree) {
    var newNode = bn.newNode(item, tree[tree.length-1]);
    tree[tree.length-1].left = newNode;
    tree.push(newNode);
  }

  function addBranching (section, branchNode, tree) {
    var filter = _.filter(tree, {section: section});
    var node = bn.newNode(filter[0], branchNode);
    branchNode.right = node;
    tree.push(node);
    filter.shift();
    return {section: filter, tree: tree};
  }

  function makeTree (_rawMap) {
    var raw = angular.copy(_rawMap);
    var tree = [];

    //add the root
    tree.push(bn.newNode(raw.shift()));

    _.filter(raw, {section: 1}).forEach(function (item){addNode(item, tree)});
    console.log('tree',tree[0]);

    // save the ref to where section1 branches to 2 and 3
    var section1Branch = tree[tree.length-1];

    _.filter(raw, {section: 2}).forEach(function (item){addNode(item, tree)});

    // save the ref to where section1 branches to 2 and 3
    var section2Branch = tree[tree.length-1];

    _.filter(raw, {section: 4}).forEach(function (item){addNode(item, tree)});

    var items = addBranching(5, section2Branch, raw);
    var section5 = items.section;
    tree = items.tree;
    section5.forEach(function (item){addNode(item, tree)});

    var items = addBranching(3, section1Branch, raw);
    var section3 = items.section;
    tree = items.tree;
    section3.forEach(function (item){addNode(item, tree)});

    // save the ref to where section3 branches to 6 and 7
    var section3Branch = tree[tree.length-1];

    _.filter(raw, {section: 6}).forEach(function (item){addNode(item, tree)});


    var items = addBranching(7, section3Branch, raw);
    var section7 = items.section;
    tree = items.tree;
    section7.forEach(function (item){addNode(item, tree)});

    return tree;
  }

  tree = makeTree(_rawMap);

  function getTree () {
    return tree
  }

  function getMap () {
    return _rawMap;
  };

  return {
    getMap: getMap,
    getTree: getTree
  };
}])