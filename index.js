

let randomNum = Math.floor((Math.random() * 10) + 1);

$('button').on('click', function(event){
	alert('click');
	alert(randomNum);
});

let state = {
	gamemode: 'easy'
}

init();

function init(){
	handleSquareClickEvent();
}

function handleSquareClickEvent(){
	$('.square').on('click', function(event){
		console.log('clicked');
	});
}

