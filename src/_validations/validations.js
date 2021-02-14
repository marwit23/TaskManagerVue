import { extend } from "vee-validate"
import { required, integer, double, between, min_value } from "vee-validate/dist/rules"
import { localize } from 'vee-validate'
import { setInteractionMode } from 'vee-validate'

setInteractionMode('eager');


extend("required", required)
extend("integer", integer)
extend("double", double)
extend("between", between)
extend("min_value", min_value)

localize({
  en: {
    messages: {
      required: '{_field_} is required',
      integer: '{_field_} must be an integer',
      double: '{_field_} must be a decimal number',
      ingredientUnique: 'This ingredient has already been selected',
      between: 'Value must be between {min} and {max}',
      min_value: 'Value cannot be less than {min}'
    }
  }
})