import { useState } from "react";
import TextField from "@material-ui/core/TextField";
import { isValidPhoneNumber } from "libphonenumber-js";

export default function BasicTextFields() {
  const [isValid, setIsValid] = useState(true);

  const errorProps = {
    error: true,
    helperText: "Please, enter correct phone number",
  };

  const validate = ({ target: { value } }) => {
    if (value && !isValidPhoneNumber(value)) {
      setIsValid(false);
    } else {
      setIsValid(true);
    }
  };

  return (
    <form>
      <TextField
        {...(!isValid ? errorProps : {})}
        label="Phone number"
        variant="outlined"
        onBlur={validate}
      />
    </form>
  );
}
