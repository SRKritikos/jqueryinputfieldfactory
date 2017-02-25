function TextInputField(position, size, name, type, fontSize, text) {
  var inputField = new InputField(position, size, name, type)
  return inputField
    .val(text)
    .css({
      height: "100%",
      width: "100%",
      fontSize: fontSize,
    })
}