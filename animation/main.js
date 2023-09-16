import bubbleSort from "./bubbleSort.js";
import selectionSort from "./selectionSort.js";
import insertionSort from "./insertionSort.js";
import quickSort from "./quickSort.js";
import heapSort from "./heapSort.js";
import { giveColor } from "./helpers.js";

export const visualisationBox = document.querySelector(".visualisation-box");

const headerElements = document.querySelector("header");
const allSortTypes = document.querySelectorAll(".algo");
const changeSize = document.getElementById("array-size");

let delay;

function generateArray(size = 78) {
  delay = 0.5 / size;

  // const array = [20, 80, 50, 30, 90, 40];

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

async function listener(sortType, targetElement, delay) {
  allSortTypes.forEach((el) => {
    if (el.id !== targetElement.id) {
      el.style.color = "#f00";
    }
    el.style.pointerEvents = "none";
  });

  //
  const arrayElement = Array.from(document.querySelectorAll(".array-element"));

  await sortType(arrayElement, delay);

  arrayElement.forEach((el) => giveColor(el, "#b88214"));
  //

  allSortTypes.forEach((el) => {
    el.style.pointerEvents = "all";
    el.style.color = "#fff";
  });
}

async function listenerQuickSort(targetElement) {
  allSortTypes.forEach((el) => {
    if (el.id !== targetElement.id) {
      el.style.color = "#f00";
    }
    el.style.pointerEvents = "none";
  });

  //
  const arrayElement = Array.from(document.querySelectorAll(".array-element"));

  await quickSort(arrayElement, 0, arrayElement.length - 1, delay);

  arrayElement.forEach((el) => giveColor(el, "#b88214"));

  //
  allSortTypes.forEach((el) => {
    el.style.pointerEvents = "all";
    el.style.color = "#fff";
  });
}

// Event handlers
changeSize.addEventListener("input", function (e) {
  const size = Number(e.target.value);

  visualisationBox.innerHTML = "";
  generateArray(size);
});

////////////////////////////////////////////

//global

headerElements.addEventListener("click", function (e) {
  const createArray = e.target.closest(".header__new-array");

  const btnBubbleSort = e.target.closest(".bubble-sort");
  const btnSelectionSort = e.target.closest(".selection-sort");
  const btnInsertionSort = e.target.closest(".insertion-sort");
  const btnQuickSort = e.target.closest(".quick-sort");
  const btnMergeSort = e.target.closest(".merge-sort");
  const btnHeapSort = e.target.closest(".heap-sort");

  // CREATE NEW ARRAY
  if (e.target === createArray) {
    const arrayElement = Array.from(
      document.querySelectorAll(".array-element")
    );

    visualisationBox.innerHTML = "";
    generateArray(arrayElement.length);
  }

  // SORT ALGORITMS
  if (e.target === btnBubbleSort) {
    listener(bubbleSort, e.target, delay);
  }

  if (e.target === btnSelectionSort) {
    listener(selectionSort, e.target, delay);
  }

  if (e.target === btnInsertionSort) {
    listener(insertionSort, e.target, delay);
  }

  if (e.target === btnQuickSort) {
    listenerQuickSort(e.target);
  }

  if (e.target === btnMergeSort) {
    console.log("merge");
  }

  if (e.target === btnHeapSort) {
    listener(heapSort, e.target, delay);
  }
});
