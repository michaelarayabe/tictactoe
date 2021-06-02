window.addEventListener('DOMContentLoaded', () => {

    //HTML elements
    const displayDiv = document.querySelector('.display');
    const boxDivs = document.querySelectorAll('.box');
    const resetDiv = document.querySelector('#reset');

    //Variables
    let gameIsActive = true;
    let xTurn = true;
    let winner = null;

    //Players
    const playerX = 'X';
    const playerO = 'O';

    //Win message
    const handleWin = (letter) => {
        gameIsActive = false;
        winner = letter;
        if(letter === 'x'){
            displayDiv.innerHTML = `<span>${playerX} has won</span>`;
        }else {
            displayDiv.innerHTML = `${playerO} has won`;
        }
    }

    //Check game status
    const checkGameStatus = () => {

        //Identify each box
        const topLeft = boxDivs[0].classList[1];
        const topMiddle = boxDivs[1].classList[1];
        const topRight = boxDivs[2].classList[1];

        const middleLeft = boxDivs[3].classList[1];
        const middleMiddle = boxDivs[4].classList[1];
        const middleRight = boxDivs[5].classList[1];

        const bottomLeft = boxDivs[6].classList[1];
        const bottomMiddle = boxDivs[7].classList[1];
        const bottomRight = boxDivs[8].classList[1];
        
        
        //Winner check. Check all the boxes
        if(topLeft && topLeft === topMiddle && topMiddle === topRight){
            handleWin(topLeft);
            
        }else if(middleLeft && middleLeft === middleMiddle && middleMiddle === middleRight){
            handleWin(middleLeft);
            
        }else if (bottomLeft && bottomLeft === bottomMiddle && bottomMiddle === bottomRight){
            handleWin(bottomLeft)
           
        }else if (topLeft && topLeft === middleLeft && middleLeft === bottomLeft){
            handleWin(topLeft);
            
        }else if (topMiddle && topMiddle === middleMiddle && middleMiddle === bottomMiddle){
            handleWin(topMiddle);
            
        }else if (topRight && topRight === middleRight && middleRight === bottomRight){
            handleWin(topRight);
            
        }else if (topLeft && topLeft === middleMiddle && middleMiddle === bottomRight){
            handleWin(topLeft);
            
        }else if (topRight && topRight === middleMiddle && middleMiddle === bottomLeft){
            handleWin(topRight);
            
        }else if (topLeft && topMiddle && topRight && middleLeft && middleMiddle
            && middleRight && bottomLeft && bottomMiddle && bottomRight){

            gameIsActive = false;
            displayDiv.innerHTML = `Game is a tie`;
        } else {
            xTurn = !xTurn;
            if(xTurn){
                displayDiv.innerHTML = `${playerX} is next`;
            } else {
                displayDiv.innerHTML = `${playerO} is next`;
            }
        }
    }
    

    //Handling reset button
    const handleReset = () => {
        xTurn = true;
        displayDiv.innerHTML = `${playerX} starts! `;
       for(const boxDiv of boxDivs){
           boxDiv.classList.remove('x');
           boxDiv.classList.remove('o');
       }
       gameIsActive = true;
       winner = null;
    }

    //Handing clicks in boxes 
    const handleBoxClick = (e) => {
        const classList = e.target.classList;
        if(winner || !gameIsActive){
            return;
        }
        if(classList[1] === 'x' || classList[1] === 'o'){
            return;
        }
        if(xTurn){
            classList[1] = classList.add('x');
            checkGameStatus();
            
        }else {
            classList[1] = classList.add('o')
            checkGameStatus();
            
        }

    }
    
    resetDiv.addEventListener('click', handleReset);
    
    for(const boxDiv of boxDivs){
        boxDiv.addEventListener('click', handleBoxClick);
    }
});