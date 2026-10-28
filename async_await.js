// fetch user profile
async function getUserProfile(){
    const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
    const user = await response .json();
    console.log('name:', user.name);
    console.log('email:', user.email);
    console.log('city:', user.address.city);
}
getUserProfile();


// otp verification
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
async function verifyOTP(enteredOTP) {
    const registeredOTP = '123456';
    console.log('Verifying OTP...');
    await delay(2000);

    if (enteredOTP === registeredOTP) {
        console.log('OTP verified successfully');
    }else {
        console.log('OTP verification failed');
    }
}
verifyOTP('123456');




