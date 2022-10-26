function more_Math() {
    var simple_Math = (1 + 2) * 10 / 2 -5; //This part uses addition, substraction, multiplcation and division
    document.getElementById("Math").innerHTML = "2 plus 8, multiplied by 5, divived in half and then subtracted by 5 equals " + simple_Math;
}

function modulus_Operator() {
    var simple_Math = 25 % 6; //This part uses a precentage
    document.getElementById("Math").innerHTML = "When you divide 25 by 6 you have a remainder of: " + simple_Math;
}

function negation_Operator() {
    var x = 10; //This gives a negative value
    document.getElementById("Math").innerHTML = -x;
}

function increment_Math() {
    var x = 5; //This one add to the value
    x++;
    document.write(x);
}

function decrement_Math() {
    var x = 5.25; //This one takes away for the value
    x--;
    document.write(x);
}

window.alert(Math.random() * 100); //This gives a ramdom value
