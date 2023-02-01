const homeOne = document.getElementById("one-point")
const homeTwo = document.getElementById("two-point")
const homeThree = document.getElementById("three-point")
const guestOne = document.getElementById('one-points')
const guestTwo = document.getElementById('two-points')
const guestThree = document.getElementById('three-points')
const homeScore = document.getElementById('home-score')
const guestScore = document.getElementById('guest-score')
const resetBtn = document.getElementById('reset-btn')


let homePoints = 0
let guestPoints = 0

homeScore.textContent = homePoints
guestScore.textContent = guestPoints

homeOne.addEventListener('click', function(){
    homePoints += 1
    homeScore.textContent = homePoints
})

homeTwo.addEventListener('click', function(){
    homePoints += 2
    homeScore.textContent = homePoints
})

homeThree.addEventListener('click', function(){
    homePoints += 3
    homeScore.textContent = homePoints
})


guestOne.addEventListener('click', function(){
        
        guestPoints += 1
    guestScore.textContent = guestPoints
})

guestTwo.addEventListener('click', function(){
    guestPoints += 2
    guestScore.textContent = guestPoints
})

guestThree.addEventListener('click', function(){
    guestPoints += 3
    guestScore.textContent = guestPoints
})

resetBtn.addEventListener('click', function(){
    homePoints = 0
    guestPoints = 0
    homeScore.textContent = homePoints
    guestScore.textContent = guestPoints
})





