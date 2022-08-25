function getTheAmountAndMakeIntoNumber(element) {
    const getTheAmount = document.getElementById(element);
    const amountString = getTheAmount.value;
    getTheAmount.value = "";
    const amount = parseFloat(amountString);
    return amount;
}

function Calculte() {
    //Total amount
    const incomeAmount = getTheAmountAndMakeIntoNumber("income");

    //Add those expenses

    const food = getTheAmountAndMakeIntoNumber("input-field-1");
    const rent = getTheAmountAndMakeIntoNumber("input-field-2");
    const clothes = getTheAmountAndMakeIntoNumber("input-field-3");

    const TotalCost = food + rent + clothes;
    const TotalExpense = document.getElementById("total-expense");
    TotalExpense.innerText = TotalCost;

    const balance = document.getElementById("balance");
    const balance_amount = incomeAmount - TotalCost;
    balance.innerText = balance_amount;
}

function savingFunction() {
    const getBalance = document.getElementById("balance");
    const getBalanceString = getBalance.innerText;
    const finalBalance = parseFloat(getBalanceString);

    const percentage = getTheAmountAndMakeIntoNumber("percentage");
    const temp = percentage / 100;
    const getPercentage = finalBalance * temp;

    const savingAccount = document.getElementById("saving-acount");
    savingAccount.innerText = getPercentage;

    const remainningBalance = document.getElementById("remainning-balance");
    const remainningAmount = finalBalance - getPercentage;
    remainningBalance.innerText = remainningAmount;
}