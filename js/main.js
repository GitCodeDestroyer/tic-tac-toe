'use strict';

var turn = 1,
	win = false;

var forCheck = [0, 0, 0,
				0, 0, 0,
				0, 0, 0];

function playersDraw () {
	win = true;
	$('.turn').removeClass('pop');
	setTimeout(function() {
		$('.turn').addClass('pop');
		$('.turn').addClass('player-' + turn + '-win');
	}, 500);
	$('.turn-1')[0].innerHTML = 'Draw';
	$('.turn-2')[0].innerHTML = 'Draw';
}

function PlayerWin (turn) {
	win = true;
	$('.turn').removeClass('pop');
	setTimeout(function() {
		$('.turn').addClass('pop');
		$('.turn').addClass('player-' + turn + '-win');
	}, 500);
	$('.turn-1')[0].innerHTML = turn + ' Player Wins';
	$('.turn-2')[0].innerHTML = turn + ' Player Wins';
}

function check(data, turn) {
	if (turn == 2) {turn = 1;}
	else if (turn == 1) {turn = 2;}
	forCheck[data - 1] = turn;
	if (forCheck[0] == turn && forCheck[1] == turn && forCheck[2] == turn) {PlayerWin(turn);}
	else if (forCheck[3] == turn && forCheck[4] == turn && forCheck[5] == turn) {PlayerWin(turn);}
	else if (forCheck[6] == turn && forCheck[7] == turn && forCheck[8] == turn) {PlayerWin(turn);}
	else if (forCheck[0] == turn && forCheck[3] == turn && forCheck[6] == turn) {PlayerWin(turn);}
	else if (forCheck[1] == turn && forCheck[4] == turn && forCheck[7] == turn) {PlayerWin(turn);}
	else if (forCheck[2] == turn && forCheck[5] == turn && forCheck[8] == turn) {PlayerWin(turn);}
	else if (forCheck[0] == turn && forCheck[4] == turn && forCheck[8] == turn) {PlayerWin(turn);}
	else if (forCheck[2] == turn && forCheck[4] == turn && forCheck[6] == turn) {PlayerWin(turn);}
}

$('.tic-tac-toe .clickable').click(function() {
	if (win == false) {
		if (turn === 2 && $(this)[0].innerHTML == '') {
			$(this)[0].innerHTML = 'O';
			$('.tic-tac-toe').addClass('player-1');
			$('.tic-tac-toe').removeClass('player-2');
			$('.turn-1').addClass('pop');
			$('.turn-2').removeClass('pop');
			turn = 1;
		}
		else if (turn === 1 && $(this)[0].innerHTML == '') {
			$(this)[0].innerHTML = 'X';
			$('.tic-tac-toe').addClass('player-2');
			$('.tic-tac-toe').removeClass('player-1');
			$('.turn-2').addClass('pop');
			$('.turn-1').removeClass('pop');
			turn = 2;
		}
		check($(this).data('num'), turn);
		$(this).removeClass('clickable');
	}
	if ($('.tic-tac-toe .clickable').length == 0) {
		playersDraw();
	}
});

$('.nav .menu button').click(function() {
	$('.turn-2').removeClass('pop');
	$('.turn').removeClass('player-1-win');
	$('.turn').removeClass('player-2-win');
	$('.turn-1')[0].innerHTML = 'Your Turn';
	$('.turn-2')[0].innerHTML = 'Your Turn';
	turn = 1;
	win = false;
	forCheck = [0, 0, 0,
				0, 0, 0,
				0, 0, 0];
	for (var i = 1; i < 10; i++) {
		$('.tic-tac-toe .num-' + i)[0].innerHTML = '';
		$('.tic-tac-toe .num-' + i).addClass('clickable');
	}
});