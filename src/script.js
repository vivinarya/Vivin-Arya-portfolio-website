const typingElement = document.getElementById("typing-text");

const typeArray = [
  "Web Developer",
  "Software Tester",
  "Coding Enthusiast",
];

let index = 0;
let isAdding = true;
let typeIndex = 0;

function playAnim() {
  typingElement.innerText = typeArray[typeIndex].slice(0, index);

  if (isAdding) {
    if (index >= typeArray[typeIndex].length) {
      isAdding = false;
      setTimeout(function () {
        playAnim(); 
      }, 1000); 
      return;
    } else {
      index++;
    }
  } else {
    if (index === 0) {
      isAdding = true;
      typeIndex++;
      if (typeIndex >= typeArray.length) {
        typeIndex = 0;
      }
    } else {
      index--;
    }
  }

  setTimeout(playAnim, isAdding ? 120 : 60); 
}
playAnim();

