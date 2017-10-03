function checkCashRegister(price, cash, cashInDrawer){

    var denominations = [
        {name: 'ONE HUNDRED', value: 100.00},
        {name: 'TWENTY',      value: 20.00},
        {name: 'TEN',         value: 10.00},
        {name: 'FIVE',        value: 5.00},
        {name: 'ONE',         value: 1.00},
        {name: 'QUARTER',     value: 0.25},
        {name: 'DIME',        value: 0.10},
        {name: 'NICKEL',      value: 0.05},
        {name: 'PENNY',       value: 0.01}
        ];

        var change = cash - price;

        var register = cashInDrawer.reduce(function(a, b) {
            return a + b[1];
        }, 0.0);

        if(register < change){
            return 'Insufficient Funds';
        }else if(register == change){
            return 'Closed';
        }

        cashInDrawer = cashInDrawer.reverse();

        var result = denominations.reduce(function(acc, next, index) {
            if(change >= next.value){
                var currentValue = 0.00;

                while(change >= next.value && cashInDrawer[index][1] >=

                    next.value){
                        currentValue += next.value;
                        change -= next.value;
                        change = Math.round(change * 100) / 100;
                        cashInDrawer[index][1] -= next.value;
                    }
                    acc.push([cashInDrawer[index][0], currentValue]);

                    return acc;
                } else {
                    return acc;
                }

            }, []);

            if(result.length > 0 && change === 0){
                return result;
            } else {
                return 'insufficient funds';
            }

            function isNotNumber(cash, price, cashInDrawer) {
                return result == "not a number";
            }
}

// checkCashRegister(19.50, 20.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]);
