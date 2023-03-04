document.getElementById('withdraw-btn').addEventListener('click', function () {
    // get the input value
    const withdrawValue = document.getElementById('withdraw');
    const withdrawValueNum = parseFloat(withdrawValue.value);

    // blank the box
    withdrawValue.value = '';

    if (isNaN(withdrawValueNum)) {
        alert('Please give a valid number');
        return;
    }


    // get the html value
    const withdrawDisplay = document.getElementById('withdraw-display');
    const withdrawDisplayNum = parseFloat(withdrawDisplay.innerText);

    // add the value
    const addWithdraw = withdrawDisplayNum + withdrawValueNum;





    // get the total balance 
    const totalBalance = document.getElementById('total-balance');
    const totalBalanceNum = parseFloat(totalBalance.innerText);

    if (withdrawValueNum > totalBalanceNum) {
        alert('there is not enough Balance for withdraw');
        return;
    }

    // show the display
    withdrawDisplay.innerText = addWithdraw;


    const countTotalBalance = totalBalanceNum - withdrawValueNum;


    // show the total balance
    totalBalance.innerText = countTotalBalance;







})