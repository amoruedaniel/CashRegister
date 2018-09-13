function checkCashRegister(price, cash, cid) {
    const REGISTER_STATUS = {
        registerOpen: "OPEN",
        registerClosed: "CLOSED",
        registerInsufficient: "INSUFFICIENT_FUNDS"
    }
    
    let cashRegister = {status: '', change: cid};
    let changeDue = (cash - price).toFixed(2);
    
    const cashAddition = (a , b) => a + b[1];
    let cashInDrawer = cid.reduce(cashAddition, 0).toFixed(2);
    
    console.log(changeDue);
    console.log(cashInDrawer)

    if (changeDue === cashInDrawer){
        cashRegister.status = REGISTER_STATUS.registerClosed;
        cashRegister.change = cid;
    }

    if (changeDue > cashInDrawer){
        cashRegister.status = REGISTER_STATUS.registerInsufficient;
        cashRegister.change = [];
    }


    console.log(cashRegister);
    return cashRegister;
  }
  

  
  checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);