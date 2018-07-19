

let randomNum = Math.floor((Math.random() * 10) + 1);


let state = {
	numOfSquares: 9,
	mode: 'Impossible'
}

init();

function init(){
	handleSquareClickEvent();
	handleGameMode();
}

function handleSquareClickEvent(){
	$('.square').on('click', function(event){
		// check if correct
	});
}

function handleGameMode(){
	$('.mode').on('click', function(event){
		console.log('mode clicked');
		console.log(state.mode);
		$('.mode').removeClass('selected');
		$(this).addClass('selected');
		state.mode = $(this).text();
		console.log(state.mode);
		determineNumOfSquares(state.mode);
		displaySquares();
	});
}

function determineNumOfSquares(gamemode){
	if(gamemode === 'Easy'){
		state.numOfSquares = 3;
	} else if(gamemode === 'Hard'){
		state.numOfSquares = 6;
	} else if(gamemode === 'Harder' || gamemode === 'Impossible'){
		state.numOfSquares = 9;
	}
}

function displaySquares(){
	if(state.numOfSquares === 3){
		$('.easy').hide();
	} else if(state.numOfSquares === 6){
		$('.square').show();
		$('.hard').hide();
	} else {
		$('.square').show();
	}
}
