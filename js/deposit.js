document.getElementById('savings-btn').addEventListener('click', function () {
    // get input field
    const savingsInput = document.getElementById('savings');
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

    // get total balance
    const totalBalance = document.getElementById('total-balance');
    // make total Balance string to number
    const totalBalanceNum = parseFloat(totalBalance.innerText);
    // add deposit balance to total balance
    const totalDeposit = totalBalanceNum + savingsInputNum;
    // display the latest total deposit
    totalBalance.innerText = totalDeposit;



    // make the input blank after input
    savingsInput.value = '';

})