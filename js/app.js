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

class SquarePiece {
    constructor(){
        this.occupiedSquares = [{'x': 5, 'y': 0},
                                {'x': 6, 'y': 0},
                                {'x': 5, 'y': 1},
                                {'x': 6, 'y': 1}];
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

const squarePiece = new SquarePiece();

class TeePiece {
    constructor(){
        this.occupiedSquares = [{'x': 5, 'y': 0},
                                {'x': 6, 'y': 0},
                                {'x': 6, 'y': 1},
                                {'x': 7, 'y': 0}];
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

const teePiece = new TeePiece();

class EssPiece {
    constructor(){
        this.occupiedSquares = [{'x': 5, 'y': 1},
                                {'x': 6, 'y': 0},
                                {'x': 6, 'y': 1},
                                {'x': 7, 'y': 0}];
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

const essPiece = new EssPiece();

class ZeePiece {
    constructor(){
        this.occupiedSquares = [{'x': 5, 'y': 0},
                                {'x': 6, 'y': 0},
                                {'x': 6, 'y': 1},
                                {'x': 7, 'y': 1}];
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

const zeePiece = new ZeePiece();

class JayPiece {
    constructor(){
        this.occupiedSquares = [{'x': 5, 'y': 0},
                                {'x': 6, 'y': 0},
                                {'x': 7, 'y': 0},
                                {'x': 7, 'y': 1}];
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

const jayPiece = new JayPiece();

class EllPiece {
    constructor(){
        this.occupiedSquares = [{'x': 5, 'y': 0},
                                {'x': 5, 'y': 1},
                                {'x': 6, 'y': 0},
                                {'x': 7, 'y': 0}];
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

const ellPiece = new EllPiece();

const pieceArr = [linePiece,squarePiece,teePiece,essPiece,zeePiece,jayPiece,ellPiece];

const game = {
    time: 0,
    level: 0,
    score: 0,
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

let randIndex = Math.floor(Math.random()*pieceArr.length);
let currentPiece = pieceArr[randIndex];


const hitBottom = function(piece){
    const coordArr = piece.occupiedSquares;
    for(let i = 0; i < coordArr.length; i++){
        if(coordArr[i].y == 20 || ){
            $('.moving-piece').removeClass('moving-piece').addClass('bottom-piece');
            console.log('I found a bottom');
            return true;
        }
    }
}

const fallingPieces = ()=>{
    
    game.time++;
        currentPiece.render();
        if(!hitBottom(currentPiece)){
            currentPiece.occupiedSquares.forEach(function(element){
                element['y']++;
            })
        }else{
            
            randIndex = Math.floor(Math.random()*pieceArr.length);
            currentPiece = pieceArr[randIndex];
        }
}

let timePass;

$('#start-button').click((e)=>{
    $(e.target).hide();
    makeGrid();
    makeStats();
    timePass = setInterval(()=>{
        fallingPieces()
    }, 500);
})

$('body').on('keydown', function(e){
    if(e.which == 39){
        currentPiece.moveRight();
    }else if(e.which == 37){
        currentPiece.moveLeft();
    }
})