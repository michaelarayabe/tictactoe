window.addEventListener('DOMContentLoaded', () => {

    //HTML elements

    const displayDiv = document.querySelector('.display');
    const boxDivs = document.querySelectorAll('.box');
    const resetDiv = document.querySelector('#reset');

    //Event handler
    const handleDisplayDiv = (e) => {
        console.log(e);
    }

    const handleReset = (e) => {
        console.log(e);
    }

    const handleBoxDiv = (e) => {
        console.log(e);
    }


    



    //Add event listener
    displayDiv.addEventListener('click', handleDisplayDiv);
    resetDiv.addEventListener('click', handleReset);
    
    for(const boxDiv of boxDivs){
        boxDiv.addEventListener('click', handleBoxDiv);
    }
});