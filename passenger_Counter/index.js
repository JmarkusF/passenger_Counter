

// Console.log the value after each step
// Create a variable, bonusPoints. Initialize it as 50. Increase it to 100.
let bonusPoints = 50

console.log(bonusPoints)

bonusPoints = bonusPoints + 50

console.log(bonusPoints)
// Decrease it down to 25, and then finally increase it to 70
bonusPoints = bonusPoints - 75

console.log(bonusPoints)

bonusPoints = bonusPoints + 45

console.log(bonusPoints)


// Create a function (you decide the name) that logs out the number 42 to the console
function hitchHikersGuide() {
    console.log(42)
}
// Call/invoke the function
hitchHikersGuide()

let lap1 = 34
let lap2 = 33
let lap3 = 36

// Create a function that logs out the sum of all the lap times

function totalLapTime() {
    
  let totalTime = lap1 +lap2 +lap3
    
    console.log(totalTime)
    }
    
totalLapTime()


// Create a function that increments the lapsCompleted variable with one

let lapsCompleted = 0
function lapCount() {

    lapsCompleted = lapsCompleted + 1

}
lapCount ()
lapCount()
lapCount()

console.log(lapsCompleted)

// Run it three times


// intialize the count as 0
let sbwyGoerCount = 0;


// listen for clicks on the increment button

let button = document.getElementById("increment-btn");
 
let countEl = document.getElementById('count-el')

button.addEventListener('click', function() {
    sbwyGoerCount = sbwyGoerCount + 1
    
    countEl.innerHTML = sbwyGoerCount;

});

// increment the count variable when the button is clicked
// change the count-el in the HTML to reflect the new count

function increment() {
   let count = 0
   count = count + 1
   console.log(count) 
}