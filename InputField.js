/**
 * base input field class
 */
function InputField(position, size, name, type) {
  return $("<div></div>")
    .css({
      top: position.top,
      left: position.left,
      position: "absolute",
      height: size.height,
      width: size.width      
    }).append(
      $("<input>").attr({
        id: name,
        type: type
      })
    )
}

