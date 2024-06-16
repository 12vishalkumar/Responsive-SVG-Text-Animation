//************************************* Declearing the required variavles *****************
const prev_name = document.getElementById('mytext');
const button = document.getElementById('btn');
const textName = document.getElementById('textName');
const permanent_Name = 'Vishal Kumar';


//************************************ update Text function ********************************
function updateText() {
    const name = textName.value.trim() || permanent_Name;
    prev_name.textContent = name.toUpperCase();
    adjustFontSize();
}

function adjustFontSize() {
    const textElement = document.getElementById('mytext');
    const svgElement = document.getElementById('svg');
    const containerWidth = svgElement.viewBox.baseVal.width;
    //********************************** Reset font size ***********************************
    textElement.style.fontSize = '15vw';
    while (textElement.getComputedTextLength() > containerWidth - 20 && parseFloat(getComputedStyle(textElement).fontSize) > 10) {
        const fontSize = parseFloat(getComputedStyle(textElement).fontSize);
        textElement.style.fontSize = (fontSize - 1) + 'px';
    }
}

//****************************************** addEventListener function for key press *******
textName.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        updateText();
    }
});

button.addEventListener('click', updateText);
//****************************************** Initial call to set the text correctly on load **
updateText(); 
