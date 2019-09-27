var numberInputBox = new Object();
numberInputBox.render = function(defaultValue) {
  var view = `<input type="number" min="0" value="${defaultValue}" name="number input" />`;

  return view;
}

export default numberInputBox;