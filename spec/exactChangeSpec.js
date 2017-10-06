describe ('Result', function(){

    it('should return insufficient funds when the cashInDrawer is less than change', function(){
        var result = checkCashRegister(5.00, 20.00, [['PENNY', 0.00], ['NICKEL', 0.00], ['DIME', 0.00], ['QUARTER', 0.00], ['ONE', 0.00], ['FIVE', 10.00], ['TEN', 0.00]['TWENTY', 0.00], ['ONE HUNDRED', 0.00]]);
        expect(result).toEqual('Insufficient Funds');
    })

    it('should return closed when cashInDrawer is equal to change', function(){
        var result = checkCashRegister(5.00, 10.00, [['PENNY', 0.00],['NICKEL', 0.00],['DIME', 0.00],['QUARTER', 0.00],['ONE', 0.00],['FIVE', 5.00], ['TEN', 0.00], ['TWENTY', 0.00], ['ONE HUNDRED', 0.00]]);
        expect(result).toEqual('Closed');
    })

    it('should return insufficient funds when the cashInDrawer exceeds the change but the denomination is higher than the change', function(){
        var result = checkCashRegister(9.50, 10.00, [['ONE HUNDRED', 0.00], ['TWENTY', 0.00], ['TEN', 0.00], ['FIVE', 0.00], ['ONE', 1.00], ['QUARTER', 0.00], ['DIME', 0.00], ['NICKEL', 0.00], ['PENNY', 0.01]]);
        expect(result).toEqual('Insufficient Funds');
    })

    it('should return the correct change', function(){
        var result = checkCashRegister(5.00, 10.00, [['PENNY', 2.00], ['NICKEL', 4.00], ['DIME', 2.00], ['QUARTER', 2.25], ['ONE', 17.00], ['FIVE', 30.00], ['TEN', 60.00], ['TWENTY', 40.00], ['ONE HUNDRED', 200.00]]);
        expect(result).toEqual([['FIVE', 5.00]]);
    })

    it('should return no change when the price equals the cash', function(){
        var result = checkCashRegister(5.00, 5.00, [['QUARTER', 2.50], ['ONE', 11.00], ['FIVE', 25.00], ['TEN', 40.00], ['TWENTY', 100.00]]);
        expect(result).toEqual('No Change');
    })

    it("should return invalid entry if price and/or cash are negative numbers", function() {

        var result = "Invalid Entry";

        expect(checkCashRegister(-30.00, 40.00, [['QUARTER', 2.25], ['ONE', 7.00], ['FIVE', 40.00]])).toEqual(result);
        expect(checkCashRegister(30.00, -40.00, [['QUARTER', 2.25], ['ONE', 7.00], ['FIVE', 40.00]])).toEqual(result);
        expect(checkCashRegister(-30.00, -40.00, [['QUARTER', 2.25], ['ONE', 7.00], ['FIVE', 40.00]])).toEqual(result);
  })
})
