// get user's data
// get user's coordinates
async function getUserCoordinates() {
    let position = await new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject);
    });
    return [position.coords.latitude, position.coords.longitude];
}
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
// build ad 2
async function createAd2() {
    const userCoords = getUserCoordinates();
    let ad2Div = document.querySelector(".ad2");
    let adText = document.createElement("p");
    const href = `https://www.google.com/maps/search/coffee/@${userCoords[0]},${userCoords[1]},14z/data=!3m1!4b1?entry=ttu`;
    adText.innerHTML = `It is time for a cup of coffee.<a href=${href}> Here are some awesome coffee shops</a>. Enjoy!`;
    ad2Div.append(adText);
}
// event listeners
// on load, build ads
window.onload = () => {
    createAd1();
    createAd2();
};
