

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

//
// New Lesson
//


// Create a function (you decide the name) that logs out the number 42 to the console
function hitchHikersGuide() {
    console.log(42)
}
// Call/invoke the function
hitchHikersGuide()



//
// New Lesson
//

let lap1 = 34
let lap2 = 33
let lap3 = 36

// Create a function that logs out the sum of all the lap times

function totalLapTime() {
    
  let totalTime = lap1 +lap2 +lap3
    
    console.log(totalTime)
    }
    
totalLapTime()

// 
// New Lesson
//

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



//
// New Lesson 
//


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

let count = 0
function increment() {
   count = count + 1
   console.log(count) 
}

// 1. Create a function, save(), which logs out the count when it's called

function save() {
    console.log(count)
}


// 
// New lesson 
//


let username = "per"

// Create a variable, message, that stores the string: "You have tree new notifications"

let message = "You have tree new notifications"
console.log(messageToUser)

// Create a variable, messageToUser, that contains the message we have logged

let messageToUser = message + ', ' + username + '!'



//
// New Lesson 
//

// Create two variables, name and greeting. The name variable should store your name,
// and the greeting should store e.g. "Hi, my name is "

let name = 'John Fowler'
let greeting = 'Hi, my name is '


// Create a third variable, myGreeting, that contatenates the two strings
let myGreeting = greeting + name
// Log myGreeting to the console

console.log(myGreeting)



//
// New Lesson : Render a welcome Message
//

// Grab the welcome-el paragraph and store it in a variable called welcomeEl
let welcomeEl = document.getElementById("welcome-el")

// Create two variables (name & greeting) that contains your name
// and the greeting we want to render on the page

let name = "John Fowler"
let greeting = "Welcome back "

// Render the welcome message using welcomeEl.innerText
welcomeEl.innerText = greeting + name


//
// New Lesson : Improve the message with string concatenation
//

let welcomeEl = document.getElementById("welcome-el")

let name = "Per Harald Borgen"
let greeting = "Welcome back "

welcomeEl.innerText = greeting + name

// Add an emoji to the end! 👋
// WRITE YOUR CODE BELOW HERE
// HINT: count = count + 1

welcomeEl = welcomeEl + '👋' // incorrect
welcomeEl.innerText = welcomeEl.innerText + '👋' // correct
welcomeEl.innerText += '👋' // shorthand


//
// New Lesson : Use plus equal for count
//

let countEl = document.getElementById("count-el")
let count = 0

function increment() {
    // Change this to use the plus equal technique you've learned
    count += 1
    countEl.innerText = count
}

function save() {
    console.log(count)
}
