function myDisplayer(some) {
    document.getElementById("demo").innerHTML = some;
}

function myCalculator(num1, num2, num3, num4, myCallback) {
    let sum = num1 + num2 + num3 + num4;
    myCallback(sum);
}

myCalculator(5, 20, 50, 39, myDisplayer);

//Sequence Control and Callback Functions
//A callback is a function passed as an argument to another function.
//When pass a function as an argument, do not use parenthesis.