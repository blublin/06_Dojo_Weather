// Set initial values for items and store others;

// Set Days
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const d = new Date();

// 3rd day
let dayPlusTwo = days[d.getDay()+2];

// fourth day
let dayPlusThree = days[d.getDay()+3];

// Values for temperatures
let dayOneHigh = 24, dayOneLow = 18;
let dayTwoHigh = 27, dayTwoLow = 19;
let dayThreeHigh = 21, dayThreeLow = 16;
let dayFourHigh = 26, dayFourLow = 21;

// Set html temps
function setInitialValues() {
    // Day text
    document.querySelector("#date-plus-three h4").innerText = dayPlusThree;
    document.querySelector("#date-plus-two > h4").innerText = dayPlusTwo;
    // Temperature text - high
    document.querySelector("#today .temp-high").innerText = dayOneHigh;
    document.querySelector("#tomorrow .temp-high").innerText = dayTwoHigh;
    document.querySelector("#date-plus-two .temp-high").innerText = dayThreeHigh;
    document.querySelector("#date-plus-three .temp-high").innerText = dayFourHigh;
    // Temperature text - low
    document.querySelector("#today .temp-low").innerText = dayOneLow;
    document.querySelector("#tomorrow .temp-low").innerText = dayTwoLow;
    document.querySelector("#date-plus-two .temp-low").innerText = dayThreeLow;
    document.querySelector("#date-plus-three .temp-low").innerText = dayFourLow;
}

setInitialValues();

function closeCookies() {
    // Delete/remove cookies div
    document.querySelector("#cookies").remove();
}

function youDoneSomething() {
    alert("Loading weather report...");
}

function convertTemps(element) {
    let cel = "cel", fah = "fah";
    let previous = cel;
    // Skip check if same value applied, no need to convert
    if (element.value == previous) {
        return;
    }

    // all temp classes should match, so finding first is enough
    let currScale = document.querySelector("#today span");

    for (let elem of document.querySelectorAll(".temp-high-low > p")) {
        if (currScale.classList.contains(cel)) {
            break;
        }
    }
}