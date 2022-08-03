const gameContainer = document.getElementById("game");
const COLORS = [
  "red",
  "blue",
  "green",
  "orange",
  "purple",
  "red",
  "blue",
  "green",
  "orange",
  "purple"
];

// here is a helper function to shuffle an array
// it returns the same array with values shuffled
// it is based on an algorithm called Fisher Yates if you want ot research more
function shuffle(array) {
  let counter = array.length;

  // While there are elements in the array
  while (counter > 0) {
    // Pick a random index
    let index = Math.floor(Math.random() * counter);

    // Decrease counter by 1
    counter--;

    // And swap the last element with it
    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }

  return array;
}

let shuffledColors = shuffle(COLORS);

// this function loops over the array of colors
// it creates a new div and gives it a class with the value of the color
// it also adds an event listener for a click for each card
function createDivsForColors(colorArray) {
  for (let color of colorArray) {
    // create a new div
    const newDiv = document.createElement("div");

    // give it a class attribute for the value we are looping over
    newDiv.classList.add(color);

    // call a function handleCardClick when a div is clicked on
    newDiv.addEventListener("click", handleCardClick);

    // append the div to the element with an id of game
    gameContainer.append(newDiv);
  }
}
// TODO: Implement this function!
var z = 0;
function handleCardClick(event) {
  // you can use event.target to see which element was clicked
  console.log("you just clicked", event.target);
  const cardColor = event.target.getAttribute('class');
if (z<2){
  for (let j = 0; j<=10; j++){
    if (cardColor == COLORS[j]){
      event.target.classList.add("clicked");
      event.target.style.backgroundColor = COLORS[j];
    }
 
  }
  z++;
  var clickTest = document.querySelectorAll('.clicked');
  if(clickTest.length >= 2){
    let k = 0;
    var tempClick = document.querySelectorAll('.clicked');
    setTimeout(function(){ 

    while(k<2){
      if(tempClick[0].classList.value == tempClick[1].classList.value){
        tempClick[0].setAttribute('class', 'correct');
        tempClick[1].setAttribute('class', 'correct');
      }
      tempClick[k].classList.remove('clicked');
      if (tempClick[k].classList.value != 'correct'){
        tempClick[k].style.backgroundColor = 'white';
      }
      k++;
      z--;
      }
    }, 1000);
  
  }

}
}

// when the DOM loads
createDivsForColors(shuffledColors);
