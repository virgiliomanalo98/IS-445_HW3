var genArray = [];
var sumNum = 0;
var binaryArray = [];

function getArray(){

    var start = prompt("Enter the start:");
    var startNum = parseInt(start);
    if (isNaN(start)==true){
        document.getElementById("array").innerHTML = "Invalid integer input, please reload and try again.";
    }

var end = prompt("Enter the end:");
var endNum = parseInt(end);
if (isNaN(end)==true){
    document.getElementById("array").innerHTML = "Invalid integer input, please reload and try again.";
}

var step = prompt("Enter the step:");
var stepNum = parseInt(step);
if (isNaN(step)==true){
    document.getElementById("array").innerHTML.innerHTML = "Invalid integer input, please reload and try again.";
}

var arrayNum = startNum;
    var binaryNum = startNum.toString(2);
sumNum = startNum;
genArray.push(startNum);
binaryArray.push(binaryNum);

if (stepNum >= 0) {
    for (i = startNum; i >= startNum && i< endNum;){
        arrayNum = arrayNum + stepNum;
        genArray.push(arrayNum);

                    arrayBinary = (arrayNum).toString(2);
                    binaryArray.push(arrayBinary);
        sumNum = sumNum + arrayNum;
        i = i + stepNum;
    }
}

else if (stepNum <= 0) {
    for (i = startNum; i <= startNum && i> endNum;) {
        arrayNum = arrayNum +stepNum;
        genArray.push(arrayNum);

                    arrayBinary=(arrayNum).toString(2);
                    binaryArray.push(arrayBinary);

        sumNum = sumNum + arrayNum;
        i = i + stepNum
    }
}
    if (isNaN(start)==false && isNaN(end)==false && isNaN(step)==false){
            document.getElementById("array").innerHTML = "The generated array is " + genArray;
            document.getElementById("sum").innerHTML = "The generated sum is " + sumNum;
            document.getElementById("binary").innerHTML = "The binary of absolute element values are: " + binaryArray;
    }
}

getArray;