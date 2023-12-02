// var button = document.querySelector("#button")
var buttons = $(".saveBtn")
// var buttons = document.querySelectorAll(".saveBtn")

function saveAction () {
  console.log("Saving!")

  var textToSave = this.previousElementSibling.value
  var key = this.previousElementSibling.previousElementSibling.textContent
  
  localStorage.setItem(key, textToSave)
  
  // console.log("Saving on button!")
  // var text = document.querySelector("#text");
  // var textToSave = text.value;

  // localStorage.setItem("text", textToSave)
}

function loadAction () {
  var textareas = $(".description")

  textareas.each(function() {
    var key = this.previousElementSibling.textContent;

    var savedText = localStorage.getItem(key)

    this.value = savedText

  })

  // var savedText = localStorage.getItem("text");

  // var text = document.querySelector("#text");
  // text.value = savedText
}


function loadColor () {
  var divs = $(".row")

  var currentHour = dayjs().hour();
  // var currentHour = 12

  divs.each(function() {
    console.log(this)

    var hour = this.id.split("-")[1]
    // hour-9
    // ["hour", "9"]
    //    0      1

    if(currentHour > hour) {
      this.classList.add("past")
    }

    if(currentHour == hour) {
      this.classList.add("present")
    }

    if(currentHour < hour) {
      this.classList.add("future")
    }
  })
}

// for(i = 0; i < buttons.length; i++) {
//   buttons[i].addEventListener("click", saveAction)
// }
buttons.on("click", saveAction)

loadAction()

loadColor()











//////////////////////////////////////////////////////////

// var button2 = document.querySelector("#button2")

// function saveAction2 () {
//   console.log("Saving on button 2!")
//   var text2 = document.querySelector("#text2");
//   var textToSave = text2.value;

//   localStorage.setItem("text2", textToSave)
// }

// function loadAction2 () {
//   var savedText = localStorage.getItem("text2");

//   var text2 = document.querySelector("#text2");
//   text2.value = savedText
// }

// button2.addEventListener("click", saveAction2)

// loadAction2()

// //////////////////////////////////////////////////////////
// var button3 = document.querySelector("button3")

// function saveaction4 () {
//   console.log("Saving on button 3!")
// }

  
//   button3.addEventListener("click",saveAction3)
// //////////////////////////////////////////////////////////
// var button4 = document.querySelector("button4")

// function saveaction4 () {
//   console.log("Saving on button 4!")
// }
// button4.addEventListener("click" , saveaction4)
// ///////////////////////////////////////////////
// var button5 = document.querySelector("button5")

// funciton saveaction5 () {
//  console.log("Saving on button 5!") 
// }


// button5.addEventListener("click" .saveaction5)
// ///////////////////////////////////////////////
// var button5 = document.querySelector("button5"6

// funciton saveaction5 () {
//  console.log("Saving on button 6!") 
// }


// button5.addEventListener("click" .saveaction6)















// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
// $(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
// });
