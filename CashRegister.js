function checkCashRegister(price, cash, cid) {
    const REGISTER_STATUS = {
        registerOpen: "OPEN",
        registerClosed: "CLOSED",
        registerInsufficient: "INSUFFICIENT_FUNDS"
    }
    
    let cashRegister = {status: '', change: cid};
    let changeDue = parseFloat(cash - price).toFixed(2);
    
    const cashAddition = (a , b) => a + b[1];
    let cashInDrawer = cid.reduce(cashAddition, 0).toFixed(2);

    if (Number(changeDue) === Number(cashInDrawer)){
        cashRegister.status = REGISTER_STATUS.registerClosed;
        cashRegister.change = cid;
    }else if (Number(changeDue) > Number(cashInDrawer)){
        cashRegister.status = REGISTER_STATUS.registerInsufficient;
        cashRegister.change = [];
    }else {
        cashRegister.status = REGISTER_STATUS.registerOpen;
        cashRegister.change = calculateCustomerChange(changeDue, cid);


    }

    function calculateCustomerChange(changeDue, currencyInDrawer){
        const changeArray = [];
        const currencyDictionary = {
            "PENNY"         :  0.01,
            "NICKEL"        :  0.05,
            "DIME"          :  0.10,
            "QUARTER"       :  0.25,
            "ONE"           :  1.00,
            "FIVE"          :  5.00,
            "TEN"           : 10.00,
            "TWENTY"        : 20.00,
            "ONE HUNDRED"   : 100.00
        };

        for (let i = currencyInDrawer.length -1; i >= 0; i-- ){
            const currencyName = currencyInDrawer[i][0];
            const currencyValue = currencyDictionary[currencyName];
            const currenyTotal = currencyInDrawer[i][1];
            let currencyAmmount = (currenyTotal / currencyValue).toFixed(2);
            let currencyToReturn = 0;

            while (changeDue >= currencyValue && currencyAmmount > 0){
                changeDue -= currencyValue;
                changeDue = changeDue.toFixed(2);
                currencyAmmount --;
                currencyToReturn++;
            }

            if (currencyToReturn > 0){
                changeArray.push([currencyName, currencyToReturn * currencyValue]);
            }
            
            if (changeDue == 0.00){
                return changeArray;
            }else if (i === 0){
                cashRegister.status = REGISTER_STATUS.registerInsufficient;
                return [];
            }else{

            }
        }
    }



    console.log(cashRegister);
    return cashRegister;
  }
  

  
  checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);