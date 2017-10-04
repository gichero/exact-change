describe ('change', function(){

    it('should return insufficient funds when the cashInDrawer is less than change', function(){
        var result = checkCashRegister(5.00, 20.00, [['TEN', 10.00]]);
        expect(result).toEqual('Insufficient Funds');
    })
    it('should return closed when cashInDrawer is equal to change', function(){
        var result = checkCashRegister(5.00, 10.00, [['FIVE', 5.00]] )
        expect(result).toEqual('Closed');
    })
    it('should not return change where it is not required', function(){
        var result = checkCashRegister(10.00, 10.00, [['ONE HUNDRED', 100.00]]);
        expect(result).toEqual('insufficient funds');
    })
    it('should return the correct change', function(){
        var result = checkCashRegister(30.00, 40.00, [['FIVE', 10.00], ['ONE', 7.00], ['QUARTER', 2.25]])
        expect(result).toEqual([['FIVE', 10.00]]);
    })
    it("returns invalid input when the price is a negative number", function(){
        var result = checkCashRegister(-30.00, 40.00, [['FIVE', 10.00], ['ONE', 7.00], ['QUARTER', 2.25]]);
        expect(result).toEqual('Invalid Input');
    })

})
