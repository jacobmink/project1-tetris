console.log('test')

const pieces = [
    'line',
    'square',
    'tee',
    'ess',
    'zee',
    'jay',
    'el'
]

const gameArr = [];

const game = {
    time: 0,
    pieceList: pieces
}


const makeStats = ()=>{
    const $level = $('<div/>').html('<h2>Level</h2>');
    const $score = $('<div/>').html('<h2>Score</h2>');
    const $nextPiece = $('<div/>').html('<h2>Next Piece</h2>');
    $('.stats').append($level, $score, $nextPiece);
}

const makeGrid = ()=>{
    for (let i = 20; i > -1; i--){
        $('.game-board').attr('style','border: 1px solid black;');
        const $gridRow = $('<div/>').addClass('row grid-row').attr('row', i);
        $('.game-board').append($gridRow);
        for (let x = 0; x < 11; x++){
            const $gridSquare = $('<div/>').addClass('col border grid-square').text(`${x},${i}`);
            $gridSquare.attr('coord', {x,i});
            // $gridSquare.attr('x', x);
            // $gridSquare.attr('y', i);
            $($gridRow).append($gridSquare);
            gameArr.push($gridSquare.attr('coord'));
            // console.log($gridSquare);
        }
    }
    // console.log(gameArr);
}

const fallingPieces = ()=>{
    game.time++;
    console.log(game.time);
    // const randNum = Math.floor(Math.random()*(gameArr.length-1));
    const $squarePiece = $('.grid-square')
    
}

let timePass;

$('#start-button').click((e)=>{
    $(e.target).hide();
    makeGrid();
    makeStats();
    timePass = setInterval(fallingPieces, 1000);
})

// $('body').on('keydown', function(e){

//     // if(e.which == 39)
// })