
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
    rotateRight(){
        if(this.occupiedSquares[0].x < this.occupiedSquares[1].x){
            this.occupiedSquares = [{'x': this.occupiedSquares[0].x + 1, 'y':this.occupiedSquares[0].y - 1},
        {'x': this.occupiedSquares[1].x, 'y':this.occupiedSquares[1].y},
        {'x': this.occupiedSquares[2].x - 1, 'y':this.occupiedSquares[2].y + 1},
        {'x': this.occupiedSquares[3].x - 2, 'y':this.occupiedSquares[3].y + 2}]
        }else{
            this.occupiedSquares = [{'x': this.occupiedSquares[0].x - 1, 'y':this.occupiedSquares[0].y + 1},
        {'x': this.occupiedSquares[1].x, 'y':this.occupiedSquares[1].y},
        {'x': this.occupiedSquares[2].x + 1, 'y':this.occupiedSquares[2].y - 1},
        {'x': this.occupiedSquares[3].x + 2, 'y':this.occupiedSquares[3].y - 2}]
        }
        this.render();
    }
    rotateLeft(){
        if(this.occupiedSquares[0].x < this.occupiedSquares[1].x){
            this.occupiedSquares = [{'x': this.occupiedSquares[0].x + 1, 'y':this.occupiedSquares[0].y - 1},
        {'x': this.occupiedSquares[1].x, 'y':this.occupiedSquares[1].y},
        {'x': this.occupiedSquares[2].x - 1, 'y':this.occupiedSquares[2].y + 1},
        {'x': this.occupiedSquares[3].x - 2, 'y':this.occupiedSquares[3].y + 2}]
        }else{
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
    rotateRight(){

    }
    rotateLeft(){

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
    rotateRight(){
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
    rotateLeft(){
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
    rotateRight(){
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
    rotateLeft(){
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

const constructorArr = [LinePiece, SquarePiece, TeePiece, EssPiece, ZeePiece, JayPiece, EllPiece]

const game = {
    time: 0,
    level: 0,
    score: 0,
    speed: 1000,
    // pieceList: pieceArr,
    arrIndex: 0,
    gameOver: false,
    levelUp(){
        if(this.score % 10 == 0){
            this.level++;
            this.speed = this.speed - 200;
        }
    },
    scoreUp(){
        for(let i = 0; i < 11; i++){
            if($(`.grid-square[x="${i}"]`).hasClass('bottom-piece')){
                this.score++;
                $('#score').text(`${this.score}`);
            }
        }
    }
}


const makeStats = ()=>{
    const $timer = $('<div/>').html(`<h2>Time: <span id="timer">${game.time}</span></h2>`);
    const $level = $('<div/>').html(`<h2>Level: <span id="level">${game.level}</span></h2>`);
    const $score = $('<div/>').html(`<h2>Score: <span id="score">${game.score}</span></h2>`);
    const $nextPiece = $('<div/>').html('<h2>Next Piece: <span id="nextPiece"></span></h2>');
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

const hitBottom = function(piece){
    const coordArr = piece.occupiedSquares;
    let notBottom = true;
    for(let i = 0; i < coordArr.length; i++){
        const nextY = coordArr[i].y + 1;
        if(nextY - 1 == 20){
            notBottom = false;
        }
    }
    if(!notBottom){
        $('body').off('keydown')
        $('.moving-piece').removeClass('moving-piece').addClass('bottom-piece');
        return true;
    }
    return false;
}

const hitOtherPiece = function(piece){
    const coordArr = piece.occupiedSquares;
    let eligibleToMove = true;
    for(let i = 0; i < coordArr.length; i++){
        const nextY = coordArr[i].y + 1;
        if($(`.grid-square[x="${coordArr[i].x}"][y="${nextY}"]`).hasClass('bottom-piece')){
            eligibleToMove = false;
        }
    }
    if(!eligibleToMove){
        $('body').off('keydown')
        $('.moving-piece').removeClass('moving-piece').addClass('bottom-piece');
        return true;
    }
    return false;
}

const createPiece = ()=>{
    let randIndex = Math.floor(Math.random()*constructorArr.length);
    // randIndex = 1;
    const currentPiece = new constructorArr[randIndex]();
    return currentPiece;
}

const whichKey = (e)=>{
        if(e.which == 39){
            currentPiece.moveRight();
        }else if(e.which == 37){
            currentPiece.moveLeft();
        }else if(e.which == 40){
            currentPiece.moveDown();
        }else if(e.which == 88){
            currentPiece.rotateRight();
        }else if(e.which == 90){
            currentPiece.rotateLeft();
        }
}

// const removeLine = ()=>{
//     // look across the grid on one y-value, 

//     for(let i = 0; i < 11; i++){
//         if($(`.grid-square[x="${i}"]`).hasClass('.bottom-piece'))
//     }
// }







let currentPiece = createPiece();

const fallingPieces = ()=>{
    
    currentPiece.render();
    if(hitBottom(currentPiece) || hitOtherPiece(currentPiece)){
        currentPiece = createPiece();
        $('body').on('keydown', function(e){
            whichKey(e);
        });
    }else{
        currentPiece.occupiedSquares.forEach(function(element){
            element['y']++;
        })
    }
    // if(game.gameOver == false){
    //     fallingPieces();
    // }
}

let timePass;

$('#start-button').click((e)=>{
    $(e.target).hide();
    makeGrid();
    makeStats();
    timePass = setInterval(()=>{
        game.time++;
        fallingPieces()
    }, game.speed);
})

$('body').on('keydown', function(e){
    whichKey(e);
})