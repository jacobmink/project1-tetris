
const gameArr = [];
for (let i = 0; i < 21; i++){
    const arrayRow = [];
    for (let j = 0; j < 11; j++){
        arrayRow.push(0)
    }
    gameArr.push(arrayRow)
}

class Piece {
    constructor(coords){
        this.occupiedSquares = coords;
    }
    render(){
        $('.moving-piece').removeClass('moving-piece');
        for (let i = 0; i < this.occupiedSquares.length; i++){
            $(`.grid-square[x="${this.occupiedSquares[i]['x']}"][y="${this.occupiedSquares[i]['y']}"]`).addClass('moving-piece');
        }
    }
    moveRight(){
        let goForRight = true;
        for(let i = 0; i < this.occupiedSquares.length; i++){
            if(this.occupiedSquares[i].x == 10 || 
                $(`.grid-square[x="${this.occupiedSquares[i].x + 1}"][y="${this.occupiedSquares[i].y}"]`).hasClass('bottom-piece'))
                {goForRight = false;}
        }
        if(goForRight){
            this.occupiedSquares.forEach(function(element){
                element.x++;
            })
        }
        this.render();
    }
    moveLeft(){
        let goForRight = true;
        for(let i = 0; i < this.occupiedSquares.length; i++){
            if(this.occupiedSquares[i].x == 0 || 
                $(`.grid-square[x="${this.occupiedSquares[i].x - 1}"][y="${this.occupiedSquares[i].y}"]`).hasClass('bottom-piece'))
                {goForRight = false;}
        }
        if(goForRight){
            this.occupiedSquares.forEach(function(element){
                element.x--;
            })
        }
        this.render();
    }
    moveDown(){
        let eligibleToMove = true;
        for(let i = 0; i < this.occupiedSquares.length; i++){
            if(this.occupiedSquares[i].y == 20 ||
                $(`.grid-square[x="${this.occupiedSquares[i].x}"][y="${this.occupiedSquares[i].y + 1}"]`).hasClass('bottom-piece')
            ){eligibleToMove = false;}
        }
        if(eligibleToMove){
            this.occupiedSquares.forEach(function(element){
                element.y++;
            })
        }
        this.render();
    }
}

