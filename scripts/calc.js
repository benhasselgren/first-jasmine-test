Calculator = function(){
    this.value = 0;
};

Calculator.prototype.add = function(number){
    if(typeof(number) == "number"){
        this.value += number;
    }else{
        alert("Argument must be a number");
    }
};

DrinkAbout = function(){
    this.value = "";
    this.fizzValue ="";
};

DrinkAbout.prototype.whatCanIDrink = function(age){
    if(age < 0 ){
        this.value =  "Sorry. I can’t tell what drink because that age is incorrect!";
    }else if(age < 14 && age >= 0){
        this.value = "Drink Toddy!";
    }else if(age < 18 && age >= 14){
        this.value = "Drink Coke!";
    }else if(age < 21 && age >= 18){
        this.value = "Drink Beer";
    }else if(age < 130 && age >= 21){
        this.value = "Drink Whisky!";
    }else{
        this.value = "Sorry. I can’t tell what drink because that age is incorrect!"
    }
};

DrinkAbout.prototype.fizzBuzz = function(number){
    if((number % 3) === 0 && (number % 5) === 0){
        this.fizzValue =  "FizzBuzz";
    }else if((number % 3) === 0){
        this.fizzValue = "Fizz";
    }else if((number % 5) === 0){
        this.fizzValue = "Buzz";
    }else{
        this.fizzValue = number;
    }
};