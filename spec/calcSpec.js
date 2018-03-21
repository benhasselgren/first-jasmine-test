describe("Calculator", function(){
    
    beforeEach(function(){
        calc = new Calculator();
    });
    
    describe("Add method", function(){
        it("should take two arguments and then return the sum of those arguments", function(){
            calc.add(2);
            calc.add(2);
            expect(calc.value).toBe(4);
        });
        
        it("should not return 4 if the arguments given don't produce a sum of 4", function(){
            calc.add(7);
            calc.add(19);
            expect(calc.value).toBe(26);
        });
        
        it("should have called the alert function if either number is undefined", function(){
            spyOn(window, "alert");
            calc.add("hello");
            expect(window.alert).toHaveBeenCalledWith("Argument must be a number");
        });
    });
});

describe("DrinkAbout", function(){
    
    beforeEach(function(){
        drinkAbout = new DrinkAbout();
    });
    
    describe("Add method", function(){
        it("should return ", function(){
            drinkAbout.whatCanIDrink(-3);
            expect(drinkAbout.value).toBe("Sorry. I can’t tell what drink because that age is incorrect!");
        });
        
        it("should not return 4 if the arguments given don't produce a sum of 4", function(){
            drinkAbout.whatCanIDrink(4);
            expect(drinkAbout.value).toBe("Drink Toddy!");
        });
        
        it("should not return 4 if the arguments given don't produce a sum of 4", function(){
            drinkAbout.whatCanIDrink(14);
            expect(drinkAbout.value).toBe("Drink Coke!");
        });
        
        it("should not return 4 if the arguments given don't produce a sum of 4", function(){
            drinkAbout.whatCanIDrink(19);
            expect(drinkAbout.value).toBe("Drink Beer");
        });
        
        it("should not return 4 if the arguments given don't produce a sum of 4", function(){
            drinkAbout.whatCanIDrink(50);
            expect(drinkAbout.value).toBe("Drink Whisky!");
        });
        
        it("should not return 4 if the arguments given don't produce a sum of 4", function(){
            drinkAbout.whatCanIDrink("jjhjh");
            expect(drinkAbout.value).toBe("Sorry. I can’t tell what drink because that age is incorrect!");
        });
    });
});

describe("FizzBuzz", function(){
    
    beforeEach(function(){
        fizz = new DrinkAbout();
        
    });
    
    describe("Add method", function(){
        it("should take two arguments and then return the sum of those arguments", function(){
            fizz.fizzBuzz(30)
            expect(fizz.fizzValue).toBe("FizzBuzz");
        });
        
        it("b", function(){
            fizz.fizzBuzz(12)
            expect(fizz.fizzValue).toBe("Fizz");
        });
        
        it("c", function(){
            fizz.fizzBuzz(20)
            expect(fizz.fizzValue).toBe("Buzz");
        });
    });
});