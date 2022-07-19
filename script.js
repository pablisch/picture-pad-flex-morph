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

const focusRows = document.querySelectorAll(".row");

focusRows.forEach((focusRow) => {
  focusRow.addEventListener("mouseover", () => {
    removeActiveRowClass();
    focusRow.classList.add("activePanel");
    var baseAdjuster = focusRow.innerHTML % 9;
    if (baseAdjuster === 0) {
      baseAdjuster = 9;
    }
    console.log(baseAdjuster);
    for (let rowActivator = -1 + baseAdjuster; rowActivator < 145; rowActivator += 9) {
      document.getElementsByClassName("row")[rowActivator].classList.add("activeRow");
    }
    
      })

})

function removeActiveRowClass() {
  focusRows.forEach((focusRow) => {
    focusRow.classList.remove("activeRow");
    focusRow.classList.remove("activePanel");
  })
} 
