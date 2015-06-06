(function (angular){
  'use strict';
angular.module('roadmapApp', [])
  .controller('RoadmapController', ['mapMaker', '$scope', function (mapMaker, $scope){
    var self = this;
    self.selected = [];
    self.rewards = {};
    self.rewards.total = 0;

    self.map = mapMaker.getMap();

    self.hello = function (item) {
      console.log('hello', item);
    }

    self.toggle = function (item) {
      item.selected = !item.selected;
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
      console.log('mod reward with', item, 'and add?', add);
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
      console.log('self.rewards', self.rewards)
    }

  }])

  .directive('rewardItem', function () {
    return {
    restrict: 'E',
      // templateUrl: 'reward-item.html'
      scope: {
        item: '=item'
      },
      template:'<div class="reward-item" ng-class="{selected: item.selected}"> <h3> {{item.value}} <span ng-hide="hidden"> {{hidden}} {{display}} </span> </h3> <h4> {{item.cost}}&diams; </h4> </div>',
      link: function (scope) {
        if (scope.item.type == 'knownHero' || scope.item.type == 'knownFairy') {
          scope.hidden = true;
        }
        scope.display = scope.item.type
          // insert a space before all caps
          .replace(/([A-Z])/g, ' $1')
          // uppercase the first character
          .replace(/^./, function(str){ return str.toUpperCase(); })
      }
    }
   })

  .factory('mapMaker', [function(){
    var map = {};
    map.section1 = [
      {
        id: 1,
        type: 'gold',
        value: 15,
        cost: 7
      },
      {
        id: 2,
        type: 'gems',
        value: 50,
        cost: 15
    }]
    map.section2 = [
      {
        id: 3,
        type: 'removal',
        value: '4*',
        cost: 15
      },
      {
        id: 4,
        type: 'gold',
        value: 25,
        cost: 20
      },
      {
        id: 6,
        type: 'swords',
        value: 15,
        cost: 25
      }
    ]
    map.section3 = [
      {
        id: 7,
        type: 'rune',
        value: '4*',
        cost: 15
      },
      {
        id: 8,
        type: 'summon',
        value: 2,
        cost: 20
      }
    ]
    map.section4 = [
      {
        id: 9,
        type: 'gold',
        value: 40,
        cost: 30
      },
      {
        id: 10,
        type: 'rune',
        value: '4*',
        cost: 45
      },
      {
        id: 11,
        type: 'gold',
        value: 32,
        cost: 40
      },
      {
        id: 12,
        type: 'knownHero',
        value: '4* Nurse',
        cost: 30
      },
      {
        id: 13,
        type: 'gold',
        value: 40,
        cost: 45
      },
      {
        id: 14,
        type: 'swords',
        value: 25,
        cost: 70
      },
      {
        id: 15,
        type: 'rune',
        value: '5*',
        cost: 80
      },
      {
        id: 16,
        type: 'gold',
        value: 100,
        cost: 88
      },
      {
        id: 17,
        type: 'fairyTicket',
        value: '2*',
        cost: 65
      }
    ]
    map.section5 = [
      {
        id: 18,
        type: 'gems',
        value: 25,
        cost: 70
      },
      {
        id: 19,
        type: 'summon',
        value: 2,
        cost: 30
      },
      {
        id: 20,
        type: 'removal',
        value: '4*',
        cost: 35
      },
      {
        id: 21,
        type: 'gold',
        value: 50,
        cost: 35
      },
      {
        id: 22,
        type: 'rune',
        value: '4*',
        cost: 55
      },
      {
        id: 23,
        type: 'gold',
        value: 52,
        cost: 65
      },
      {
        id: 24,
        type: 'heroTicket',
        value: '4*',
        cost: 75
      },
      {
        id: 25,
        type: 'gold',
        value: 60,
        cost: 105
      },
      {
        id: 26,
        type: 'gems',
        value: 80,
        cost: 85
      },
      {
        id: 27,
        type: 'gold',
        value: 80,
        cost: 105
      },
      {
        id: 28,
        type: 'removal',
        value: '6*',
        cost: 75
      },
      {
        id: 29,
        type: 'gold',
        value: 90,
        cost: 105
      },
      {
        id: 30,
        type: 'knownHero',
        value: '6* Mimi',
        cost: 225
      }
    ]
    map.section6 = [
      {
        id: 31,
        type: 'gold',
        value: 35,
        cost: 20
      },
      {
        id: 32,
        type: 'gems',
        value: 60,
        cost: 35
      },
      {
        id: 33,
        type: 'gold',
        value: 40,
        cost: 45
      },
      {
        id: 34,
        type: 'swords',
        value: 20,
        cost: 60
      },
      {
        id: 35,
        type: 'gold',
        value: 47,
        cost: 55
      },
      {
        id: 36,
        type: 'knownFairy',
        value: '3* Fire',
        cost: 95
      },
      {
        id: 37,
        type: 'gold',
        value: 50,
        cost: 75
      },
      {
        id: 38,
        type: 'knownHero',
        value: '4* Mina',
        cost: 65
      },
      {
        id: 39,
        type: 'removal',
        value: '5*',
        cost: 85
      },
      {
        id: 40,
        type: 'gold',
        value: 80,
        cost: 90
      },
      {
        id: 41,
        type: 'rune',
        value: '5*',
        cost: 105
      },
      {
        id: 42,
        type: 'knownHero',
        value: '5* Rika',
        cost: 85
      }
    ]
    map.section7 = [
      {
        id: 43,
        type: 'removal',
        value: '5*',
        cost: 45
      },
      {
        id: 44,
        type: 'heroTicket',
        value: '4*',
        cost: 35
      },
      {
        id: 45,
        type: 'gold',
        value: 42,
        cost: 35
      },
      {
        id: 46,
        type: 'gold',
        value: 55,
        cost: 45
      },
      {
        id: 47,
        type: 'gems',
        value: 50,
        cost: 55
      },
      {
        id: 48,
        type: 'gold',
        value: 49,
        cost: 65
      },
      {
        id: 49,
        type: 'rune',
        value: '5*',
        cost: 105
      },
      {
        id: 50,
        type: 'gold',
        value: 54,
        cost: 95
      },
      {
        id: 51,
        type: 'gems',
        value: 80,
        cost: 95
      },
      {
        id: 52,
        type: 'gold',
        value: 120,
        cost: 95
      },
      {
        id: 53,
        type: 'knownFairy',
        value: '3* Support',
        cost: 105
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