class LinePiece extends Piece {
    constructor(occupiedSquares){
        super(occupiedSquares);
        this.occupiedSquares = [{'x': 5, 'y': 0},
                                {'x': 6, 'y': 0},
                                {'x': 7, 'y': 0},
                                {'x': 8, 'y': 0}];
    }
    rotate(){
        if(this.occupiedSquares[0].x < this.occupiedSquares[1].x){
            console.log('make vertical');
            this.occupiedSquares = [{'x': this.occupiedSquares[0].x + 1, 'y':this.occupiedSquares[0].y - 1},
        {'x': this.occupiedSquares[1].x, 'y':this.occupiedSquares[1].y},
        {'x': this.occupiedSquares[2].x - 1, 'y':this.occupiedSquares[2].y + 1},
        {'x': this.occupiedSquares[3].x - 2, 'y':this.occupiedSquares[3].y + 2}]
        }else{
            console.log('make horizontal')
            this.occupiedSquares = [{'x': this.occupiedSquares[0].x - 1, 'y':this.occupiedSquares[0].y + 1},
        {'x': this.occupiedSquares[1].x, 'y':this.occupiedSquares[1].y},
        {'x': this.occupiedSquares[2].x + 1, 'y':this.occupiedSquares[2].y - 1},
        {'x': this.occupiedSquares[3].x + 2, 'y':this.occupiedSquares[3].y - 2}]
        }
        this.render();
    }
}
class SquarePiece extends Piece {
    constructor(occupiedSquares){
        super(occupiedSquares);
        this.occupiedSquares = [{'x': 5, 'y': 0},
        {'x': 6, 'y': 0},
        {'x': 5, 'y': 1},
        {'x': 6, 'y': 1}]
    }
}
class TeePiece extends Piece {
    constructor(occupiedSquares){
        super(occupiedSquares);
        this.occupiedSquares = [{'x': 5, 'y': 0},
        {'x': 6, 'y': 0},
        {'x': 6, 'y': 1},
        {'x': 7, 'y': 0}]
    }
    rotateRight(){
        const a = this.occupiedSquares[0];
        const b = this.occupiedSquares[1];
        const c = this.occupiedSquares[2];
        const d = this.occupiedSquares[3];
        if(a.x < b.x){
            this.occupiedSquares = [{'x': a.x + 1, 'y': a.y - 1},
            {'x': b.x, 'y': b.y},
            {'x': c.x - 1, 'y': c.y - 1},
            {'x': d.x - 1, 'y': d.y + 1}]
        }else if(a.x == b.x && a.y < b.y){
            this.occupiedSquares = [{'x': a.x + 1, 'y': a.y + 1},
            {'x': b.x, 'y': b.y},
            {'x': c.x + 1, 'y': c.y - 1},
            {'x': d.x - 1, 'y': d.y - 1}]
        }else if(a.x > b.x){
            this.occupiedSquares = [{'x': a.x - 1, 'y': a.y + 1},
            {'x': b.x, 'y': b.y},
            {'x': c.x + 1, 'y': c.y + 1},
            {'x': d.x + 1, 'y': d.y - 1}]
        }else{
            this.occupiedSquares = [{'x': a.x - 1, 'y': a.y - 1},
            {'x': b.x, 'y': b.y},
            {'x': c.x - 1, 'y': c.y + 1},
            {'x': d.x + 1, 'y': d.y + 1}]
        }
        this.render();
    }
    rotateLeft(){
        const a = this.occupiedSquares[0];
        const b = this.occupiedSquares[1];
        const c = this.occupiedSquares[2];
        const d = this.occupiedSquares[3];
        if(a.x < b.x){
            this.occupiedSquares = [{'x': a.x + 1, 'y': a.y + 1},
            {'x': b.x, 'y': b.y},
            {'x': c.x + 1, 'y': c.y - 1},
            {'x': d.x - 1, 'y': d.y - 1}]
        }else if(a.x == b.x && a.y < b.y){
            this.occupiedSquares = [{'x': a.x - 1, 'y': a.y + 1},
            {'x': b.x, 'y': b.y},
            {'x': c.x + 1, 'y': c.y + 1},
            {'x': d.x + 1, 'y': d.y - 1}]
        }else if(a.x > b.x){
            this.occupiedSquares = [{'x': a.x - 1, 'y': a.y - 1},
            {'x': b.x, 'y': b.y},
            {'x': c.x - 1, 'y': c.y + 1},
            {'x': d.x + 1, 'y': d.y + 1}]
        }else{
            this.occupiedSquares = [{'x': a.x + 1, 'y': a.y - 1},
            {'x': b.x, 'y': b.y},
            {'x': c.x - 1, 'y': c.y - 1},
            {'x': d.x - 1, 'y': d.y + 1}]
        }
        this.render();
    }
}
class EssPiece extends Piece {
    constructor(occupiedSquares){
        super(occupiedSquares);
        this.occupiedSquares = [{'x': 5, 'y': 1},
        {'x': 6, 'y': 0},
        {'x': 6, 'y': 1},
        {'x': 7, 'y': 0}]
    }
    rotate(){
        const a = this.occupiedSquares[0];
        const b = this.occupiedSquares[1];
        const c = this.occupiedSquares[2];
        const d = this.occupiedSquares[3];
        if(a.y == c.y){
            this.occupiedSquares = [{'x': a.x, 'y': a.y - 2},
            {'x': b.x, 'y': b.y},
            {'x': c.x - 1, 'y': c.y - 1},
            {'x': d.x - 1, 'y': d.y + 1}]
        }else{
            this.occupiedSquares = [{'x': a.x, 'y': a.y + 2},
            {'x': b.x, 'y': b.y},
            {'x': c.x + 1, 'y': c.y + 1},
            {'x': d.x + 1, 'y': d.y - 1}]
        }
        this.render();
    }
}
class ZeePiece extends Piece {
    constructor(occupiedSquares){
        super(occupiedSquares);
        this.occupiedSquares = [{'x': 5, 'y': 0},
        {'x': 6, 'y': 0},
        {'x': 6, 'y': 1},
        {'x': 7, 'y': 1}];
    }
    rotate(){
        const a = this.occupiedSquares[0];
        const b = this.occupiedSquares[1];
        const c = this.occupiedSquares[2];
        const d = this.occupiedSquares[3];
        if(a.x < b.x){
            this.occupiedSquares = [{'x': a.x + 1, 'y': a.y - 1},
            {'x': b.x, 'y': b.y},
            {'x': c.x - 1, 'y': c.y - 1},
            {'x': d.x - 2, 'y': d.y}]
        }else{
            this.occupiedSquares = [{'x': a.x - 1, 'y': a.y + 1},
            {'x': b.x, 'y': b.y},
            {'x': c.x + 1, 'y': c.y + 1},
            {'x': d.x + 2, 'y': d.y}]
        }
        this.render();
    }
}
class JayPiece extends Piece {
    constructor(occupiedSquares){
        super(occupiedSquares);
        this.occupiedSquares = [{'x': 5, 'y': 0},
        {'x': 6, 'y': 0},
        {'x': 7, 'y': 0},
        {'x': 7, 'y': 1}]
    }
    rotateRight(){
        const a = this.occupiedSquares[0];
        const b = this.occupiedSquares[1];
        const c = this.occupiedSquares[2];
        const d = this.occupiedSquares[3];
        if(a.x < b.x){
            this.occupiedSquares = [{'x': a.x + 1, 'y': a.y - 1},
            {'x': b.x, 'y': b.y},
            {'x': c.x - 1, 'y': c.y + 1},
            {'x': d.x - 2, 'y': d.y}]
        }else if(a.x == b.x && a.y < b.y){
            this.occupiedSquares = [{'x': a.x + 1, 'y': a.y + 1},
            {'x': b.x, 'y': b.y},
            {'x': c.x - 1, 'y': c.y - 1},
            {'x': d.x, 'y': d.y - 2}]
        }else if(a.x > b.x){
            this.occupiedSquares = [{'x': a.x - 1, 'y': a.y + 1},
            {'x': b.x, 'y': b.y},
            {'x': c.x + 1, 'y': c.y - 1},
            {'x': d.x + 2, 'y': d.y}]
        }else{
            this.occupiedSquares = [{'x': a.x - 1, 'y': a.y - 1},
            {'x': b.x, 'y': b.y},
            {'x': c.x + 1, 'y': c.y + 1},
            {'x': d.x, 'y': d.y + 2}]
        }
        this.render();
    }
    rotateLeft(){
        const a = this.occupiedSquares[0];
        const b = this.occupiedSquares[1];
        const c = this.occupiedSquares[2];
        const d = this.occupiedSquares[3];
        if(a.x < b.x){
            this.occupiedSquares = [{'x': a.x + 1, 'y': a.y + 1},
            {'x': b.x, 'y': b.y},
            {'x': c.x - 1, 'y': c.y - 1},
            {'x': d.x, 'y': d.y - 2}]
        }else if(a.x == b.x && a.y < b.y){
            this.occupiedSquares = [{'x': a.x - 1, 'y': a.y + 1},
            {'x': b.x, 'y': b.y},
            {'x': c.x + 1, 'y': c.y - 1},
            {'x': d.x + 2, 'y': d.y}]
        }else if(a.x > b.x){
            this.occupiedSquares = [{'x': a.x - 1, 'y': a.y - 1},
            {'x': b.x, 'y': b.y},
            {'x': c.x + 1, 'y': c.y + 1},
            {'x': d.x, 'y': d.y + 2}]
        }else{
            this.occupiedSquares = [{'x': a.x + 1, 'y': a.y - 1},
            {'x': b.x, 'y': b.y},
            {'x': c.x - 1, 'y': c.y + 1},
            {'x': d.x - 2, 'y': d.y}]
        }
        this.render();
    }
}
class EllPiece extends Piece {
    constructor(occupiedSquares){
        super(occupiedSquares);
        this.occupiedSquares = [{'x': 5, 'y': 1},
        {'x': 5, 'y': 0},
        {'x': 6, 'y': 0},
        {'x': 7, 'y': 0}]
    }
    rotateRight(){
        const a = this.occupiedSquares[0];
        const b = this.occupiedSquares[1];
        const c = this.occupiedSquares[2];
        const d = this.occupiedSquares[3];
        if(b.x < c.x){
            this.occupiedSquares = [{'x': a.x, 'y': a.y - 2},
            {'x': b.x + 1, 'y': b.y - 1},
            {'x': c.x, 'y': c.y},
            {'x': d.x - 1, 'y': d.y + 1}]
        }else if(b.x == c.x && b.y < c.y){
            this.occupiedSquares = [{'x': a.x + 2, 'y': a.y},
            {'x': b.x + 1, 'y': b.y + 1},
            {'x': c.x, 'y': c.y},
            {'x': d.x - 1, 'y': d.y - 1}]
        }else if(b.x > c.x){
            this.occupiedSquares = [{'x': a.x, 'y': a.y + 2},
            {'x': b.x - 1, 'y': b.y + 1},
            {'x': c.x, 'y': c.y},
            {'x': d.x + 1, 'y': d.y - 1}]
        }else{
            this.occupiedSquares = [{'x': a.x - 2, 'y': a.y},
            {'x': b.x - 1, 'y': b.y - 1},
            {'x': c.x, 'y': c.y},
            {'x': d.x + 1, 'y': d.y + 1}]
        }
        this.render();
    }
    rotateLeft(){
        const a = this.occupiedSquares[0];
        const b = this.occupiedSquares[1];
        const c = this.occupiedSquares[2];
        const d = this.occupiedSquares[3];
        if(b.x < c.x){
            this.occupiedSquares = [{'x': a.x + 2, 'y': a.y},
            {'x': b.x + 1, 'y': b.y + 1},
            {'x': c.x, 'y': c.y},
            {'x': d.x - 1, 'y': d.y - 1}]
        }else if(b.x == c.x && b.y < c.y){
            this.occupiedSquares = [{'x': a.x, 'y': a.y + 2},
            {'x': b.x - 1, 'y': b.y + 1},
            {'x': c.x, 'y': c.y},
            {'x': d.x + 1, 'y': d.y - 1}]
        }else if(b.x > c.x){
            this.occupiedSquares = [{'x': a.x - 2, 'y': a.y},
            {'x': b.x - 1, 'y': b.y - 1},
            {'x': c.x, 'y': c.y},
            {'x': d.x + 1, 'y': d.y + 1}]
        }else{
            this.occupiedSquares = [{'x': a.x, 'y': a.y - 2},
            {'x': b.x + 1, 'y': b.y - 1},
            {'x': c.x, 'y': c.y},
            {'x': d.x - 1, 'y': d.y + 1}]
        }
        this.render();
    }
}

