function getInputValue(inputId) {
  const inputValue = document.getElementById(inputId);
  const newInputValue = parseInt(inputValue.value);
  return newInputValue;
}

function setTextValue(textId, value) {
  const textElement = document.getElementById(textId);
  textElement.innerText = value;
}
