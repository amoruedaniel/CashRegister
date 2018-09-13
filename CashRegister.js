function checkCashRegister(price, cash, cid) {
    const REGISTER_STATUS = {
        registerOpen: "OPEN",
        registerClosed: "CLOSED",
        registerInsufficient: "INSUFFICIENT_FUNDS"
    }
    
    let cashRegister = {status: '', change: cid};
    let changeDue = cash - price;
    
    const cashAddition = (a , b) => a + b[1];
    let cashInDrawer = cid.reduce(cashAddition, 0).toFixed(2);
    
    console.log(changeDue);
    console.log(cashInDrawer)

    if (changeDue > cashInDrawer){
        cashRegister.status = REGISTER_STATUS.registerInsufficient;
        cashRegister.change = [];
    }

    console.log(cashRegister);

    // Here is your change, ma'am.
    return cashRegister;
  }
  
  // Example cash-in-drawer array:
  // [["PENNY", 1.01],
  // ["NICKEL", 2.05],
  // ["DIME", 3.1],
  // ["QUARTER", 4.25],
  // ["ONE", 90],
  // ["FIVE", 55],
  // ["TEN", 20],
  // ["TWENTY", 60],
  // ["ONE HUNDRED", 100]]
  
  checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);