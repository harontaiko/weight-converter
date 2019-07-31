/****************
 MAIN JAVASCRIPT
 */
//set default placeholder
document.getElementById("main-input").placeholder = "Please select unit";

//hide output by default
document.getElementById("output").style.visibility = "hidden";
//get element from DOM
document.getElementById("all-units").addEventListener("change", convertunits);
setInput.toNonEditable();

function convertunits() {
  //get main input and dropdownlist
  let mainInput = document.getElementById("main-input");
  let allUnits = document.getElementById("all-units");

  if (allUnits.options[0].selected == true) {
    setInput.toNonEditable();
    reset.inputToZero();
    changePlaceholderTo.default();
    output.invisible();
    //pounds unit----------------------------------------------
  } else if (allUnits.options[1].selected == true) {
    setInput.toEditable();
    reset.inputToZero();
    changePlaceholderTo.pounds();
    makeConversion.poundsToAll();
    //clear input when unit has changed during execution
    reset.executionStage();
    //grams unit----------------------------------------------
  } else if (allUnits.options[2].selected == true) {
    setInput.toEditable();
    changePlaceholderTo.grams();
    makeConversion.gramsToAll();
    reset.executionStage();
  }
  //tonne unit----------------------------------------------
  else if (allUnits.options[3].selected == true) {
    setInput.toEditable();
    changePlaceholderTo.tonne();
    makeConversion.tonnesToAll();
    reset.executionStage();
  }
  //kilogram unit---------------------------------------------
  else if (allUnits.options[4].selected == true) {
    setInput.toEditable();
    changePlaceholderTo.kilograms();
    makeConversion.kilogramsToAll();
    reset.executionStage();
    //ounces unit----------------------------------------------
  } else if (allUnits.options[5].selected == true) {
    setInput.toEditable();
    changePlaceholderTo.ounces();
    makeConversion.ouncesToAll();
    reset.executionStage();
  }
  //miligrams unit------------------------------------------------------
  else if (allUnits.options[6].selected == true) {
    setInput.toEditable();
    changePlaceholderTo.miligrams();
    makeConversion.miligramsToAll();
    reset.executionStage();
  }
  //microgram unit-------------------------------------------------------
  else if (allUnits.options[7].selected == true) {
    setInput.toEditable();
    changePlaceholderTo.micrograms();
    makeConversion.microgramsToAll();
    reset.executionStage();
  }
}

//display formula for at least one conversion
