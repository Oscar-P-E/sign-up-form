document.addEventListener("DOMContentLoaded", () => {
  const password = document.getElementById("password");
  const confirmPassword = document.getElementById("confirm-password");
  const errorMessagePassword = document.getElementById(
    "error-message-password"
  );
  const errorMessagePhone = document.getElementById("error-message-phone");
  const form = document.getElementById("my-form");
  const phoneNumber = document.getElementById("phone-number");

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    validateConfirmPassword();
    validatePhoneNumber();
  });

  // Validate on input
  //
  // confirmPassword.addEventListener("input", () => {
  //   validateConfirmPassword();
  // });
  //
  // phoneNumber.addEventListener("input", () => {
  //   validatePhoneNumber();
  // });

  const validateConfirmPassword = () => {
    if (password.value !== confirmPassword.value) {
      errorMessagePassword.innerText = "* Passwords do not match";
      errorMessagePassword.style.display = "block";
      password.classList.add("invalid");
      confirmPassword.classList.add("invalid");
    } else {
      errorMessagePassword.style.display = "none";
      password.classList.remove("invalid");
      confirmPassword.classList.remove("invalid");
    }
  };

  const validatePhoneNumber = () => {
    if (!isValidPhoneNumber(phoneNumber.value)) {
      phoneNumber.classList.add("invalid");
      errorMessagePhone.innerText =
        "* The phone number you entered is not valid";
      errorMessagePhone.style.display = "block";
    } else {
      phoneNumber.classList.remove("invalid");
      errorMessagePhone.style.display = "none";
    }
  };

  const isValidPhoneNumber = (phone) => {
    // (?:\+?\d{1,4}\s?)?        : Optional international dialing prefix (e.g., '+61') followed by optional whitespace
    // (?:\(?\d{1,4}\)?[\s.-]?)? : Optional area code (up to 4 digits) which may be enclosed in parentheses, followed by optional whitespace, dot, or hyphen
    // (?:\d{1,4}[\s.-]?){1,3}   : One to three groups of up to 4 digits, followed by optional whitespace, dot, or hyphen
    // \d{1,4}                   : The final group of 1 to 4 digits
    const regex =
      /^(?:\+?\d{1,4}\s?)?(?:\(?\d{1,4}\)?[\s.-]?)?(?:\d{1,4}[\s.-]?){1,3}\d{1,4}$/;
    return regex.test(phone);
  };
  // Test the isValidPhoneNumber function with various phone number formats
  // console.log(isValidPhoneNumber('(02) 1234 5678'));      // true (Australian landline)
  // console.log(isValidPhoneNumber('02 1234 5678'));        // true (Australian landline)
  // console.log(isValidPhoneNumber('02-1234-5678'));        // true (Australian landline)
  // console.log(isValidPhoneNumber('0412 345 678'));        // true (Australian mobile)
  // console.log(isValidPhoneNumber('0412345678'));          // true (Australian mobile)
  // console.log(isValidPhoneNumber('+61 412 345 678'));     // true (Australian mobile)
  // console.log(isValidPhoneNumber('+1 123 456 7890'));     // true (International)
  // console.log(isValidPhoneNumber('+44 1234 567 890'));    // true (International)
  // console.log(isValidPhoneNumber('+61 2 1234 5678'));     // true (International, Australian landline)
  // console.log(isValidPhoneNumber('+8615635150577'));      // true (International)
  // console.log(isValidPhoneNumber('11 22 33 44 55 66 77 88 99')); // false (Excessive groups of digits)
  // console.log(isValidPhoneNumber('abc1234-5678'));        // false (Non-digit characters)
});
