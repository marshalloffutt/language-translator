// Print to Dom Function
const printToDom = (stringToPrint, divId) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = stringToPrint;
};

// Dictionary object
let dictionary = {
    happy: ["happy", "щастлив", "hamingjusöm", "ευτυχισμένος"],
    halloween: ["halloween", "Хелоуин", "Hrekkjavaka", "Απόκριες"],
    ghost: ["ghost", "призрак", "draugur", "φάντασμα"],
    witch: ["witch", "вещица", "norn", "μάγισσα"],
    spooky: ["spooky", "зловещ", "skuggalegt", "στοιχειωμένος"],
    haunt: ["haunt", "натрапчива", "ásækja", "στέκι"],
    fright: ["fright", "уплаха", "ótti", "τρομάρα"]
}


//This way seems too long. I will keep it for now in case I want to return to it, but I will be using the cleaner one.
// let bulgarian = {
//     happy: "щастлив", 
//     halloween: "Хелоуин",
//     ghost: "призрак",
//     witch: "вещица",
//     spooky: "зловещ",
//     haunting: "натрапчива",
//     fright: "уплаха"
// }

// let icelandic = {
//     happy: "hamingjusöm", 
//     halloween: "Hrekkjavaka",
//     ghost: "draugur",
//     witch: "norn",
//     spooky: "skuggalegt",
//     haunting: "ásækja",
//     fright: "ótti"
// }

// let greek = {
//     happy: "ευτυχισμένος", 
//     halloween: "Απόκριες",
//     ghost: "φάντασμα",
//     witch: "μάγισσα",
//     spooky: "στοιχειωμένος",
//     haunting: "στέκι",
//     fright: "τρομάρα"
// }