describe ('Result', function(){

    it('should return insufficient funds when the cashInDrawer is less than change', function(){
        var result = checkCashRegister(5.00, 20.00, [['TEN', 10.00]]);
        expect(result).toEqual('Insufficient Funds');
    })
    it('should return closed when cashInDrawer is equal to change', function(){
        var result = checkCashRegister(5.00, 10.00, [['FIVE', 5.00]] )
        expect(result).toEqual('Closed');
    })
    it('should not return change where it is not required', function(){
        var result = checkCashRegister(10.00, 10.00, [['TEN', 10.00]]);
        expect(result).toEqual('insufficient funds');
    })
    it('should return the correct change', function(){
        var result = checkCashRegister(30.00, 40.00, [['FIVE', 10.00], ['ONE', 7.00], ['QUARTER', 2.25]]);
        expect(result).toEqual([['FIVE', 10.00]]);
    })
    it('should return no change when the price equals the cash', function(){
        var result = checkCashRegister(5.00, 5.00, [['TWENTY', 100.00], ['TEN', 40.00], ['FIVE', 25.00], ['ONE', 11.00], ['QUARTER', 5.00]]);
        expect(result).toEqual('No Change');
    })
    it("should return invalid input if price and/or cash are negative numbers", function() {

        var result = "Invalid Input";

        expect(checkCashRegister(-30.00, 40.00, [['FIVE', 10.00], ['ONE', 7.00], ['QUARTER', 2.25]])).toEqual(result);
        expect(checkCashRegister(30.00, -40.00, [['FIVE', 10.00], ['ONE', 7.00], ['QUARTER', 2.25]])).toEqual(result);
        expect(checkCashRegister(-30.00, -40.00, [['FIVE', 10.00], ['ONE', 7.00], ['QUARTER', 2.25]])).toEqual(result);
  })
})
