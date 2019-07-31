//--------------------------reset input to null-----------------------------
class reset {
  static inputToZero() {
    document.getElementById("main-input").value = "";
  }

  static allOutput() {
    document.getElementById("output1").innerHTML = "0";
    document.getElementById("output2").innerHTML = "0";
    document.getElementById("output3").innerHTML = "0";
    document.getElementById("output4").innerHTML = "0";
    document.getElementById("output5").innerHTML = "0";
    document.getElementById("output6").innerHTML = "0";
  }

  static executionStage() {
    //clear input when unit has changed during execution
    document.getElementById("all-units").addEventListener("change", calc);
    let allUnits = document.getElementById("all-units");
    function calc() {
      if (allUnits.options[1].selected == true) {
        reset.inputToZero();
        reset.allOutput();
      } else if (allUnits.options[2].selected == true) {
        reset.inputToZero();
        reset.allOutput();
      } else if (allUnits.options[3].selected == true) {
        reset.inputToZero();
        reset.allOutput();
      } else if (allUnits.options[4].selected == true) {
        reset.inputToZero();
        reset.allOutput();
      } else if (allUnits.options[5].selected == true) {
        reset.inputToZero();
        reset.allOutput();
      } else if (allUnits.options[6].selected == true) {
        reset.inputToZero();
        reset.allOutput();
      } else if (allUnits.options[7].selected == true) {
        reset.inputToZero();
        reset.allOutput();
      }
    }
  }
}
//--------------------------change placeholder text-------------------------
class changePlaceholderTo {
  static default() {
    let mainInput = document.getElementById("main-input");
    mainInput.placeholder = "Please select unit";
  }
  static pounds() {
    let mainInput = document.getElementById("main-input");
    mainInput.placeholder = "Enter pounds...........";
  }

  static grams() {
    let mainInput = document.getElementById("main-input");
    mainInput.placeholder = "Enter grams...........";
  }

  static kilograms() {
    let mainInput = document.getElementById("main-input");
    mainInput.placeholder = "Enter kilograms...........";
  }

  static tonne() {
    let mainInput = document.getElementById("main-input");
    mainInput.placeholder = "Enter tonnes...........";
  }

  static miligrams() {
    let mainInput = document.getElementById("main-input");
    mainInput.placeholder = "Enter miligrams...........";
  }

  static micrograms() {
    let mainInput = document.getElementById("main-input");
    mainInput.placeholder = "Enter micrograms...........";
  }

  static ounces() {
    let mainInput = document.getElementById("main-input");
    mainInput.placeholder = "Enter ounces...........";
  }
}

class setInput {
  static toNonEditable() {
    document.getElementById("main-input").readOnly = true;
  }

  static toEditable() {
    document.getElementById("main-input").readOnly = false;
  }
}

class output {
  static visible() {
    document.getElementById("output").style.visibility = "visible";
  }

  static invisible() {
    document.getElementById("output").style.visibility = "hidden";
  }
}

//--------------------------conversion for all units-------------------------
class makeConversion {
  //listen for input and convert on input change
  static poundsToAll() {
    document.getElementById("main-input").addEventListener("input", convert);

    function convert(e) {
      output.visible();

      //to grams
      let pounds = e.target.value;
      document.getElementById("text-output1").innerText = "Grams:";
      document.getElementById("output1").innerHTML = pounds / 0.0022046;

      //to kilograms
      let pounds2 = e.target.value;
      document.getElementById("text-output2").innerText = "Kilograms:";
      document.getElementById("output2").innerHTML = pounds2 / 2.2046;

      //to ounces
      let pounds3 = e.target.value;
      document.getElementById("text-output3").innerText = "Ounces:";
      document.getElementById("output3").innerHTML = pounds3 * 16;

      //to tonnes
      let pounds4 = e.target.value;
      document.getElementById("text-output4").innerText = "Tonnes:";
      document.getElementById("output4").innerHTML = pounds4 * 16;

      //to miligrams
      let pounds5 = e.target.value;
      document.getElementById("text-output5").innerText = "Miligrams:";
      document.getElementById("output5").innerHTML = pounds5 * 453592.37;

      //to micrograms
      let pounds6 = e.target.value;
      document.getElementById("text-output6").innerText = "Micrograms:";
      document.getElementById("output6").innerHTML = pounds6 * 4.536e8;
    }
  }

