
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
            accumulator.total += currentValue[1];
            accumulator[currentValue[0]] = currentValue[1];
            return accumulator;
        }, {total: 0.0});

        if(insufficientFunds(drawer, change)){
            return ('Insufficient Funds')
        }
        if(transactionClosed(drawer, change)){
            return ('Closed')
        }
        if(entryInvalid(price, cash)){
            return ('Invalid Entry')
        }
        if(noChange(drawer, change)){
            return ('No Change')
        }

        var result = denominations.reduce(function(accumulator, currentValue){
            var val = 0;

            while(canTakeAdditionalDenomination(drawer, currentValue, change)){
                change -= currentValue.value;
                drawer[currentValue.name] -= currentValue.value;
                val += currentValue.value;
                change = Math.round(change * 100) / 100;
            }
            if(val > 0){
                accumulator.push([currentValue.name, val]);
            }
            return accumulator;
        },[]);

        if(result.length < 1 || change > 0){git 
            return 'Insufficient Funds';
        }
        return result;
    }

function insufficientFunds(drawer, change){
    return drawer.total < change;
}
function transactionClosed(drawer, change){
    return drawer.total === change;
}
function entryInvalid(price, cash){
    return price < 0 || cash < 0;
}
function noChange(drawer, change){
    return change == 0 && drawer.total > 0
}
function canTakeAdditionalDenomination (drawer, currentValue, change){
    return drawer[currentValue.name] > 0  && change >= currentValue.value
}
