// DATE FUNCTIONALITY
const date = new Date();
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const dateHeadingElement = document.getElementById("date-heading");

dateHeadingElement.innerText = `Today is ${date.toLocaleTimeString(undefined, {hour: "numeric", minute: "numeric", hour12: true})} on ${days[date.getDay()]}, ${date.getDate()} ${months[date.getMonth()]}, ${date.getFullYear()}`;

// FORM FUNCTIONALITY
const personalInfoElement = document.getElementById("personal-info");
const personalInfoForm = document.getElementById("personal-info-form");
const usernameEntry = document.getElementById("username-entry");
const feelingEntry = document.getElementById("feeling-entry");
const polgygonNumberEntry = document.getElementById("polygon-number-entry");

personalInfoForm.addEventListener('submit', (e) => {
    e.preventDefault();
    personalInfoElement.innerText = `The Adept Viper welcomes you, ${capitalize(usernameEntry.value.toLowerCase())}! We're glad you are doing ${feelingEntry.value.toLowerCase()}!`;
    alert(`Given your number: ${polgygonNumberEntry.value} - Your polygon is a ${getPolygon(parseInt(polgygonNumberEntry.value))}!`);
})

const getPolygon = (num) => {
    let polygonName;

    switch (num) {
        case 0:
            polygonName = "Nonegon";
            break;
        case 1:
            polygonName = "Henagon";
            break;
        case 2:
            polygonName = "Digon";
            break;
        case 3:
            polygonName = "Trigon";
            break;
        case 4:
            polygonName = "Tetragon";
            break;
        case 5:
            polygonName = "Pentagon";
            break;
        case 6:
            polygonName = "Hexagon";
            break;
        case 7:
            polygonName = "Heptagon";
            break;
        case 8:
            polygonName = "Octagon";
            break;
        case 9:
            polygonName = "Enneagon";
            break;
        case 10:
            polygonName = "Decacon";
            break;
    }
    return polygonName;
}

//FIVE FUNCTION FUNCTIONALITY
const snake_SFX = new Audio("./audio/snake_hiss.mp3")
const phoneDial_SFX = new Audio("./audio/phone_dial.mp3");
const originalBackgroundColor = document.body.style.backgroundColor;
let isSirenActive = false;
let sirenId1;
let sirenId2;

const releaseViperButton = document.getElementById("releaseViper")
const sirensButton = document.getElementById("sirens")
const blackoutButton = document.getElementById("blackout")
const contactButton = document.getElementById("contact")
const lockdownButton = document.getElementById("lockdown")

releaseViperButton.addEventListener('click', () => {
    snake_SFX.play();
});

sirensButton.addEventListener('click', () => {
    if (isSirenActive) {deactivateSirens();} else {activateSirens();}
});

function activateSirens() {
    sirenId1 = setInterval(() => {document.body.style.backgroundColor = "#781400";}, 1000);
    sirenId2 = setInterval(() => {document.body.style.backgroundColor = "#002463";}, 2000);
    isSirenActive = true;
}

function deactivateSirens() {
    clearInterval(sirenId1);
    clearInterval(sirenId2);
    document.body.style.backgroundColor = originalBackgroundColor;
    isSirenActive = false;
}

blackoutButton.addEventListener('click', () => {
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
});

contactButton.addEventListener('click', () => {
    phoneDial_SFX.play();
});

phoneDial_SFX.addEventListener('ended', () => {
    window.location.href = "https://www.charlottenc.gov/cmpd/ePolicing-Resources/Report-A-Crime-Online";
})

lockdownButton.addEventListener('click', () => {
    const documentElements = Array.from(document.getElementsByTagName("body"));

    if (isSirenActive) {deactivateSirens();}

    documentElements.forEach((e) => {
        e.remove();
    });
});

// HELPER FUNCTION
function capitalize(str) {
    let slicedString = str.split(' ');
    for (let i = 0; i < slicedString.length; i++) {
        slicedString[i] = slicedString[i].replace(slicedString[i][0], slicedString[i][0].toUpperCase());
    }
    return slicedString.join(' ');
}