var Player = {
	initialize: function(symbol) {
		// this.players = [];
		var player = Object.create(Player)
		player.symbol = symbol
	  // this.players.push(player)
	  return player
	}
}

var Space = {
	initialize: function(x, y) {
		var space = Object.create(Space)
		space.xCoordinate = x;
		space.yCoordinate = y;
		return space
	},
	markBy: function(player) {
		var markedBy 
		if (player.symbol === 'X') {
			this.markedBy = 'X'
		} else {
			this.markedBy = 'O'
		}
	}
}

var Board = {
	spaces: [],
	initialize: function() {
		var board = Object.create(Board)
		this.createSpaces()

		return board
	},
	createSpaces: function() {
		for (var x = 1; x <= 3; x++) {
			for (var y = 1; y <=3; y++) {
				Board.spaces.push(Space.initialize(x, y))
			}
		}
	},
  winChecker: function() {
  	this.markedSpaces = [];
  	for (var i = 0; i < this.spaces.length; i++) {
      this.markedSpaces.push(this.spaces[i].markedBy);
    }
    if ((this.markedSpaces[0] === this.markedSpaces[1] && this.markedSpaces[2] === this.markedSpaces[1])
        && (this.markedSpaces[0] !== undefined)) {
    	return true;
    } else {
    	return false
    }
  }
}
var Game = {
	initialize: function() {
		var newBoard = Object.create(Board)
		this.newBoard = newBoard.initialize()
		var player1 = Object.create(Player)
		this.player1 = player1.initialize('X')
    var player2 = Object.create(Player)
    this.player2 = player2.initialize('O')
    //this.move = 1;
	},

	move: function(i) {
		// var moveCounter = [];
		// for (var i = 1; i <= 9; i++) {
		// 	moveCounter.push(i);
		// }
    if ((moveCounter[i]) % 2 !== 0) {
			return 'X' 
		} else {
			return 'O';
		}
	}
}

