// class Validation {
//     // Method to check if a field is empty
//     static isRequired(value) {
//       return value.trim() !== '';
//     }
//
//     // Method to check if a value contains only text (letters and spaces)
//     static isText(value) {
//       const textRegex = /^[A-Za-z\s]+$/;
//       return textRegex.test(value);
//     }
//
//     // Method to check if a value contains only numbers
//     static isNumber(value) {
//       const numberRegex = /^[0-9]+$/;
//       return numberRegex.test(value);
//     }
//
//     // Method to check if a value contains only alphanumeric characters
//     static isAlphanumeric(value) {
//       const alphanumericRegex = /^[A-Za-z0-9]+$/;
//       return alphanumericRegex.test(value);
//     }
//
//     // Method to validate a phone number (simple example, adjust regex as needed)
//     static isPhoneNumber(value) {
//       const phoneRegex = /^\d{10}$/;
//       return phoneRegex.test(value);
//     }
//
//     // Method to validate an email address
//     static isEmail(value) {
//       const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//       return emailRegex.test(value);
//     }
//
//     // Method to check if a value contains no special characters
//     static noSpecialCharacters(value) {
//       const specialCharRegex = /^[A-Za-z0-9\s]+$/;
//       return specialCharRegex.test(value);
//     }
//
//     static isPer(value) {
//       const specialCharRegex = /^[0-9\.\s]+$/;
//       return specialCharRegex.test(value);
//     }
//   }
//
// export default Validation;