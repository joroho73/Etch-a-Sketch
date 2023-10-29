
let pixelSelector = document.querySelector('.colourSelect');
let pixelColor = pixelSelector.value;

pixelSelector.addEventListener('change',(event) => {
    pixelColor = pixelSelector.value;
});

const addSquaresButton = document.querySelector('.addSquares');
addSquaresButton.addEventListener('click', () => {
    noOfSquares = prompt('how many squares?');
    addSquares(noOfSquares);


});

function addSquares(noOfSquares){
    canvas = document.querySelector('.mainBody');
    //canvas.innerHTML = '';
    for (i = 0; i < noOfSquares; i++){
        newSquare = document.createElement('div');
        newSquare.classList.toggle('item');
        canvas.appendChild(newSquare) 
    }
    addPixelColor()
}

function addPixelColor(){
const pixelArray = document.querySelectorAll('.item');
pixelArray.forEach(function(element){
    element.addEventListener('mouseenter', () => {
        if (pixelColor === 'random'){
            element.style.backgroundColor = random_rgba();}
        else {
            element.style.backgroundColor = pixelColor;
        }
    })
})
}

clearButton = document.querySelector('.clear');
clearButton.addEventListener('click', () => {
    const pixelArray = document.querySelectorAll('.item');
    pixelArray.forEach(function(element){
        element.style.backgroundColor = '';
    })
})

function random_rgba() {
    var o = Math.round, r = Math.random, s = 255;
    return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1) + ')';
}

addSquares(1800);










