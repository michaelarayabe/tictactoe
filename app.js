window.addEventListener('DOMContentLoaded', () => {

    //HTML elements

    const displayDiv = document.querySelector('.display');
    const boxDivs = document.querySelectorAll('.box');
    const resetDiv = document.querySelector('#reset');

    //Variables
    let gameIsActive = true;
    let xTurn = true;
    let winner = null;
    

    //Event handler
    const handleDisplayDiv = (e) => {
        console.log(e);
    }

    const handleReset = (e) => {
        console.log(e);
    }

    const handleBoxClick = (e) => {
        const classList = e.target.classList;
        if(classList[1] === 'x' || classList[1] === 'o'){
            return;
        }
        if(xTurn){
            classList[1] = classList.add('x');
            xTurn = !xTurn;
        }else {
            classList[1] = classList.add('o')
            xTurn = !xTurn;
        }
    }


    



    //Add event listener
    displayDiv.addEventListener('click', handleDisplayDiv);
    resetDiv.addEventListener('click', handleReset);
    
    for(const boxDiv of boxDivs){
        boxDiv.addEventListener('click', handleBoxClick);
    }
});