
const gameArr = [];
for (let i = 0; i < 21; i++){
    const arrayRow = [];
    for (let j = 0; j < 11; j++){
        arrayRow.push(0)
    }
    gameArr.push(arrayRow)
}

class Piece {
    constructor(coords, color){
        this.occupiedSquares = coords;
        this.color = color;
    }
    render(){
        $('.moving-piece').removeClass('moving-piece').attr('style','');
        for (let i = 0; i < this.occupiedSquares.length; i++){
            $(`.grid-square[x="${this.occupiedSquares[i]['x']}"][y="${this.occupiedSquares[i]['y']}"]`).addClass('moving-piece').attr('style', this.color);
        }
    }
    moveRight(){
        let goForRight = true;
        for(let i = 0; i < this.occupiedSquares.length; i++){
            if(this.occupiedSquares[i].x == 9 || 
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
            if(this.occupiedSquares[i].y == 19 ||
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

const lineStyle = 'background: #84C26D; border: 1px solid black';
const squareStyle = 'background: black; border: 3px solid white';
const teeStyle = '';
const essStyle = '';
const zeeStyle = '';
const jayStyle = '';
const ellStyle = 'background: #2D6A4E; border: 2px solid black';

class LinePiece extends Piece {
    constructor(occupiedSquares, color){
        super(occupiedSquares, color);
        this.occupiedSquares = [{'x': 5, 'y': 0},
                                {'x': 6, 'y': 0},
                                {'x': 7, 'y': 0},
                                {'x': 8, 'y': 0}];
        this.color = lineStyle;
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
    constructor(occupiedSquares, color){
        super(occupiedSquares, color);
        this.occupiedSquares = [{'x': 5, 'y': 0},
        {'x': 6, 'y': 0},
        {'x': 5, 'y': 1},
        {'x': 6, 'y': 1}];
        this.color = squareStyle;
    }
    rotateRight(){

    }
    rotateLeft(){

    }
}
class TeePiece extends Piece {
    constructor(occupiedSquares, color){
        super(occupiedSquares, color);
        this.occupiedSquares = [{'x': 5, 'y': 0},
        {'x': 6, 'y': 0},
        {'x': 6, 'y': 1},
        {'x': 7, 'y': 0}];
        this.color = 'magenta';
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
    constructor(occupiedSquares, color){
        super(occupiedSquares, color);
        this.occupiedSquares = [{'x': 5, 'y': 1},
        {'x': 6, 'y': 0},
        {'x': 6, 'y': 1},
        {'x': 7, 'y': 0}];
        this.color = 'green';
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
    constructor(occupiedSquares, color){
        super(occupiedSquares, color);
        this.occupiedSquares = [{'x': 5, 'y': 0},
        {'x': 6, 'y': 0},
        {'x': 6, 'y': 1},
        {'x': 7, 'y': 1}];
        this.color = 'red';
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
    constructor(occupiedSquares, color){
        super(occupiedSquares, color);
        this.occupiedSquares = [{'x': 5, 'y': 0},
        {'x': 6, 'y': 0},
        {'x': 7, 'y': 0},
        {'x': 7, 'y': 1}];
        this.color = 'blue';
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
    constructor(occupiedSquares, color){
        super(occupiedSquares, color);
        this.occupiedSquares = [{'x': 5, 'y': 1},
        {'x': 5, 'y': 0},
        {'x': 6, 'y': 0},
        {'x': 7, 'y': 0}];
        this.color = ellStyle;
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
    level: 1,
    score: 0,
    speed: 1000,
    arrIndex: 0,
    linesLeft: 10,
    lineCounter: 0,
    gameOver: false,
    // nextPiece: makeNextPiece(),
    levelUp(){
        if(this.linesLeft == 0){
            this.level++;
            $('#level').text(`${this.level}`);
            clearInterval(timePass);
            this.speed = this.speed - 200;
            timePass = setInterval(()=>{
                this.gameOverEvent();
                if(!this.gameOver){
                    fallingPieces();
                }
            }, this.speed);
        }
    },
    scoreUp(){
        if(this.lineCounter == 1){
            this.score = this.score + (40 * this.level);
            $('#score').text(`${this.score}`);
            this.levelUp();
        }else if(this.lineCounter == 2){
            this.score = this.score + (100 * this.level);
            $('#score').text(`${this.score}`);
            this.levelUp();
        }else if(this.lineCounter == 3){
            this.score = this.score + (300 * this.level);
            $('#score').text(`${this.score}`);
            this.levelUp();
        }else if(this.lineCounter == 4){
            this.score = this.score + (1200 * this.level);
        $('#score').text(`${this.score}`);
        this.levelUp();
        }
    },
    gameOverEvent(){
        if($(`.grid-square[y="0"]`).hasClass('bottom-piece')){
            this.gameOver == true;
            clearInterval(timeInterval);
            clearInterval(timePass);
            makeRowGrey(19);
            makeRestartButton();
        }
        
    }
}

const makeRestartButton = ()=>{
    const $restartButton = $('<button/>').text('Try Again').addClass('restart-button').click((e)=>{
        startRoutine(e)
    });
    $(`.stats`).append($restartButton);
}

const makeRowGrey = (y)=>{
    if(y > -1){
        $('.grid-square').removeClass('bottom-piece');
        $(`.grid-square[y="${y}"]`).addClass('dead-square');
        setTimeout(()=>{
            makeRowGrey(--y);
        }, 30)
    }
    
}

const playOrPauseAudio = (e)=>{
    const $audio = $('#audio')[0];
    if($(e.target).hasClass('play-button')){
        $audio.play();
        $(e.target).removeClass('play-button').addClass('pause-button').text('\u2016');
    }
    else if($(e.target).hasClass('pause-button')){
        $audio.pause();
        $(e.target).removeClass('pause-button').addClass('play-button').text('\u25B6');
    }
}

const makeStats = ()=>{
    const $audioPlay = $('<button/>').addClass('play-button').text('\u25B6').click((e)=>{
        playOrPauseAudio(e)
    });
    const $timer = $('<div/>').html(`<h2>Time: <span id="timer">${game.time}</span></h2>`);
    const $level = $('<div/>').html(`<h2>Level: <span id="level">${game.level}</span></h2>`);
    const $score = $('<div/>').html(`<h2>Score: <span id="score">${game.score}</span></h2>`);
    const $nextPiece = $('<div/>').html('<h2>Next Piece: <span id="nextPiece"></span></h2>');
    $('.stats').append($audioPlay, $nextPiece, $timer, $level, $score);
}

const makeGrid = ()=>{
    $('.grid-square').removeClass('bottom-piece dead-square')
    for (let y = 0; y < 20; y++){
        const $gridRow = $('<div/>').addClass('grid-row');
        
        for (let x = 0; x < 10; x++){
            const $gridSquare = $('<div/>').addClass('grid-square').attr('x',x).attr('y',y);
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
        if(nextY - 1 == 19){
            notBottom = false;
        }
    }
    if(!notBottom){
        piece.color = 'grey';
        $('body').off('keydown')
        $('.moving-piece').removeClass('moving-piece').addClass('bottom-piece').css({'background': 'grey', 'border': ''});
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
        piece.color = 'grey';
        $('body').off('keydown')
        $('.moving-piece').removeClass('moving-piece').addClass('bottom-piece').css({'background': 'grey', 'border': ''});
        return true;
    }
    return false;
}

const createPiece = ()=>{
    let randIndex = Math.floor(Math.random()*constructorArr.length);
    // randIndex = 6;
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

const removeLine = ()=>{
    // let counter = 0;
    for(let y = 19; y > -1; y--){
        let occupied = 0;
        for(let x = 0; x < 10; x++){
            if($(`.grid-square[x="${x}"][y="${y}"]`).hasClass('bottom-piece')){
                occupied++;
            }
        }
        if(occupied == 10){
            $(`.bottom-piece[y="${y}"]`).removeClass('bottom-piece').css({'background': '', 'border': ''});
            for(let i = y; i > -1; i--){
                for(let x = 0; x < 11; x++){
                    let thisPiece = $(`.grid-square[x="${x}"][y="${i}"]`);
                    let previousPiece = $(`.grid-square[x="${x}"][y="${i - 1}"]`);
                    if($(`.grid-square[x="${x}"][y="${i - 1}"]`).hasClass('bottom-piece')){
                        thisPiece.addClass('bottom-piece');
                        previousPiece.removeClass('bottom-piece').css({'background': '', 'border': ''});
                    }
                }
            }
            game.lineCounter++;
            // game.scoreUpOneLine();
        }
    }
}

const makeNextGrid = ()=>{
    for (let y = 0; y < 4; y++){
        const $gridRow = $('<div/>').addClass('mini-row');
        for (let x = 0; x < 4; x++){
            const $gridSquare = $('<div/>').addClass('mini-square').attr('x',x).attr('y',y);
            $($gridRow).append($gridSquare);
            console.log($gridSquare);
        }
        $('#nextPiece').append($gridRow);
    }
}

const showNextPiece = (nextPiece)=>{
    // const nextPiece = createPiece();
    $('.next-piece').removeClass('next-piece');
    for (let i = 0; i < nextPiece.occupiedSquares.length; i++){
        // console.log(nextPiece.occupiedSquares[i])
        $(`.mini-square[x="${nextPiece.occupiedSquares[i].x}"][y="${nextPiece.occupiedSquares[i].y}"]`).text('next').addClass('next-piece');
    }
}

const startRoutine = (e)=>{
    timeInterval = setInterval(()=>{
        game.time++;
    $('#timer').text(`${game.time}`);
    }, 1000);
    $(e.target).hide();
    $('.stats').empty();
    $('.game-board').empty();
    game.time = 0;
    game.level = 1;
    game.speed = 1000;
    game.score = 9;
    makeStats();
    makeNextGrid();
    makeGrid();
    
    timePass = setInterval(()=>{
        game.gameOverEvent();
        if(!game.gameOver){
            fallingPieces();
        }
    }, game.speed);

    miniInterval = setInterval(()=>{
        removeLine();
        game.scoreUp();
        game.lineCounter = 0;
    },100);
}

let currentPiece = createPiece();
let nextPiece = createPiece();

const fallingPieces = ()=>{
    currentPiece.render();
    // showNextPiece(nextPiece);
    if(hitBottom(currentPiece) || hitOtherPiece(currentPiece)){
        currentPiece = nextPiece;
        nextPiece = createPiece();
        $('body').on('keydown', function(e){
            whichKey(e);
        });
    }else{
        currentPiece.occupiedSquares.forEach(function(element){
            element['y']++;
        })
    }
   
}

let timeInterval;
let timePass;
let miniInterval;

$('#startButton').click((e)=>{
   startRoutine(e);
})

$('body').on('keydown', function(e){
    whichKey(e);
})