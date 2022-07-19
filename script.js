const focusCols = document.querySelectorAll(".col");

focusCols.forEach((focusCol) => {
  focusCol.addEventListener("mouseover", () => {
    removeActiveColClass();
    focusCol.classList.add("activeCol");
  })
})

function removeActiveColClass() {
  focusCols.forEach((focusCol) => {
    focusCol.classList.remove("activeCol");
  })
} 

const base = [0, 9, 18, 27, 36, 45 ,54, 63, 72, 81, 90, 99, 108, 117, 126, 135];

// const rowNo1 = [1, 10, 19, 28, 37, 46 ,55, 64, 73, 82, 91, 100, 109, 118, 127, 136];
// const rowNo2 = [2, 11, 20, 29, 38, 47, 56, 65, 74, 83, 92, 101, 110, 119, 128, 137];
// const rowNo3 = [3, 12, 21, 30, 39, 48, 57, 66, 75, 84, 93, 102, 111, 120, 129, 138];
// const rowNo4 = [4, 13, 22, 31, 40, 49, 58, 67, 76, 85, 94, 103, 112, 121, 130, 139];
// const rowNo5 = [5];
// const rowNo6 = [6, 15];
// const rowNo7 = [7, 16];
// const rowNo8 = [8, 17];
// const rowNo0 = [9, 18, 27, 36, 45, 54, 63, 72, 81, 90, 99, 108, 117, 126, 135, 144];
// const rowNo10 = [];
// const rowNo11 = [];
// const rowNo13 = [];
// const rowNo14 = [];
// const rowNo15 = [];
// const rowNo16 = [];

const focusRows = document.querySelectorAll(".row");

focusRows.forEach((focusRow) => {
  focusRow.addEventListener("mouseover", () => {
    removeActiveRowClass();
    // focusRow.classList.add("activeRow");
    var baseAdjuster = focusRow.innerHTML % 9;
    if (baseAdjuster === 0) {
      baseAdjuster = 9;
    }
    console.log(baseAdjuster);
    for (let rowActivator = -1 + baseAdjuster; rowActivator < 145; rowActivator += 9) {
      document.getElementsByClassName("row")[rowActivator].classList.add("activeRow");
    }
    focusRow.classList.add("activePanel");
      })

})

function removeActiveRowClass() {
  focusRows.forEach((focusRow) => {
    focusRow.classList.remove("activeRow");
    focusRow.classList.remove("activePanel");
  })
} 
