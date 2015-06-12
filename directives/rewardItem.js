angular.module('roadmapApp')
.directive('rewardItem', function () {
    return {
    restrict: 'E',
      // templateUrl: 'reward-item.html'
      scope: {
        item: '=item'
      },
      template:'<button class="reward-item" ng-class="{selected: item.selected}"> <h3> {{item.value}} <span ng-hide="hidden"> {{display}} </span> </h3> <h4> {{item.cost}}&diams; </h4> </button>',
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