const linePiece = new LinePiece();
const squarePiece = new SquarePiece();
const teePiece = new TeePiece();
const essPiece = new EssPiece();
const zeePiece = new ZeePiece();
const jayPiece = new JayPiece();
const ellPiece = new EllPiece();

const pieceArr = [linePiece,squarePiece,teePiece,essPiece,zeePiece,jayPiece,ellPiece];

const game = {
    time: 0,
    level: 0,
    score: 0,
    pieceList: pieceArr,
    arrIndex: 0
}


const makeStats = ()=>{
    const $timer = $('<div/>').html(`<h2>Time: ${game.time}</h2>`);
    const $level = $('<div/>').html(`<h2>Level: ${game.level}</h2>`);
    const $score = $('<div/>').html(`<h2>Score: ${game.score}</h2>`);
    const $nextPiece = $('<div/>').html('<h2>Next Piece</h2>');
    $('.stats').append($timer, $level, $score, $nextPiece);
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


// only look directly below current moving piece square:
// if current y is bottom-piece.y - 1 && current x is bottom-piece.x

const hitBottomOrOtherPiece = function(piece){
    const coordArr = piece.occupiedSquares;
    let eligibleToMove = true;
    for(let i = 0; i < coordArr.length; i++){
        const nextY = coordArr[i].y + 1;
        if(nextY - 1 == 20){
            eligibleToMove = false;
            console.log('bottom hit');
        }else if($(`.grid-square[x="${coordArr[i].x}"][y="${nextY}"]`).hasClass('bottom-piece'))
            {
            eligibleToMove = false;
            console.log('other piece hit');
        }
    }
    if(!eligibleToMove){
        $('.moving-piece').removeClass('moving-piece').addClass('bottom-piece');
        return true;
    }
}

let randIndex = Math.floor(Math.random()*pieceArr.length);
// let randColorRed = Math.floor(Math.random()*255);
// let randColorGreen = Math.floor(Math.random()*255);
// let randColorBlue = Math.floor(Math.random()*255);

let currentPiece = pieceArr[6];
// $('.moving-piece').css(`background-color: rgb(${randColorRed}, ${randColorGreen}, ${randColorBlue});`);

const fallingPieces = ()=>{
    
    currentPiece.render();
    if(!hitBottomOrOtherPiece(currentPiece)){
        currentPiece.occupiedSquares.forEach(function(element){
            element['y']++;
        })
    }else{
        clearInterval(timePass);
        console.log('new piece created')

        // randColorRed = Math.floor(Math.random()*254);
        // randColorGreen = Math.floor(Math.random()*254);
        // randColorBlue = Math.floor(Math.random()*254);
        randIndex = Math.floor(Math.random()*pieceArr.length);
        // $('.moving-piece').attr('style',`background-color: rgb(${randColorRed}, ${randColorGreen}, ${randColorBlue});`)
        currentPiece = pieceArr[randIndex];
        timePass = setInterval(()=>{
            game.time++;
            fallingPieces();
        },1000);

    }
}

let timePass;

$('#start-button').click((e)=>{
    $(e.target).hide();
    makeGrid();
    makeStats();
    timePass = setInterval(()=>{
        game.time++;
        fallingPieces()
    }, 1000);
})

$('body').on('keydown', function(e){
    if(!hitBottomOrOtherPiece(currentPiece)){
        if(e.which == 39){
            console.log('right');
            currentPiece.moveRight();
        }else if(e.which == 37){
            console.log('left');
            currentPiece.moveLeft();
        }else if(e.which == 40){
            console.log('down')
            currentPiece.moveDown();
        }else if(e.which == 88){
            console.log('rotate right');
            linePiece.rotate();
            teePiece.rotateRight();
            essPiece.rotate();
            zeePiece.rotate();
            jayPiece.rotateRight();
            ellPiece.rotateRight();
        }else if(e.which == 90){
            console.log('rotate left');
            linePiece.rotate();
            teePiece.rotateLeft();
            essPiece.rotate();
            zeePiece.rotate();
            jayPiece.rotateLeft();
            ellPiece.rotateLeft();
        }
    }else{
        // e.preventDefault();
        return false;
    }
})