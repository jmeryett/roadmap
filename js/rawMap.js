angular.module('roadmapApp')
.factory('rawMap', [function(){
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
        value: 50,
        cost: 30
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

    var otherMap = [
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
        type: 'knownHero',
        value: '4* Nurse',
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
        type: 'swords',
        value: 25,
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
        type: 'fairyTicket',
        value: '2*',
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
        value: '6* Mimi',
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
        type: 'knownFairy',
        value: '3* Fire',
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
        value: '4* Mina',
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
        type: 'knownHero',
        value: '5* Rika',
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
        value: '3* Support',
        cost: 105,
        section: 7
      }
    ]

    function getMap () {
      return otherMap;
    }
    return {
      getMap: getMap
    };
  }])