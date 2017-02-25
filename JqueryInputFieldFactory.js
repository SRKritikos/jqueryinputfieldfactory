function JqueryInputFieldFactory() {
  this.createInstance = function (fieldModel) {
    if (fieldModel.type === "text") {
      return new TextInputField(fieldModel.position, fieldModel.size,
                                fieldModel.name, fieldModel.fontSize,
                                fieldModel.text)
    } else if (fieldModel.type === "radio") {
      return new RadioInputField(fieldModel.position, fieldModel.size,
                                fieldModel.name, fieldModel.isChecked)
    } else if (fieldModel.type === "checkbox") {
      return new CheckboxInputField(fieldModel.position, fieldModel.size,
                                    fieldModel.name, fieldModel.isChecked)
    }
  }
}