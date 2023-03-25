const pacInput = document.getElementById('pac');
const shoInput = document.getElementById('sho');
const pasInput = document.getElementById('pas');
const driInput = document.getElementById('dri');
const defInput = document.getElementById('def');
const phyInput = document.getElementById('phy');
const overall = document.getElementById('overall');

function clearInput(){
    var getValue = document.getElementById("pac");
      if (getValue.value !="") {
          getValue.value = "";
      }

      var getValue= document.getElementById("sho");
      if (getValue.value !="") {
          getValue.value = "";
      }

      var getValue= document.getElementById("pas");
      if (getValue.value !="") {
          getValue.value = "";
      }

      var getValue= document.getElementById("dri");
      if (getValue.value !="") {
          getValue.value = "";
      }

      var getValue= document.getElementById("def");
      if (getValue.value !="") {
          getValue.value = "";
      }

      var getValue= document.getElementById("phy");
      if (getValue.value !="") {
          getValue.value = "";
      }

};

addEventListener('submit', function(e){
    e.preventDefault();
    const pac = pacInput.valueAsNumber;
    const sho = shoInput.valueAsNumber;
    const pas = pasInput.valueAsNumber;
    const dri = driInput.valueAsNumber;
    const def = defInput.valueAsNumber;
    const phy = phyInput.valueAsNumber;
    let ovr = calculator(pac,sho,pas,dri,def,phy);
    overall.replaceChildren(ovr,' OVR');
    clearInput();
})

function calculator(pac,sho,pas,dri,def,phy) {
    let number = pac + sho + pas + dri + def + phy;
    let finalNumber = number / 5.15
    return Math.floor(finalNumber);
}



function init() {
    // enable active states for buttons in mobile safari
    document.addEventListener("touchstart", function () {}, false);

    // setInputButtonState();
    // setBackgroundColor();
}

function handleNumberInput() {
    // setInputButtonState();
    // setBackgroundColor();
}

// function setBackgroundColor() {
//     const hue = document.getElementById("pac").value;
//     const saturation = document.getElementById("sho").value;
//     const lightness = document.getElementById("pas").value;

//     document.body.style.backgroundColor = "hsl(" + hue + "," + saturation + "%," + lightness + "%)";
// }

function handleNumberInputBlur(event) {
    const value = event.target.value;

    if (event.target.hasAttribute("min") && value < parseFloat(event.target.min))
        event.target.value = event.target.min;

    if (event.target.hasAttribute("max") && value > parseFloat(event.target.max))
        event.target.value = event.target.max;
}

// function setInputButtonState() {
//     const inputs = document.getElementsByClassName("number-input-text-box");

//     for (let input of inputs) {
//         if (input.id.length > 0) { // during value transition the old input won't have an id
//             const value = input.value;
//             const parent = input.parentElement.parentElement;

//             if (parent.children[0] && input.hasAttribute("min"))
//                 parent.children[0].disabled = value <= parseFloat(input.min);

//             if (parent.children[2] && input.hasAttribute("max"))
//                 parent.children[2].disabled = value >= parseFloat(input.max);
//         }
//     }
// }

function setNumber(event) {
    let button = event.target;
    let input = document.getElementById(button.dataset.inputId);

    if (input) {
        let value = parseFloat(input.value);
        let step = parseFloat(input.dataset.step);

        if (button.dataset.operation === "decrement") {
            value -= isNaN(step) ? 1 : step;
        } else if (button.dataset.operation === "increment") {
            value += isNaN(step) ? 1 : step;
        }

        if (input.hasAttribute("min") && value < parseFloat(input.min)) {
            value = input.min;
        }

        if (input.hasAttribute("max") && value > parseFloat(input.max)) {
            value = input.max;
        }

        if (input.value !== value) {
            setInputValue(input, value);
            // setInputButtonState();
        }
    }
}

function setInputValue(input, value) {
    let newInput = input.cloneNode(true);
    const parentBox = input.parentElement.getBoundingClientRect();

    input.id = "";

    newInput.value = value;

    if (value > input.value) {
        // right to left
        input.parentElement.appendChild(newInput);
        input.style.marginLeft = -parentBox.width + "px";
    } else if (value < input.value) {
        // left to right
        newInput.style.marginLeft = -parentBox.width + "px";
        input.parentElement.prepend(newInput);
        window.setTimeout(function () {
            newInput.style.marginLeft = 0
        }, 20);
    }

    window.setTimeout(function () {
        input.parentElement.removeChild(input);
    }, 250);
}

window.onload = init;






