const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const date = new Date();
const dateInfoElement = document.getElementById("date-info");
const personalFormSubmitButton = document.getElementById("personal-info-submit");
const personalInfoTextElement = document.getElementById("personal-info-text");
const nameEntry = document.getElementById("name-entry");
const feelingEntry = document.getElementById("feeling-entry");
const personalInfoForm = document.getElementById("personal-info");


dateInfoElement.innerText = `Today is ${date.toLocaleTimeString(undefined, {hour: "numeric", minute: "numeric", hour12: true})} on ${days[date.getDay()]}, ${date.getDate()} ${months[date.getMonth()]}, ${date.getFullYear()}`;

personalFormSubmitButton.addEventListener('click', () => {
    personalInfoTextElement.innerText = `The Adept Viper welcomes you, ${nameEntry.value}! We're glad you are doing ${feelingEntry.value}!`;
});

personalInfoForm.addEventListener('submit', (e) => {
    e.preventDefault();
})