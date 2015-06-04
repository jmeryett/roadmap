(function (angular){
  'use strict';
angular.module('roadmapApp', [])
  .controller('RoadmapController', ['mapMaker', function (mapMaker){
    var self = this;
    self.selected = [];

    self.map = mapMaker.getMap();
    console.log('map!', self.map);

    self.hello = function (item) {
      console.log('hello', item);
    }

    self.toggle = function (item) {
      item.selected = !item.selected;
      console.log('toggle', item);
      var found;
      self.selected.forEach(function (sel) {
        if (sel.id == item.id) {
          found = item;
        }
      });
      if (!found) {
        self.selected.push(item);
      } else {
        var index = self.selected.indexOf(item);
        console.log('index', index)
        if (index >= 0) {
          self.selected.splice(index, 1);
        }
      }
      // console.log('found', found);
    }

  }])

  .directive('rewardItem', function () {
    return {
    restrict: 'E',
      // templateUrl: 'reward-item.html'
      scope: {
        item: '=item'
      },
      template:'<div class="reward-item" ng-class="{selected: item.selected}"> <h3> {{item.value}} {{item.type}} </h3> <h4> {{item.cost}}&diams; </h4> </div>'
    }
   })

  .factory('mapMaker', [function(){
    var map = {};
    map.section1 = [
      {
        id: 1,
        type: 'gold',
        value: '15',
        cost: '7'
      },
      {
        id: 2,
        type: 'gems',
        value: '50',
        cost: '15'
    }]
    map.section2 = [
      {
        id: 3,
        type: 'removal',
        value: '4',
        cost: '15'
      },
      {
        id: 4,
        type: 'gold',
        value: '25',
        cost: '15'
      },
      {
        id: 5,
        type: 'gold',
        value: '4',
        cost: '15'
      },
      {
        id: 6,
        type: 'swords',
        value: '15',
        cost: '25'
      }
    ]
    function getMap () {
      return map;
    }
    return {
      getMap: getMap
    };
  }])

})(window.angular)
