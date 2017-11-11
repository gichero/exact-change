
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
        if(price < 0){
            return 'Invalid Entry';
        }
        if(cash < 0){
            return 'Invalid Entry';
        }
        if(noChange(drawer, change)){
            return 'No Change';
        }
        cashInDrawer = cashInDrawer.reverse();
        var zipped = _.zip(denominations, cashInDrawer);

        var result = zipped.reduce(function(acc, currPair) {
            var currName = currPair[0];
            var currValue = currPair[1];
            if(change >= currName.value){
                var currentValue = 0.00;

                while(change >= currName.value && currValue[1] >=

                    currName.value){

                        currentValue += currName.value;
                        change -= currName.value;
                        change = Math.round(change * 100) / 100;
                        currValue[1] -= currName.value;
                    }

                    acc.push([currValue[0], currentValue]);

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
}
function noChange(drawer, change){
    return change == 0 && drawer > 0;
}
