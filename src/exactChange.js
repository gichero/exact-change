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

        var register = cashInDrawer.reduce(function(a, b){
            return a + b[1];
        }, 0.0);

        if(noChange(change)){
            return 'No Change';
        }
        if(isNegativeNumber(price, cash, cashInDrawer)){
            return 'Invalid Input';
        }
        if(price < 0){
            return 'Invalid Entry';
        }
        if(cash < 0){
            return 'Invalid Entry';
        }
        if(register < change){
            return 'Insufficient Funds';
        }
        if(register === change){
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

            function noChange(price, cash, cashInDrawer){
                return change == 0 && register > 0;
            }

            function isNegativeNumber(price, cash, cashInDrawer){
                return result < 0;
            }

            if(result.length > 0 && change == 0){
                return result;
            } else {
                return 'Insufficient Funds';
            }
}

// checkCashRegister(19.50, 20.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]);

//using lodash (submitted solution sept-2017)
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

//refactored code (submitted 11-26-17)
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

        if(drawer.total < change){
            return 'Insufficient Funds';
        }
        if(drawer.total === change){
            return 'Closed';
        }
        if(price < 0){
            return 'Invalid Entry';
        }
        if(cash < 0){
            return 'Invalid Entry';
        }
        if(change == 0 && drawer.total > 0){
            return 'No Change';
        }

        var result = denominations.reduce(function(accumulator, currentValue){
            var val = 0;

            while(drawer[currentValue.name] > 0  && change >= currentValue.value){
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

        if(result.length < 1 || change > 0){
            return 'Insufficient Funds';
        }
        return result;
}
 checkCashRegister(19.50, 20.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]);
