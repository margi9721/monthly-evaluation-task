jQuery.validator.addMethod("pattern", function (value, element) {
  return this.optional(element) || /^[a-zA-Z\s]+$/i.test(value);
}, "Enter valid name")

jQuery.validator.addMethod("alphanumeric", function (value, element) {
  return this.optional(element) || /^[a-z," ",0-9]+$/i.test(value);
}, "**address");
