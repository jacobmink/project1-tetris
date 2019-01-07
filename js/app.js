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
for (let i = 0; i < 21; i++){
    const arrayRow = [];
    for (let j = 0; j < 11; j++){
        arrayRow.push(0)
    }
    gameArr.push(arrayRow)
}

class LinePiece {
    constructor(){
        this.occupiedSquares = [{'x': 5, 'y': 0},
                                {'x': 6, 'y': 0},
                                {'x': 7, 'y': 0},
                                {'x': 8, 'y': 0}];
    }
    render(){
        $('.moving-piece').removeClass('moving-piece');
        for (let i = 0; i < this.occupiedSquares.length; i++){
            $(`.grid-square[x="${this.occupiedSquares[i]['x']}"][y="${this.occupiedSquares[i]['y']}"]`).addClass('moving-piece');
        }
    }
    moveRight(){
        if(this.occupiedSquares[3].x < 10){
            this.occupiedSquares.forEach(function(element){
                element['x']++;
            })
        }
        this.render();
    }
    moveLeft(){
        if(this.occupiedSquares[0].x > 0){
            this.occupiedSquares.forEach(function(element){
                element['x']--;
            })
        }
        this.render();
    }
    
}

const linePiece = new LinePiece();



const lineFn = (arr)=>{
    for(let i = 0; i < 4; i++){
        arr[game.arrIndex][i] = 1;
        $(`.grid-square[x="${i}"][y="${game.arrIndex - 1}"]`).removeClass('moving-piece').addClass('background-piece');
        $(`.grid-square[x="${i}"][y="${game.arrIndex}"]`).addClass('moving-piece');
       

    }
    game.arrIndex++;
    console.log(arr);
}

const game = {
    time: 0,
    pieceList: pieces,
    arrIndex: 0
}


const makeStats = ()=>{
    const $level = $('<div/>').html('<h2>Level</h2>');
    const $score = $('<div/>').html('<h2>Score</h2>');
    const $nextPiece = $('<div/>').html('<h2>Next Piece</h2>');
    $('.stats').append($level, $score, $nextPiece);
}

const makeGrid = ()=>{
    for (let y = 0; y < 21; y++){
        const $gridRow = $('<div/>').addClass('grid-row');
        
        for (let x = 0; x < 11; x++){
            const $gridSquare = $('<div/>').addClass('grid-square').attr('x',x).attr('y',y);
            // $gridSquare.attr('coord', {x,i});
            $($gridRow).append($gridSquare);
        }
        $('.game-board').append($gridRow);
    }
}
const fallingPieces = ()=>{
    game.time++;
    if(game.arrIndex < gameArr.length){
        linePiece.render();
        linePiece.occupiedSquares.forEach(function(element){
            element['y']++;
        })
        game.arrIndex++;
    }
}

let timePass;

$('#start-button').click((e)=>{
    $(e.target).hide();
    makeGrid();
    makeStats();
    timePass = setInterval(()=>{
        fallingPieces()
    }, 1000);
})

$('body').on('keydown', function(e){
    if(e.which == 39){
        linePiece.moveRight();
    }else if(e.which == 37){
        linePiece.moveLeft();
    }
})