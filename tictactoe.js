//PROVIDE SOME INTRO INSTRUCTIONS
var stdinIntro = process.stdin;
var stdoutIntro = process.stdout;
stdoutIntro.write("The TicTacToe Board Looks Like This:"+"\n");
stdoutIntro.write("A1 A2 A3"+"\n"+"B1 B2 B3"+"\n"+"C1 C2 C3"+"\n");
stdoutIntro.write("When it's your turn to play, type the position you want - e.g. - 'B2'"+"\n");

//PLAYER O FUNCTIONALITY
function playerOPosition(board) {
	//Instantiate variables and print the board to the user
	var stdinO = process.stdin;
	var stdoutO = process.stdout;
	var board = board;
	var fullBoardCount = 0;
	stdoutO.write("Current Board:"+"\n");
	
	for(var i=0; i<board.length; i++) {
		if(3==i || 6==i) {
			stdoutO.write("\n"+board[i]+" ");
		} else if (8==i) {
			stdoutO.write(board[i]+"\n");
		} else {
			stdoutO.write(board[i]+" ");
		}
	}
	//Check it there's a winner
	for(var i=0; i<board.length; i++) {
		if(0==i || 1==i || 2==i) {
			if((board[i] == board[i+3] && board[i] == board[i+6]) || (board[0] == board[1] && board[0] == board[2]) || (board[0] == board[4] && board[0] == board[8])) {
				stdoutO.write('Player X Wins!'+"\n");
				playTicTacToeAgain();
				return;
			}
		}
		if(3==i) {
			if(board[i] == board[i+1] && board[i] == board[i+2]) {
				stdoutO.write('Player X Wins!'+"\n");
				playTicTacToeAgain();
				return;
			}
		}
		if(4==i) {
			if(board[i] == board[i-2] && board[i] == board[i+2]) {
				stdoutO.write('Player X Wins!'+"\n");
				stdoutO.write('found your problem');
				playTicTacToeAgain();
				return;
			}
		}
		if(6==i) {
			if(board[i] == board[i+1] && board[i] == board[i+2]) {
				stdoutO.write('Player X Wins!'+"\n");
				playTicTacToeAgain();
				return;
			}
		}
		//Check if there was a tie
		if(board[i] == 'XX' || board[i] == 'OO') {
			fullBoardCount = fullBoardCount + 1;
		}
		if(fullBoardCount == 9) {
			stdoutO.write('There was a tie.'+"\n");
			playTicTacToeAgain();
			return;
		}
	}
	//Check if there was a tie
	
	//Accept Player O's move
	stdinO.resume();
	stdoutO.write("Player O: What position would you like? ");
	stdinO.once('data', function (data) {
		data = data.toString().trim();
		for(var i=0; i<=(board.length + 1); i++) {
			if(data == board[i]) {
				position = i;
				board[position] = 'OO'
				playerXPosition(board);
				return;
			} else if(i == (board.length + 1)) {
				stdoutO.write("Invalid position, please try again."+"\n");
				playerOPosition(board);
			}
		}
	});
}

//PLAYER X FUNCTIONALITY
function playerXPosition(board) {
	//Instantiate variables and print the board to the user
	var stdinX = process.stdin;
	var stdoutX = process.stdout;
	var board = board;
	var fullBoardCount = 0;
	stdoutX.write("Current Board:"+"\n");
	for(var i=0; i<board.length; i++) {
		if(3==i || 6==i) {
			stdoutX.write("\n"+board[i]+" ");
		} else if (8==i) {
			stdoutX.write(board[i]+"\n");
		} else {
			stdoutX.write(board[i]+" ");
		}
	}
	//Check it there's a winner
	for(var i=0; i<board.length; i++) {
		if(0==i || 1==i || 2==i) {
			if((board[i] == board[i+3] && board[i] == board[i+6]) || (board[0] == board[1] && board[0] == board[2]) || (board[0] == board[4] && board[0] == board[8])) {
				stdoutX.write('Player O Wins!'+"\n");
				playTicTacToeAgain();
				return;
			}
		}
		if(3==i) {
			if(board[i] == board[i+1] && board[i] == board[i+2]) {
				stdoutX.write('Player O Wins!'+"\n");
				playTicTacToeAgain();
				return;
			}
		}
		if(4==i) {
			if(board[i] == board[i-2] && board[i] == board[i+2]) {
				stdoutX.write('Player O Wins!'+"\n");
				playTicTacToeAgain();
				return;
			}
		}
		if(6==i) {
			if(board[i] == board[i+1] && board[i] == board[i+2]) {
				stdoutX.write('Player O Wins!'+"\n");
				playTicTacToeAgain();
				return;
			}
		}
		//Check if there was a tie
		if(board[i] == 'XX' || board[i] == 'OO') {
			fullBoardCount = fullBoardCount + 1;
		}
		if(fullBoardCount == 9) {
			stdoutX.write('There was a tie.'+"\n");
			playTicTacToeAgain();
			return;
		}
	}

	//Accept Player X's move
	stdinX.resume();
	stdoutX.write("Player X: What position would you like? ");
	stdinX.once('data', function (data) {
		data = data.toString().trim();
		for(var i=0; i<=(board.length + 1); i++) {
			if(data == board[i]) {
				position = i;
				board[position] = 'XX'
				playerOPosition(board);
				return;
			} else if(i == (board.length + 1)) {
				stdoutX.write("Invalid position, please try again."+"\n");
				playerXPosition(board);
			}
		}
	});
}

//ASK USER IF THEY WANT TO BEGIN PLAYING AND REACT ACCORDINGLY
function tictactoe(flag) {
	var board = ['A1', 'A2', 'A3', 'B1', 'B2', 'B3', 'C1', 'C2', 'C3'];
	var stdin = process.stdin;
	var stdout = process.stdout;
	stdin.resume();
	if(flag) {
		stdout.write("Ready? (Yes, No): ");
		stdin.once('data', function (data) {
			data = data.toString().trim();
			if(data == 'Yes' || data == 'yes'){
				playerXPosition(board);
			} else if(data == 'No' || data == 'no') {
				stdout.write("Hurry up. I'm tired of waiting."+"\n");
				tictactoe(true);	
			} else {
				stdout.write("I'm not fluent in your language yet, so please just say Yes or No."+"\n");
				tictactoe(true);
			}
		});
	} else {
		playerXPosition(board);
	}
}

//A GAME JUST ENDED, FUNCTIONALITY THAT ALLOWS USERS TO PLAY AGAIN
function playTicTacToeAgain() {
	var stdin = process.stdin;
	var stdout = process.stdout;
	stdin.resume();
	stdout.write("Want to play again? (Yes, No): ");
	stdin.once('data', function (data) {
		data = data.toString().trim();
		if(data == 'Yes' || data == 'yes'){
			tictactoe(false);
		} else if(data == 'No' || data == 'no'){
			stdout.write("Thanks for playing."+"\n");
			process.exit()
		} else {
			stdout.write("I'm not fluent in your language yet, so please just say Yes or No."+"\n");
			playTicTacToeAgain();
		}
	});
}


tictactoe(true);