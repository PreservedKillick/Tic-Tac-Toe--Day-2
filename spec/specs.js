beforeEach(function() {
  Board.spaces = [];
});

describe('Player', function() {
	describe('initialize', function () {
		it('sets up a player instance', function() {
			var testPlayer = Object.create(Player);
			Player.isPrototypeOf(testPlayer).should.equal(true);
		});
		it('assigns the first player X and the second O', function() {
			var testPlayer = Object.create(Player);
			testPlayer = testPlayer.initialize('X')
			testPlayer.symbol.should.equal('X');
		});
	});
});

describe('Space', function() {
	describe('initialize', function() {
		it('creates a space with an x and y coordinate', function() {
			var testSpace = Space.initialize(1,2);
			testSpace.xCoordinate.should.equal(1);
			testSpace.yCoordinate.should.equal(2);
		});
		it('creates a space object', function() {
			var testSpace = Object.create(Space);
			Space.isPrototypeOf(testSpace).should.equal(true);
		});
	});
	describe('markBy', function() {
		it('determines if space x, y has been marked by PlayerX or PlayerO', function() {
			var testPlayer = Player.initialize('X')
			var testSpace = Object.create(Space)
			testSpace.markBy(testPlayer)
			testSpace.markedBy.should.equal('X')	
		});
	});
});

describe('Board', function() {
	describe('initialize', function() {
		it('sets up a Board object of 9 spaces', function() {
			var testBoard = Object.create(Board);
			testBoard.createSpaces();
			testBoard.spaces.length.should.equal(9);
		});
		it('creates a Board Object', function() {
			var testBoard = Object.create(Board);
			Board.isPrototypeOf(testBoard).should.equal(true);
		});
	});
	describe('winChecker', function() {
		it('looks for rows of three in the spaces array', function() {
			var testBoard = Object.create(Board)
			testBoard.initialize()
			testBoard.spaces[0].markedBy = 'X'
			testBoard.spaces[1].markedBy = 'X'
			testBoard.spaces[2].markedBy = 'X'
			testBoard.winChecker().should.equal(true);
		});
	});
});
describe('Game', function() {
	describe('initialize', function() {
		it('sets up a game with 2 players and a board', function() {
			var testGame = Object.create(Game);
			testGame.initialize();
			testGame.player1.symbol.should.equal('X');
			testGame.newBoard.spaces.length.should.equal(9)
		});
	});
	describe('move', function() {
		it("knows whose turn it is", function() {
			var testGame = Object.create(Game);
			testGame.initialize();
			testGame.move(4).should.equal('O');
		})
	})
});
