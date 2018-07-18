

let randomNum = Math.floor((Math.random() * 10) + 1);


let state = {
	gamemode: 'easy',
	numOfSquares: 9
}

init();

function init(){
	handleSquareClickEvent();
}

function handleSquareClickEvent(){
	$('.square').on('click', function(event){
		// check if correct
	});
}
