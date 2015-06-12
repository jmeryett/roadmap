(function (angular){
  'use strict';
angular.module('roadmapApp', [])
  .controller('RoadmapController', ['mapMaker', '$scope', '_', function (mapMaker, $scope, _){
    var self = this;
    self.selected = [];
    self.rewards = {};
    self.rewards.total = 0;
    self.cascade = true;

    self.map = mapMaker.getMap();
    self.tree = mapMaker.getTree();

    self.toggle = function (item) {
      console.log('~[*.*]~ self.tree', angular.copy(self.tree));
      console.log('~[*.*]~ item', angular.copy(item));
      item.selected = !item.selected;

      if (item.selected && self.cascade) {
        //toggle on parents of this one if this on is now on
        console.log('turn on all the parents');

        // var node = _.find(self.tree, {data: {id: item.id}});
        // var node = _.filter(self.tree, function (filterItem) {console.log('filterItem', filterItem); return filterItem.data.id == item.id})

        var mapNode = _.find(self.map, {id: item.id});
      }

      var found;
      self.selected.forEach(function (sel) {
        if (sel.id == item.id) {
          found = item;
        }
      });
      if (!found) {
        self.selected.push(item);
        self.calcuateReward(item, true);
      } else {
        var index = self.selected.indexOf(item);
        if (index >= 0) {
          self.selected.splice(index, 1);
        }
        self.calcuateReward(item, false);
      }
    }

    self.calcuateReward = function (item, add) {
      if (add) {
          self.rewards[item.type] = (self.rewards[item.type]) ? (self.rewards[item.type] + item.value) : item.value;
          self.rewards.total += item.cost;
      } else {
        self.rewards.total -= item.cost;
        if (item.type == 'gold' || item.type == 'gems' || item.type == 'swords' || item.type == 'summon') {
          self.rewards[item.type] -= item.value;
        } else {
          var result = self.rewards[item.type].replace(item.value, '');
          self.rewards[item.type] = result;
        }
      }
    }

  }])

})(window.angular)
