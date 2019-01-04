console.log('test')

const makeGrid = ()=>{
    
    for (let i = 0; i < 21; i++){
        const $gridRow = $('<div/>').addClass('row border border-primary');
        $('.container').append($gridRow);
        for (let j = 0; j < 11; j++){
            const $gridSquare = $('<div/>').addClass('col border').text(j);
            $($gridRow).append($gridSquare);
        }

    }
}

$('#start-button').click((e)=>{
    console.log('button clicked')
    $(e.target).hide();
    makeGrid();
})