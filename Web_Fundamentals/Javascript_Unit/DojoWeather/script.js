//::after is helpful for doing the math for conversion 
//move the degree into the ::after 

function message(elem){
    alert("Loading weather report for " + elem.innerText);
}

function remove(elem) {
    var removeElement = document.querySelector('#' + elem);
    removeElement.remove();
}

var redText = document.querySelectorAll('.red-text');
var blueText = document.querySelectorAll('.blue-text');

function convertTemperature(choice) {
    if (choice.value == 'F'){
        for (var i = 0; i < redText.length; i++){
            var redTempInF = parseInt(redText[i].innerText)*1.8+32;
            var blueTempInF = parseInt(blueText[i].innerText)*1.8+32;
            redText[i].innerText = Math.round(redTempInF);
            blueText[i].innerText = Math.round(blueTempInF);
        }
    } 
    if (choice.value == 'C'){
        for (var i2 = 0; i2 < redText.length; i2++){
            var redTempInC = (parseInt(redText[i2].innerText)-32)*(5/9);
            var blueTempInC = (parseInt(blueText[i2].innerText)-32)*(5/9);
            redText[i2].innerText = Math.round(redTempInC);
            blueText[i2].innerText = Math.round(blueTempInC);
        }
    }
}


