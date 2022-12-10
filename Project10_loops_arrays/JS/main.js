function count_To_Ten() {
    var Digit = "";
    var x = 1;
    while (x < 11) {
      Digit += "<br>" + x;
      x++;
    } 
    document.getElementById("Counting_To_Ten").innerHTML= Digit;
}