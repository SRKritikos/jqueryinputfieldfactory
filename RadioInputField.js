function RadioInputField(position, size, name, isChecked) {
  var inputField = new InputField(position, size, name, type)
  return inputField
    .prop("checked", isChecked)
    .css({
      height: "100%",
      width: "100%",
    })
}