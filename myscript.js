var feet = document.getElementById("feet");
var inches = document.getElementById("inch");

feet.addEventListener('input', function(){

    let f = this.value;
    let i = f*12;             //Converting feet into inches --> 1 foot = 12 inches.

    inches.value = i;        // After converting, we are printing that value into INCHES box.

});

inches.addEventListener('input', function(){

    let i = this.value;     
    let f = i/12;           // Similarly, here we are converting inches to feet

    if(!Number.isInteger(f)){  //--> this 'if-block' is used when u r getting too large numbers after decimal point. 
        f = f.toFixed(2);       //   So this will print only 2 digits after decimal point in the FEET box.
    };

    feet.value = f;         // After converting, we are printing that value into FEET box.

});

