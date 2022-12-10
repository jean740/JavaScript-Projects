var x = 10;
function Add_numbers_1() {
    document.write(20 + x + "<br>");
}
function Add_number_2() {
    document.write(x + 100);
}
Add_numbers_1();
Add_number_2();

function Add_numbers_1() {
    var x = 10;
    document.write(20 + x + "<br");
}
function Add_number_2() {
    document.write(x + 100);
    }
Add_numbers_1();
Add_number_2();

function Add_numbers_1() {
    var x = 10;
    console.log(15 + x);
}
function Add_number_2() {
    console.log(x + 100);
}
Add_numbers_1();
Add_number_2();

function Time_function() {
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "It is morning time!";
    }
    else if (Time > 12 == Time < 18) {
        Reply = "It is the afternoon.";
    }
    else {
        Reply = "It is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const d = new Date();
let month = months[d.getMonth()];

function get_Date() {
    if (new Date().getHours() < 18) {
        document.getElementById("Greeting").innerHTML = "Hope your having a good day!";
    }
}

function Age_Function() {
    Age = document.getElementById("Age") .value;
    if (Age >= 18) {
        Vote = "You are old enough to vote!";
    }
    else {
        Vote = "You are not old enough to vote!";
    }
    document.getElementById("How_old_are_you?").innerHTML = Vote;
}