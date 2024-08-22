
// 1. Grab the save-el paragrah and store it in a variable called saveEl
let countEl = document.getElementById("count-el")
let count = 0
let saveEl = document.getElementById('save-el')

function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    let countStr = count + ' - '
    // 2. Create a variable that contains both the count and the dash separator, i.e. "12 - "
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0 
    // 3. Render the variable in the saveEl using innerText
    // NB: Make sure to not delete the existing content of the paragraph
    console.log(count)
}

function clear() {
  countEl.textContent = 0
}
