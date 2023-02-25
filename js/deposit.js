document.getElementById('savings-btn').addEventListener('click', function () {
    const newSavings = document.getElementById('savings');
    const newSavingsString = newSavings.value;
    const newSaving = parseFloat(newSavingsString);

    const savingsValue = document.getElementById('total-savings');
    const savingsTotalString = savingsValue.innerText;
    const savingsTotal = parseFloat(savingsTotalString);
    const savingsTotalDisplay = savingsValue.innerText = newSaving;

    const totalSaving = newSaving + savingsTotal;

})