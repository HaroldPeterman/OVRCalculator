const pacInput = document.getElementById('pac-input');
const shoInput = document.getElementById('sho-input');
const pasInput = document.getElementById('pas-input');
const driInput = document.getElementById('dri-input');
const defInput = document.getElementById('def-input');
const phyInput = document.getElementById('phy-input');
const container = document.getElementById('container');

function clearInput(){
    var getValue = document.getElementById("pac-input");
      if (getValue.value !="") {
          getValue.value = "";
      }

      var getValue= document.getElementById("sho-input");
      if (getValue.value !="") {
          getValue.value = "";
      }

      var getValue= document.getElementById("pas-input");
      if (getValue.value !="") {
          getValue.value = "";
      }

      var getValue= document.getElementById("dri-input");
      if (getValue.value !="") {
          getValue.value = "";
      }

      var getValue= document.getElementById("def-input");
      if (getValue.value !="") {
          getValue.value = "";
      }

      var getValue= document.getElementById("phy-input");
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
    container.replaceChildren(ovr);
    clearInput();
})

function calculator(pac,sho,pas,dri,def,phy) {
    let number = pac + sho + pas + dri + def + phy;
    let finalNumber = number / 5
    return Math.floor(finalNumber);
}



