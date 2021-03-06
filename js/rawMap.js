angular.module('roadmapApp')
.factory('rawMap', [function(){

    var map = [
      {
        id: 1,
        type: 'gold',
        value: 15,
        cost: 7,
        section: 1
      },
      {
        id: 2,
        type: 'gems',
        value: 50,
        cost: 15,
        section: 1
      },
      {
        id: 3,
        type: 'removal',
        value: '4*',
        cost: 15,
        section: 2
      },
      {
        id: 4,
        type: 'gold',
        value: 25,
        cost: 20,
        section: 2
      },
      {
        id: 6,
        type: 'swords',
        value: 15,
        cost: 25,
        section: 2
      },
      {
        id: 7,
        type: 'rune',
        value: '4*',
        cost: 15,
        section: 3
      },
      {
        id: 8,
        type: 'summon',
        value: 2,
        cost: 20,
        section: 3
      },
      {
        id: 9,
        type: 'gold',
        value: 40,
        cost: 30,
        section: 4
      },
      {
        id: 10,
        type: 'rune',
        value: '4*',
        cost: 45,
        section: 4
      },
      {
        id: 11,
        type: 'gold',
        value: 32,
        cost: 40,
        section: 4
      },
      {
        id: 12,
        type: 'swords',
        value: 25,
        cost: 30,
        section: 4
      },
      {
        id: 13,
        type: 'gold',
        value: 40,
        cost: 45,
        section: 4
      },
      {
        id: 14,
        type: 'knownFairy',
        value: '2* Support Fairy',
        cost: 70,
        section: 4
      },
      {
        id: 15,
        type: 'rune',
        value: '5*',
        cost: 80,
        section: 4
      },
      {
        id: 16,
        type: 'gold',
        value: 100,
        cost: 88,
        section: 4
      },
      {
        id: 17,
        type: 'knownHero',
        value: 'K.F.a.A.U.',
        cost: 65,
        section: 4
      },
      {
        id: 18,
        type: 'gems',
        value: 50,
        cost: 30,
        section: 5
      },
      {
        id: 19,
        type: 'summon',
        value: 2,
        cost: 30,
        section: 5
      },
      {
        id: 20,
        type: 'removal',
        value: '4*',
        cost: 35,
        section: 5
      },
      {
        id: 21,
        type: 'gold',
        value: 50,
        cost: 35,
        section: 5
      },
      {
        id: 22,
        type: 'rune',
        value: '4*',
        cost: 55,
        section: 5
      },
      {
        id: 23,
        type: 'gold',
        value: 52,
        cost: 65,
        section: 5
      },
      {
        id: 24,
        type: 'heroTicket',
        value: '4*',
        cost: 75,
        section: 5
      },
      {
        id: 25,
        type: 'gold',
        value: 60,
        cost: 105,
        section: 5
      },
      {
        id: 26,
        type: 'gems',
        value: 80,
        cost: 85,
        section: 5
      },
      {
        id: 27,
        type: 'gold',
        value: 80,
        cost: 105,
        section: 5
      },
      {
        id: 28,
        type: 'removal',
        value: '6*',
        cost: 75,
        section: 5
      },
      {
        id: 29,
        type: 'gold',
        value: 90,
        cost: 105,
        section: 5
      },
      {
        id: 30,
        type: 'knownHero',
        value: '6* Nana',
        cost: 225,
        section: 5
      },
      {
        id: 31,
        type: 'gold',
        value: 35,
        cost: 20,
        section: 6
      },
      {
        id: 32,
        type: 'gems',
        value: 60,
        cost: 35,
        section: 6
      },
      {
        id: 33,
        type: 'gold',
        value: 40,
        cost: 45,
        section: 6
      },
      {
        id: 34,
        type: 'swords',
        value: 20,
        cost: 60,
        section: 6
      },
      {
        id: 35,
        type: 'gold',
        value: 47,
        cost: 55,
        section: 6
      },
      {
        id: 36,
        type: 'fairyTicket',
        value: '3*',
        cost: 95,
        section: 6
      },
      {
        id: 37,
        type: 'gold',
        value: 50,
        cost: 75,
        section: 6
      },
      {
        id: 38,
        type: 'knownHero',
        value: '4* Kiki',
        cost: 65,
        section: 6
      },
      {
        id: 39,
        type: 'removal',
        value: '5*',
        cost: 85,
        section: 6
      },
      {
        id: 40,
        type: 'gold',
        value: 80,
        cost: 90,
        section: 6
      },
      {
        id: 41,
        type: 'rune',
        value: '5*',
        cost: 105,
        section: 6
      },
      {
        id: 42,
        type: 'heroTicket',
        value: '5*',
        cost: 85,
        section: 6
      },
      {
        id: 43,
        type: 'removal',
        value: '5*',
        cost: 45,
        section: 7
      },
      {
        id: 44,
        type: 'heroTicket',
        value: '4*',
        cost: 35,
        section: 7
      },
      {
        id: 45,
        type: 'gold',
        value: 42,
        cost: 35,
        section: 7
      },
      {
        id: 46,
        type: 'gold',
        value: 55,
        cost: 45,
        section: 7
      },
      {
        id: 47,
        type: 'gems',
        value: 50,
        cost: 55,
        section: 7
      },
      {
        id: 48,
        type: 'gold',
        value: 49,
        cost: 65,
        section: 7
      },
      {
        id: 49,
        type: 'rune',
        value: '5*',
        cost: 105,
        section: 7
      },
      {
        id: 50,
        type: 'gold',
        value: 54,
        cost: 95,
        section: 7
      },
      {
        id: 51,
        type: 'gems',
        value: 80,
        cost: 95,
        section: 7
      },
      {
        id: 52,
        type: 'gold',
        value: 120,
        cost: 95,
        section: 7
      },
      {
        id: 53,
        type: 'knownFairy',
        value: '3* Attack',
        cost: 105,
        section: 7
      }
    ]

    function getMap () {
      return map;
    }
    return {
      getMap: getMap
    };
  }])