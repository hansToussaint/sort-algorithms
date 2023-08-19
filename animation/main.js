import quickSort from "./quickSort.js";
import bubbleSort from "./bubbleSort.js";
import { giveColor } from "./helpers.js";

export const visualisationBox = document.querySelector(".visualisation-box");

const createArray = document.querySelector(".header__new-array");
const changeSize = document.getElementById("array-size");

const btnBubbleSort = document.querySelector(".bubble-sort");
const btnSelectionSort = document.querySelector(".selection-sort");
const btnInsertionSort = document.querySelector(".insertion-sort");
const btnQuickSort = document.querySelector(".quick-sort");
const btnMergeSort = document.querySelector(".merge-sort");
const btnHeapSort = document.querySelector(".heap-sort");

function generateArray(size = 78) {
  // const array = [10, 80, 30, 90, 40, 50, 70];

  const array = Array.from(
    { length: size },
    () => Math.floor(Math.random() * 95) + 5
  );

  const markup = `
    <div class="array-container">${array
      .map(
        (el) =>
          `<div class="array-element" style="height: ${el / 1.7}rem; width: ${
            50 / size
          }rem; color: ${size > 15 ? "transparent" : "white"}">${el}</div>`
      )
      .join("")}</div>
  `;

  visualisationBox.insertAdjacentHTML("afterbegin", markup);
}
generateArray();

// Event handlers
changeSize.addEventListener("input", function (e) {
  const size = Number(e.target.value);

  visualisationBox.innerHTML = "";
  generateArray(size);
});

createArray.addEventListener("click", function () {
  const arrayElement = Array.from(document.querySelectorAll(".array-element"));

  visualisationBox.innerHTML = "";
  generateArray(arrayElement.length);
});

btnQuickSort.addEventListener("click", async function () {
  const delay = 0.009;
  const arrayElement = Array.from(document.querySelectorAll(".array-element"));

  await quickSort(arrayElement, 0, arrayElement.length - 1, delay);

  arrayElement.forEach((el) => giveColor(el, "#b88214"));
});

btnBubbleSort.addEventListener("click", async function () {
  const delay = 0.003;
  const arrayElement = Array.from(document.querySelectorAll(".array-element"));

  await bubbleSort(arrayElement, delay);

  arrayElement.forEach((el) => giveColor(el, "#b88214"));
});
