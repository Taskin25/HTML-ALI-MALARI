function turnOnLight(color) {
  var redLight = document.getElementById("redLight");
  var yellowLight = document.getElementById("yellowLight");
  var greenLight = document.getElementById("greenLight");

  redLight.classList.remove("red");
  yellowLight.classList.remove("yellow");
  greenLight.classList.remove("green");

  switch (color) {
    case "red":
      redLight.classList.add("red");
      break;
    case "yellow":
      yellowLight.classList.add("yellow");
      break;
    case "green":
      greenLight.classList.add("green");
      break;
    default:
      break;
  }
}
