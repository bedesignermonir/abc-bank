document.getElementById('withdraw-btn').addEventListener('click', function () {
    // get the input value
    const withdrawValue = document.getElementById('withdraw');
    const withdrawValueNum = parseFloat(withdrawValue.value);


    // get the html value
    const withdrawDisplay = document.getElementById('withdraw-display');
    const withdrawDisplayNum = parseFloat(withdrawDisplay.innerText);

    // add the value
    const addWithdraw = withdrawDisplayNum + withdrawValueNum;

    // show the display
    withdrawDisplay.innerText = addWithdraw;



    // get the total balance 
    const totalBalance = document.getElementById('total-balance');
    const totalBalanceNum = parseFloat(totalBalance.innerText);
    const countTotalBalance = totalBalanceNum - withdrawValueNum;


    // show the total balance
    totalBalance.innerText = countTotalBalance;


    // blank the box
    withdrawValue.value = '';




})