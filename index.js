"strict";
const hidden = document.querySelector(".hidden");
const unhide = document.querySelector(".unhide_text");
const submit = document.querySelector(".submit_button");
let button_modal = document.querySelectorAll(".button");
const selected_text = document.querySelector(".selected");

let number = 0;
// loop through button number = [i]
const loop_button = () => {
  for (let i = 0; i < button_modal.length; i++) {
    button_modal[i].addEventListener("click", function () {
      number = button_modal[i].value;
    });
  }
};

// secondary screen codes and text
const pop_up = () => {
  hidden.classList.remove("hidden");
  unhide.classList.add("hidden");
  let text = ` You selected ${number} out of 5`;
  selected_text.textContent = text;
};

// keydown event
document.addEventListener("keydown", function (event) {
  if (event.key === "Escape" && !hidden.classList.contains("hidden")) {
    hidden.classList.add("hidden");
    unhide.classList.remove("hidden");
  }
});
// functions call
loop_button();
submit.addEventListener("click", pop_up);
