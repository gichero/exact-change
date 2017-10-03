describe ('denomination', function(){
    it('should return INSUFFICIENT FUNDS when the cashInDrawer is less than change', function(){
        var result = checkCashRegister(5.00, 20.00, [['TEN', 10.00]]);
        expect(result).toEqual('Insufficient Funds');
    })
    it('should return CLOSED when cashInDrawer is equal to change', function(){
        var result = checkCashRegister(5.00, 10.00, [['FIVE', 5.00]] )
        expect(result).toEqual('Closed');
    })
    it('should not return change where it is not required', function(){
        var result = checkCashRegister(100.00, 100.00, [['ONE HUNDRED', 100.00]]);
        expect(result).toEqual('insufficient funds');
    })
    it('should return the correct change', function(){
        var result = checkCashRegister(30.00, 40.00, [['FIVE', 10.00], ['ONE', 7.00], ['QUARTER', 2.25]])
        expect(result).toEqual([['FIVE', 10.00]]);
    })

    it("returns 'Invalid Input' if price and/or cash is Not a Number", function() {
    var NaNprice = "a";
    var NaNcash = "b";
    var result = "Invalid Input";

    expect(checkCashRegister(NaNprice, cash, cashInDrawer)).toEqual(result);
    expect(checkCashRegister(price, NaNcash, cashInDrawer)).toEqual(result);
    expect(checkCashRegister(NaNprice, NaNcash, cashInDrawer)).toEqual(result);
  })

  it("returns 'Invalid Input' if price and/or cash are negative numbers", function() {
    var result = "Invalid Input";

    expect(checkCashRegister(-price, cash, cashInDrawer)).toEqual(result);
    expect(checkCashRegister(price, -cash, cashInDrawer)).toEqual(result);
    expect(checkCashRegister(-price, -cash, cashInDrawer)).toEqual(result);
  })

})