  static gramsToAll() {
    document.getElementById("main-input").addEventListener("input", convert2);

    function convert2(e) {
      output.visible();
      //to pounds
      let grams = e.target.value;
      document.getElementById("text-output1").innerText = "Pounds:";
      document.getElementById("output1").innerHTML = grams / 453.592;

      //to kilograms
      let grams2 = e.target.value;
      document.getElementById("text-output2").innerText = "Kilograms:";
      document.getElementById("output2").innerHTML = grams2 / 1000;

      //to ounces
      let grams3 = e.target.value;
      document.getElementById("text-output3").innerText = "Ounces:";
      document.getElementById("output3").innerHTML = grams3 / 28.35;

      //to tonnes
      let grams4 = e.target.value;
      document.getElementById("text-output4").innerText = "Tonnes:";
      document.getElementById("output4").innerHTML = grams4 / 1e6;

      //to miligrams
      let grams5 = e.target.value;
      document.getElementById("text-output5").innerText = "Miligrams:";
      document.getElementById("output5").innerHTML = grams5 * 10000;

      //to micrograms
      let grams6 = e.target.value;
      document.getElementById("text-output6").innerText = "Micrograms:";
      document.getElementById("output6").innerHTML = grams6 / 1e6;
    }
  }

  static tonnesToAll() {
    document.getElementById("main-input").addEventListener("input", convert3);

    function convert3(e) {
      output.visible();
      //to pounds
      let tonnes = e.target.value;
      document.getElementById("text-output1").innerText = "Pounds:";
      document.getElementById("output1").innerHTML = tonnes * 2204.623;

      //to kilograms
      let tonnes2 = e.target.value;
      document.getElementById("text-output2").innerText = "Kilograms:";
      document.getElementById("output2").innerHTML = tonnes2 * 1000;

      //to ounces
      let tonnes3 = e.target.value;
      document.getElementById("text-output3").innerText = "Ounces:";
      document.getElementById("output3").innerHTML = tonnes3 * 35273.962;

      //to grams
      let tonnes4 = e.target.value;
      document.getElementById("text-output4").innerText = "Grams:";
      document.getElementById("output4").innerHTML = tonnes4 * 1e6;

      //to miligrams
      let tonnes5 = e.target.value;
      document.getElementById("text-output5").innerText = "Miligrams:";
      document.getElementById("output5").innerHTML = tonnes5 * 1e9;

      //to micrograms
      let tonnes6 = e.target.value;
      document.getElementById("text-output6").innerText = "Micrograms:";
      document.getElementById("output6").innerHTML = tonnes6 * 1e12;
    }
  }

  static kilogramsToAll() {
    document.getElementById("main-input").addEventListener("input", convert4);

    function convert4(e) {
      output.visible();
      //to pounds
      let kilograms = e.target.value;
      document.getElementById("text-output1").innerText = "Pounds:";
      document.getElementById("output1").innerHTML = kilograms * 2.205;

      //to tonnes
      let kilograms2 = e.target.value;
      document.getElementById("text-output2").innerText = "Tonnes:";
      document.getElementById("output2").innerHTML = kilograms2 / 1000;

      //to ounces
      let kilograms3 = e.target.value;
      document.getElementById("text-output3").innerText = "Ounces:";
      document.getElementById("output3").innerHTML = kilograms3 * 35.274;

      //to grams
      let kilograms4 = e.target.value;
      document.getElementById("text-output4").innerText = "Grams:";
      document.getElementById("output4").innerHTML = kilograms4 * 1000;

      //to miligrams
      let kilograms5 = e.target.value;
      document.getElementById("text-output5").innerText = "Miligrams:";
      document.getElementById("output5").innerHTML = kilograms5 * 1e6;

      //to micrograms
      let kilograms6 = e.target.value;
      document.getElementById("text-output6").innerText = "Micrograms:";
      document.getElementById("output6").innerHTML = kilograms6 * 1e9;
    }
  }

