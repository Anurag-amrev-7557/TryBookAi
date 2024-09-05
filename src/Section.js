const button = document.querySelector("#getstarted a button");
let width = windows.innerWidth;

export default function changeText() {
  if(width < 480) {
      button.textContent = "Get API";
  }
}

window.addEventListener("resize", changeText);

changeText();
