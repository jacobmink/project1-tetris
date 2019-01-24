
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
// const lineStyle = 'background-image: url("lineStyle.jpg")'
// const squareStyle = 'background-image: url("squareStyle.jpg")'
// const teeStyle = 'background-image: url("teeStyle.jpg")'
// const essStyle = 'background-image: url("essStyle.jpg")'
// const zeeStyle = 'background-image: url("zeeStyle.jpg")'
// const jayStyle = 'background-image: url("jayStyle.jpg")'
// const ellStyle = 'background-image: url("ellStyle.jpg")'
const lineStyle = 'background: #84C26D; border: 1px solid black';
const squareStyle = 'background: black; border: 3px solid white';
const teeStyle = 'background: #96B781; border: 1px solid black';
const essStyle = 'background: #2D6A4E; border: 3px solid #375B54';
const zeeStyle = 'background: black; border: 4px solid #88BB73';
const jayStyle = 'background: white; border: 3px solid #8DAA79';
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
        const edgeCase = edgeCaseCheck(this, 8);
        const bottomCase = bottomCaseCheck(this);
        if(!edgeCase && !bottomCase){
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
        // else if(!edgeCase && bottomCase){

        // }
    }
    rotateLeft(){
        const edgeCase = edgeCaseCheck(this, 8)
        const bottomCase = bottomCaseCheck(this);
        if(!edgeCase && !bottomCase){
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
        this.color = teeStyle;
    }
    rotateRight(){
        const a = this.occupiedSquares[0];
        const b = this.occupiedSquares[1];
        const c = this.occupiedSquares[2];
        const d = this.occupiedSquares[3];
        const edgeCase = edgeCaseCheck(this, 9);
        const bottomCase = bottomCaseCheck(this);
        if(!edgeCase && !bottomCase){
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
    }
    rotateLeft(){
        const a = this.occupiedSquares[0];
        const b = this.occupiedSquares[1];
        const c = this.occupiedSquares[2];
        const d = this.occupiedSquares[3];
        const edgeCase = edgeCaseCheck(this, 9);
        const bottomCase = bottomCaseCheck(this);
        if(!edgeCase && !bottomCase){
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
}
class EssPiece extends Piece {
    constructor(occupiedSquares, color){
        super(occupiedSquares, color);
        this.occupiedSquares = [{'x': 5, 'y': 1},
        {'x': 6, 'y': 1},
        {'x': 6, 'y': 0},
        {'x': 7, 'y': 0}];
        this.color = essStyle;
    }
    rotateRight(){
        const a = this.occupiedSquares[0];
        const b = this.occupiedSquares[1];
        const c = this.occupiedSquares[2];
        const d = this.occupiedSquares[3];
        const edgeCase = edgeCaseCheck(this, 8);
        console.log(d)
        const bottomCase = bottomCaseCheck(this);
        if(!edgeCase && !bottomCase){
            if(a.y == b.y){
                this.occupiedSquares = [{'x': a.x + 1, 'y': a.y - 1},
                {'x': b.x, 'y': b.y},
                {'x': c.x + 1, 'y': c.y + 1},
                {'x': d.x, 'y': d.y + 2}]
            }else{
                this.occupiedSquares = [{'x': a.x - 1, 'y': a.y + 1},
                {'x': b.x, 'y': b.y},
                {'x': c.x - 1, 'y': c.y - 1},
                {'x': d.x, 'y': d.y - 2}]
            }
            this.render();
        }
    }
    rotateLeft(){
        const a = this.occupiedSquares[0];
        const b = this.occupiedSquares[1];
        const c = this.occupiedSquares[2];
        const d = this.occupiedSquares[3];
        const edgeCase = edgeCaseCheck(this, 8);
        const bottomCase = bottomCaseCheck(this);
        if(!edgeCase && !bottomCase){
            if(a.y == b.y){
                this.occupiedSquares = [{'x': a.x + 1, 'y': a.y - 1},
                {'x': b.x, 'y': b.y},
                {'x': c.x + 1, 'y': c.y + 1},
                {'x': d.x, 'y': d.y + 2}]
            }else{
                this.occupiedSquares = [{'x': a.x - 1, 'y': a.y + 1},
                {'x': b.x, 'y': b.y},
                {'x': c.x - 1, 'y': c.y - 1},
                {'x': d.x, 'y': d.y - 2}]
            }
            this.render();
        }
    }
}
class ZeePiece extends Piece {
    constructor(occupiedSquares, color){
        super(occupiedSquares, color);
        this.occupiedSquares = [{'x': 5, 'y': 0},
        {'x': 6, 'y': 0},
        {'x': 6, 'y': 1},
        {'x': 7, 'y': 1}];
        this.color = zeeStyle;
    }
    rotateRight(){
        const a = this.occupiedSquares[0];
        const b = this.occupiedSquares[1];
        const c = this.occupiedSquares[2];
        const d = this.occupiedSquares[3];
        const edgeCase = edgeCaseCheck(this, 9);
        const bottomCase = bottomCaseCheck(this);
        if(!edgeCase && !bottomCase){
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
    rotateLeft(){
        const a = this.occupiedSquares[0];
        const b = this.occupiedSquares[1];
        const c = this.occupiedSquares[2];
        const d = this.occupiedSquares[3];
        const edgeCase = edgeCaseCheck(this, 9);
        const bottomCase = bottomCaseCheck(this);
        if(!edgeCase && !bottomCase){
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
}
class JayPiece extends Piece {
    constructor(occupiedSquares, color){
        super(occupiedSquares, color);
        this.occupiedSquares = [{'x': 5, 'y': 0},
        {'x': 6, 'y': 0},
        {'x': 7, 'y': 0},
        {'x': 7, 'y': 1}];
        this.color = jayStyle;
    }
    rotateRight(){
        const a = this.occupiedSquares[0];
        const b = this.occupiedSquares[1];
        const c = this.occupiedSquares[2];
        const d = this.occupiedSquares[3];
        const edgeCase = edgeCaseCheck(this, 9);
        const bottomCase = bottomCaseCheck(this);
        if(!edgeCase && !bottomCase){
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
    }
    rotateLeft(){
        const a = this.occupiedSquares[0];
        const b = this.occupiedSquares[1];
        const c = this.occupiedSquares[2];
        const d = this.occupiedSquares[3];
        const edgeCase = edgeCaseCheck(this, 9);
        const bottomCase = bottomCaseCheck(this);
        if(!edgeCase && !bottomCase){
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
}
class EllPiece extends Piece {
    constructor(occupiedSquares, color){
        super(occupiedSquares, color);
        this.occupiedSquares = [{'x': 5, 'y': 1},
        {'x': 6, 'y': 1},
        {'x': 7, 'y': 1},
        {'x': 7, 'y': 0}];
        this.color = ellStyle;
    }
    rotateRight(){
        const a = this.occupiedSquares[0];
        const b = this.occupiedSquares[1];
        const c = this.occupiedSquares[2];
        const d = this.occupiedSquares[3];
        const edgeCase = edgeCaseCheck(this, 9);
        const bottomCase = bottomCaseCheck(this);
        if(!edgeCase && !bottomCase){
            if(a.x < b.x){
                this.occupiedSquares = [{'x': a.x + 1, 'y': a.y - 1},
                {'x': b.x, 'y': b.y},
                {'x': c.x - 1, 'y': c.y + 1},
                {'x': d.x, 'y': d.y + 2}]
            }else if(a.x == b.x && a.y < b.y){
                this.occupiedSquares = [{'x': a.x + 1, 'y': a.y + 1},
                {'x': b.x, 'y': b.y},
                {'x': c.x - 1, 'y': c.y - 1},
                {'x': d.x - 2, 'y': d.y}]
            }else if(a.x > b.x){
                this.occupiedSquares = [{'x': a.x - 1, 'y': a.y + 1},
                {'x': b.x, 'y': b.y},
                {'x': c.x + 1, 'y': c.y - 1},
                {'x': d.x, 'y': d.y - 2}]
            }else{
                this.occupiedSquares = [{'x': a.x - 1, 'y': a.y - 1},
                {'x': b.x, 'y': b.y},
                {'x': c.x + 1, 'y': c.y + 1},
                {'x': d.x + 2, 'y': d.y}]
            }
            this.render();
        }
    }
    rotateLeft(){
        const a = this.occupiedSquares[0];
        const b = this.occupiedSquares[1];
        const c = this.occupiedSquares[2];
        const d = this.occupiedSquares[3];
        const edgeCase = edgeCaseCheck(this, 9);
        const bottomCase = bottomCaseCheck(this);
        if(!edgeCase && !bottomCase){
            if(a.x < b.x){
                this.occupiedSquares = [{'x': a.x + 1, 'y': a.y + 1},
                {'x': b.x, 'y': b.y},
                {'x': c.x - 1, 'y': c.y - 1},
                {'x': d.x - 2, 'y': d.y}]
            }else if(a.x == b.x && a.y < b.y){
                this.occupiedSquares = [{'x': a.x - 1, 'y': a.y + 1},
                {'x': b.x, 'y': b.y},
                {'x': c.x + 1, 'y': c.y - 1},
                {'x': d.x, 'y': d.y - 2}]
            }else if(a.x > b.x){
                this.occupiedSquares = [{'x': a.x - 1, 'y': a.y - 1},
                {'x': b.x, 'y': b.y},
                {'x': c.x + 1, 'y': c.y + 1},
                {'x': d.x + 2, 'y': d.y}]
            }else{
                this.occupiedSquares = [{'x': a.x + 1, 'y': a.y - 1},
                {'x': b.x, 'y': b.y},
                {'x': c.x - 1, 'y': c.y + 1},
                {'x': d.x, 'y': d.y + 2}]
            }
            this.render();
        }
    }
}

const constructorArr = [LinePiece, SquarePiece, TeePiece, EssPiece, ZeePiece, JayPiece, EllPiece]

const game = {
    time: 0,
    level: 1,
    score: 0,
    linesPerLevel: 0,
    speed: 1000,
    arrIndex: 0,
    lineCounter: 0,
    gameOver: false,
    // nextPiece: makeNextPiece(),
    levelUp(){
        if(this.linesPerLevel % 10 == 0){
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
            // this.levelUp();
        }else if(this.lineCounter == 2){
            this.score = this.score + (100 * this.level);
            $('#score').text(`${this.score}`);
            // this.levelUp();
        }else if(this.lineCounter == 3){
            this.score = this.score + (300 * this.level);
            $('#score').text(`${this.score}`);
            // this.levelUp();
        }else if(this.lineCounter == 4){
            this.score = this.score + (1200 * this.level);
        $('#score').text(`${this.score}`);
        // this.levelUp();
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
        // $('.grid-square').removeClass('bottom-piece').css('background','');
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
    const $lines = $('<div/>').html(`<h2>Lines: <span id="lines">${game.linesPerLevel}</span></h2>`);
    const $score = $('<div/>').html(`<h2>Score: <span id="score">${game.score}</span></h2>`);
    const $controls = $('<div/>').html('<h5>Controls:<br>Z Button -> Rotate left<br>X Button -> Rotate right<br>Arrow keys -> Move/Drop</h5>')
    // const $nextPiece = $('<div/>').html('<h2>Next Piece: <span id="nextPiece"></span></h2>');
    $('.stats').append($audioPlay, $score,
        //  $nextPiece, 
         $timer, $level, $lines, $controls);
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

const edgeCaseCheck = (obj, val)=>{
    let edgeCase = false;
    let coords = obj.occupiedSquares;
    if(coords[0].x == coords[1].x && 
        (coords[0].x == 0 || coords[0].x >= val)){
        edgeCase = true;
    }
   return edgeCase;
}

const bottomCaseCheck = (obj)=>{
    let bottomCase = false;
    let coords = obj.occupiedSquares;
    for(let i = 0; i < coords.length - 1; i++){
        if(coords[i].y == coords[i+1].y && parseInt(coords[i].y) > 17){
            bottomCase = true;
        }
    }
    return bottomCase;
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
        // piece.color = 'grey';
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
        // piece.color = 'grey';
        $('body').off('keydown')
        $('.moving-piece').removeClass('moving-piece').addClass('bottom-piece').css({'background': 'grey', 'border': ''});
        return true;
    }
    return false;
}

const createPiece = ()=>{
    let randIndex = Math.floor(Math.random()*constructorArr.length);
    // randIndex = 4;
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
    let occupied = 0;
    for(let y = 19; y > -1; y--){
        // let occupied = 0;
        for(let x = 0; x < 10; x++){
            if($(`.grid-square[x="${x}"][y="${y}"]`).hasClass('bottom-piece')){
                occupied++;
            }
        }
        // console.log(occupied);
        if(occupied == 10){
            $(`.bottom-piece[y="${y}"]`).removeClass('bottom-piece').css('background','');
            for(let i = y; i > -1; i--){
                for(let x = 0; x < 11; x++){
                    let thisPiece = $(`.grid-square[x="${x}"][y="${i}"]`);
                    let previousPiece = $(`.grid-square[x="${x}"][y="${i - 1}"]`);
                    if($(`.grid-square[x="${x}"][y="${i - 1}"]`).hasClass('bottom-piece')){
                        thisPiece.addClass('bottom-piece');
                        previousPiece.removeClass('bottom-piece').css('background','');
                    }
                }
            }
            game.lineCounter++;
            game.scoreUp();
            game.linesPerLevel++;
            $('#lines').text(`${game.linesPerLevel}`);
        }
    }
    // console.log(occupied);
}

// const makeNextGrid = ()=>{
//     for (let y = 0; y < 4; y++){
//         const $gridRow = $('<div/>').addClass('mini-row');
//         for (let x = 0; x < 4; x++){
//             const $gridSquare = $('<div/>').addClass('mini-square').attr('x',x).attr('y',y);
//             $($gridRow).append($gridSquare);
//         }
//         $('#nextPiece').append($gridRow);
//     }
// }

// const showNextPiece = (nextPiece)=>{
//     // const nextPiece = createPiece();
//     $('.next-piece').removeClass('next-piece');
//     for (let i = 0; i < nextPiece.occupiedSquares.length; i++){
//         // console.log(nextPiece.occupiedSquares[i])
//         $(`.mini-square[x="${nextPiece.occupiedSquares[i].x}"][y="${nextPiece.occupiedSquares[i].y}"]`).text('next').addClass('next-piece');
//     }
// }



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
    game.score = 0;
    game.linesPerLevel = 0;
    makeStats();
    // makeNextGrid();
    makeGrid();
    
    timePass = setInterval(()=>{
        game.gameOverEvent();
        if(!game.gameOver){
            fallingPieces();
        }
    }, game.speed);

    miniInterval = setInterval(()=>{
        // let now1 = Date.now();
        // console.log(now);
        removeLine();
        // let now2 = Date.now();
        // if(now2 >= now1 + 20){
        //     // console.log(now1,now2);
            console.log(game.lineCounter);
        // }
        
        game.scoreUp();
        game.lineCounter = 0;
    },200);
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