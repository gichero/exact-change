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

function checkCashRegister(price, cash, cashInDrawer){
        var change = cash - price;

        var drawer = cashInDrawer.reduce(function(accumulator, currentValue){
            return accumulator + currentValue[1];
        }, 0.0);

        if(drawer < change){
            return 'Insufficient Funds';
        }
        if(drawer === change){
            return 'Closed';
        }
        if(noChange(change)){
            return 'No Change';
        }
        if(price < 0){
            return 'Invalid Entry';
        }
        if(cash < 0){
            return 'Invalid Entry';
        }
        cashInDrawer = cashInDrawer.reverse();

        var result = denominations.reduce(function(acc, curr, index) {
            if(change >= curr.value){
                var currentValue = 0.00;

                while(change >= curr.value && cashInDrawer[index][1] >=

                    curr.value){

                        currentValue += curr.value;
                        change -= curr.value;
                        change = Math.round(change * 100) / 100;
                        cashInDrawer[index][1] -= curr.value;
                    }

                    acc.push([cashInDrawer[index][0], currentValue]);

                    return acc;
                } else {
                    return acc;
                }

            }, []);

            if(result.length > 0 && change == 0){
                return result;
            } else {
                return 'Insufficient Funds';
            }

            function noChange(price, cash, cashInDrawer){
                return change == 0 && drawer > 0;
            }
}
