function getPin() {
  let pin = Math.round(Math.random() * 9999);
  let pinString = pin + "";
  if (pinString.length == 4) {
    return pin;
  } else {
    return getPin();
  }
}

function generatePin() {
  let displayPin = document.getElementById("display-pin");
  displayPin.value = getPin();
}
document.getElementById("key-pad").addEventListener("click", function (event) {
  let number = event.target.innerText;
  let calcInput = document.getElementById("typed-numbers");
  if (isNaN(number)) {
    if (number == "C") {
      calcInput.value = "";
    } else if (number == "Del") {
      calcInput.value = calcInput.value.slice(0, -1);
    }
  } else {
    let previousNumber = calcInput.value;
    let newNumber = previousNumber + number;
    calcInput.value = newNumber;
  }
});

function verifyPin() {
  let pin = document.getElementById("display-pin").value;
  let typedNumbers = document.getElementById("typed-numbers").value;
  let failNotification = document.getElementById("notify-fail");
  let successNotification = document.getElementById("notify-success");
  if (typedNumbers == "") {
    failNotification.style.display = "block";
    successNotification.style.display = "none";
  }
  else if (pin == typedNumbers) {
    successNotification.style.display = "block";
    failNotification.style.display = "none";
  } else {
    failNotification.style.display = "block";
    successNotification.style.display = "none";
  }
}