  static ouncesToAll() {
    document.getElementById("main-input").addEventListener("input", convert5);

    function convert5(e) {
      output.visible();
      //to pounds
      let ounces = e.target.value;
      document.getElementById("text-output1").innerText = "Pounds:";
      document.getElementById("output1").innerHTML = ounces / 16;

      //to tonnes
      let ounces2 = e.target.value;
      document.getElementById("text-output2").innerText = "Tonnes:";
      document.getElementById("output2").innerHTML = ounces2 / 35273.962;

      //to Kilograms
      let ounces3 = e.target.value;
      document.getElementById("text-output3").innerText = "Kilograms:";
      document.getElementById("output3").innerHTML = ounces3 / 35.274;

      //to grams
      let ounces4 = e.target.value;
      document.getElementById("text-output4").innerText = "Grams:";
      document.getElementById("output4").innerHTML = ounces4 * 28.35;

      //to miligrams
      let ounces5 = e.target.value;
      document.getElementById("text-output5").innerText = "Miligrams:";
      document.getElementById("output5").innerHTML = ounces5 * 28349.523;

      //to micrograms
      let ounces6 = e.target.value;
      document.getElementById("text-output6").innerText = "Micrograms:";
      document.getElementById("output6").innerHTML = ounces6 * 2.835e7;
    }
  }

  static miligramsToAll() {
    document.getElementById("main-input").addEventListener("input", convert6);

    function convert6(e) {
      output.visible();
      //to pounds
      let miligrams = e.target.value;
      document.getElementById("text-output1").innerText = "Pounds:";
      document.getElementById("output1").innerHTML = miligrams / 453592.37;

      //to tonnes
      let miligrams2 = e.target.value;
      document.getElementById("text-output2").innerText = "Tonnes:";
      document.getElementById("output2").innerHTML = miligrams2 / 1e9;

      //to Kilograms
      let miligrams3 = e.target.value;
      document.getElementById("text-output3").innerText = "Kilograms:";
      document.getElementById("output3").innerHTML = miligrams3 / 1e6;

      //to grams
      let miligrams4 = e.target.value;
      document.getElementById("text-output4").innerText = "Grams:";
      document.getElementById("output4").innerHTML = miligrams4 / 1000;

      //to ounces
      let miligrams5 = e.target.value;
      document.getElementById("text-output5").innerText = "Ounces:";
      document.getElementById("output5").innerHTML = miligrams5 / 28349.523;

      //to micrograms
      let miligrams6 = e.target.value;
      document.getElementById("text-output6").innerText = "Micrograms:";
      document.getElementById("output6").innerHTML = miligrams6 * 1000;
    }
  }

  static microgramsToAll() {
    document.getElementById("main-input").addEventListener("input", convert7);

    function convert7(e) {
      output.visible();
      //to pounds
      let micrograms = e.target.value;
      document.getElementById("text-output1").innerText = "Pounds:";
      document.getElementById("output1").innerHTML = micrograms / 4.536e8;

      //to tonnes
      let micrograms2 = e.target.value;
      document.getElementById("text-output2").innerText = "Tonnes:";
      document.getElementById("output2").innerHTML = micrograms2 / 4.536e12;

      //to Kilograms
      let micrograms3 = e.target.value;
      document.getElementById("text-output3").innerText = "Kilograms:";
      document.getElementById("output3").innerHTML = micrograms3 / 1e9;

      //to grams
      let micrograms4 = e.target.value;
      document.getElementById("text-output4").innerText = "Grams:";
      document.getElementById("output4").innerHTML = micrograms4 / 1e6;

      //to ounces
      let micrograms5 = e.target.value;
      document.getElementById("text-output5").innerText = "Ounces:";
      document.getElementById("output5").innerHTML = micrograms5 / 2.835e7;

      //to miligrams
      let micrograms6 = e.target.value;
      document.getElementById("text-output6").innerText = "Miligrams:";
      document.getElementById("output6").innerHTML = micrograms6 / 1000;
    }
  }
}
