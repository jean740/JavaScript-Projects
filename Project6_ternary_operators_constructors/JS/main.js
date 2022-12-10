function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}
var John = new Vehicle("Dodge", "Viper", 2020, "Blue");
var Jane = new Vehicle("Jeep", "Wagoneer", 2010, "Beige");
var Katie = new Vehicle("Ford", "Focus", 2005, "Silver");
function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML =
    "Katie drives a " + Katie.Vehicle_Color + "-colored " + Katie.Vehicle_Model +
    " manufactured in " + Katie.Vehicle_Year;
}

function count_Function() {
    document.getElementById("Counting").innerHTML = Count();
    function Count() {
        var Starting_point = 24;
        function Plus_one() {Starting_point += 0;}
        Plus_one();
        return Starting_point;
        document.write(24)
    }
}