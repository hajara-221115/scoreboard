let homeEl = document.getElementById("home-score")
let homeScore = 0

function btnClicked1() {
    homeScore += 1
    homeEl.textContent = homeScore
}
function btnClicked2() {
    homeScore += 2
    homeEl.textContent = homeScore
}
function btnClicked3() {
    homeScore += 3
    homeEl.textContent = homeScore
}

let guestEl = document.getElementById("guest-score")
let guestScore = 0

function btnClicked11() {
    guestScore += 1
    guestEl.textContent = guestScore
}
function btnClicked22() {
    guestScore += 2
    guestEl.textContent = guestScore
}
function btnClicked33() {
    guestScore += 3
    guestEl.textContent = guestScore
}

// Add event listeners
document.getElementById("home-btn-1").addEventListener("click", btnClicked1)
document.getElementById("home-btn-2").addEventListener("click", btnClicked2)
document.getElementById("home-btn-3").addEventListener("click", btnClicked3)

document.getElementById("guest-btn-1").addEventListener("click", btnClicked11)
document.getElementById("guest-btn-2").addEventListener("click", btnClicked22)
document.getElementById("guest-btn-3").addEventListener("click", btnClicked33)