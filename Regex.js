function validateEmail(email){
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
}
console.log(validateEmail('kumar@gmail.com'));
console.log(validateEmail('kumar@gmail'));
console.log(validateEmail('kumar@gmail..com'));
console.log(validateEmail('kuma.r@gmail.com'));


function validateMobile(num) {
  const regex = /^[6-9]\d{9}$/;
  return regex.test(num)
    ? 'Valid mobile number'
    : 'Invalid mobile number';
}
console.log(validateMobile('9876543210'));
console.log(validateMobile('1234567890'));
console.log(validateMobile('98765'));
console.log(validateMobile('7890123456'));


function validatePIN(pin) {
  const regex = /^[1-9]\d{5}$/;
  return regex.test(pin)
    ? "valid pin " +pin+ "."
    : "invalid pin " +pin+ ".";
}
console.log(validatePIN('600001'));
console.log(validatePIN('012345'));
console.log(validatePIN('60000'));
console.log(validatePIN('110001'));
