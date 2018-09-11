// Print to Dom Function
const printToDom = (stringToPrint, divId) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML += stringToPrint;
};

// Variable to connect my final output into the DOM
let finalOutput;

// Objects for each language
const bulgarian = {
    happy: "щастлив", 
    halloween: "Хелоуин",
    ghost: "призрак",
    witch: "вещица",
    spooky: "зловещ",
    haunt: "натрапчива",
    fright: "уплаха"
};

const icelandic = {
    happy: "hamingjusöm", 
    halloween: "Hrekkjavaka",
    ghost: "draugur",
    witch: "norn",
    spooky: "skuggalegt",
    haunt: "ásækja",
    fright: "ótti"
};

const greek = {
    happy: "ευτυχισμένος", 
    halloween: "Απόκριες",
    ghost: "φάντασμα",
    witch: "μάγισσα",
    spooky: "στοιχειωμένος",
    haunt: "στέκι",
    fright: "τρομάρα"
};

// Define buttons
const buttonBulgarian = document.getElementById('bul');
const buttonIcelandic = document.getElementById('ice');
const buttonGreek = document.getElementById('gre');
const buttonLucky = document.getElementById('luc');

//Define value from textarea field, and turn it into an array.
const inputValue = () => {
    let toTranslate = document.getElementById('input-field').value.toLowerCase();
    let toTranslateArray = toTranslate.split(' ');
    console.log(toTranslateArray);
    return toTranslateArray;
};

// Make it talk
const itSpeaks = () => {
    let readTheWords = new SpeechSynthesisUtterance(finalOutput);
    window.speechSynthesis.speak(readTheWords);
};

// Translation functions
const bulgarianTranslator = () => {
    const words = inputValue();
    for (i=0; i < words.length; i++) {
     finalOutput = (bulgarian[words[i]]);
    }
    printToDom(finalOutput, "translated-text");
    itSpeaks(finalOutput);
};

const icelandicTranslator = () => {
    const words = inputValue();
    for (i=0; i < words.length; i++) {
     finalOutput = (icelandic[words[i]]);
    }
    printToDom(finalOutput, "translated-text");
    itSpeaks(finalOutput);
};

const greekTranslator = () => {
    const words = inputValue();
    for (i=0; i < words.length; i++) {
     finalOutput = (greek[words[i]]);
    }
    printToDom(finalOutput, "translated-text");
    itSpeaks(finalOutput);
};

const randomTranslator = () => {
    let randomizer = Math.floor((Math.random() * 3) + 1);
    if(randomizer === 1) {
        bulgarianTranslator(inputValue);
    } else if(randomizer === 2) {
        icelandicTranslator(inputValue);
    } else if(randomizer === 3){
        greekTranslator(inputValue);
    }
};

// Button event listeners
buttonBulgarian.addEventListener("click", bulgarianTranslator);
buttonIcelandic.addEventListener("click", icelandicTranslator);
buttonGreek.addEventListener("click", greekTranslator);
buttonLucky.addEventListener("click", randomTranslator);