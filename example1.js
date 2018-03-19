
var input1 = [1, 2, 3, 4, 5, 6];
var input2 = [-3, -2, -1, 0, 1, 2, 3, 5, 7];

//var myElement = document.getElementById("example1Input");
//myElement.innerHTML = Average(input1);

alert("Example 1 output: "+Average(input1)); 
alert("Example 2 output: "+Average(input2)); 

alert(Shift("apple"));

function Average(input){

var sum = 0;
var count = 0;

for (i = 0; i < input.length; i++) { 

	if(input[i] % 2 != 0){
		sum += input[i];
    count += 1;    
	}
}

return sum/count;
}

function Shift(text) {

    text = text.toLowerCase();

    var result = '';
    var charcode = 0;

    for (var i = 0; i < text.length; i++) {
        charcode = (text[i].charCodeAt()) + 1;
        result += String.fromCharCode(charcode);
    }
    return result;
}
