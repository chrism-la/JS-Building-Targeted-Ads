// get user's data
// get user's coordinates

// get user's time
function getUserTime() {
    const currentTime = new Date();
    return currentTime.getHours();
}

// helper functions
// check time of day
function getMeal() {
    const currentHour = getUserTime();
    if (currentHour > 0 && currentHour <= 11) return "breakfast";
    else if (currentHour > 11 && currentHour <= 16) return "lunch";
    else if (currentHour > 16 && currentHour <= 20) return "dinner";
    else return "late night snack";
}
// build ads
// build ad 1
function createAd1() {
    const meal = getMeal();
    let ad1Div = document.querySelector(".ad1");
    let adText = document.createElement("p");
    adText.innerHTML = `We have <strong>the best ${meal}</strong> in town. Come and try us!`;
    ad1Div.append(adText);
}
createAd1();
// build ad 2

// event listeners
// on load, build ads
