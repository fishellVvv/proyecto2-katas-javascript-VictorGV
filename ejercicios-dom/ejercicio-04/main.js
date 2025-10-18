// 4.1
const btn = document.createElement("button");
btn.textContent = "Click";
btn.id = "btnToClick";
document.body.appendChild(btn);

btn.addEventListener("click", (ev) => console.log(ev));

// 4.2
const inputFocus = document.querySelector(".focus");
inputFocus.addEventListener("focus", (ev) => {
  console.log(ev.currentTarget.value);
});

// 4.3
const inputValue = document.querySelector(".value");
inputValue.addEventListener("input", (ev) => {
  console.log(ev.currentTarget.value);
});
