document.getElementById('savings-btn').addEventListener('click', function () {
    // get input field
    const savingsInput = document.getElementById('savings');


    if (savingsInput.value = '' || 00) {
        document.alert;
    }



    // get input field value
    const savingsInputNum = parseFloat(savingsInput.value);
    // get diposite display number
    const dipositeDisplay = document.getElementById('total-savings');
    // make diposite display number
    const dipositeDisplayNum = parseFloat(dipositeDisplay.innerText);
    // add new saving and previous display number
    const calcualtion = dipositeDisplayNum + savingsInputNum;
    // show the total number
    dipositeDisplay.innerText = calcualtion;






    // make the input blank after input
    savingsInput.value = '';

})