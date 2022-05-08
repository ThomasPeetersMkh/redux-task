import store from "./data";
import "./style.scss";
import { addColor, changeColor, changeName } from "./data/colorPicker";

const ul = document.querySelector("ul");

const render = () => {
  ul.innerHTML = `
  ${store
    .getState()
    .reducer.map(({ id, name, hex }) => {
      return `<li><div class="block" style="background-color:${hex};"></div><p style="color:${hex};" contenteditable data-key="${id}" class="colorName">${name}</p><input data-key="${id}" class="colorInput" type="color" id="color" name="color"
      value="${hex}"> </li>`;
    })
    .join("")}`;
};

render();

const form = document.querySelector("form");
const name = document.querySelector("#name");
const hex = document.querySelector("#hex");

store.subscribe(render);

form.addEventListener("submit", (e) => {
  e.preventDefault();
  store.dispatch(
    addColor({
      name: name.value,
      hex: hex.value,
    })
  );
  form.reset();
});

ul.addEventListener("change", (e) => {
  if (e.target.classList.contains("colorInput")) {
    store.dispatch(
      changeColor({
        id: e.target.dataset.key,
        hex: e.target.value,
      })
    );
  }
});
ul.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    if (e.target.classList.contains("colorName")) {
      console.log(e.target.innerText);
      store.dispatch(
        changeName({
          id: e.target.dataset.key,
          name: e.target.innerText,
        })
      );
    }
  }
});
