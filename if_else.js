function eligibility(age){
    if(age >=18){
        return "eligible";
    }else{
        return "not eligible";
    }
    }
    const elig=eligibility(20);
    console.log(elig);
    const elig1=eligibility(15);
    console.log(elig1);




function result(marks)
{
    if(marks >= 50){
        return "pass";
    } else {
        return "fail";
    }
}
const result=result(61);
console.log(result);




function PositiveNegative(num){
    if(num > 0){
        return "positive";
    } else if(num < 0){
        return "negative";
    } else {
        return "zero";
    }
}
const posNeg=PositiveNegative(5);
console.log(posNeg);




function evenodd(num){
    if(num % 2 === 0){
        return "even";
    } else {
        return "odd";
    }
}
const evenOdd=evenodd(7);
console.log(evenOdd);




function login(username, password){
    if(username === "admin" && password === "1234"){
        return "login successful";
    } else {
        return "login failed";
    }
}
const loginResult=login("admin", "1234");
console.log(loginResult);




function voteEligibility(age){
    if(age >= 18){
        return "eligible to vote";
    } else {
        return "not eligible to vote";
    }
}
const voteResult=voteEligibility(20);
console.log(voteResult);




function drivingEligibility(age){
    if(age >= 18){
        return "eligible to drive";
    } else {
        return "not eligible to drive";
    }
}
const driveResult=drivingEligibility(16);
console.log(driveResult);




function productstock(quantity){
    if(quantity > 0){
        return "in stock";
    } else {
        return "out of stock";
    }      
}
const stockResult=productstock(10);
console.log(stockResult);



function freedelivery(price){
    if(price >= 1000){
        return "eligible for free delivery";
    } else {
        return "not eligible for free delivery";
    }
}
const deliveryResult=freedelivery(600);
console.log(deliveryResult);




function temperatureCheck(temp){
    if(temp > 30){
        return "hot";
    } else {
        return "cold";
    } 
}
const tempResult=temperatureCheck(25);
console.log(tempResult);




function discountCheck(price){
    if(price >= 5000){
        return "eligible for discount";
    } else {
        return "not eligible for discount";
    }
}
const discountResult=discountCheck(600);
console.log(discountResult);



function bankBalanceCheck(balance){
    if(balance >= 1000){
        return "sufficient balance";
    } else {
        return "insufficient balance";
    }
}
const balanceResult=bankBalanceCheck(800);
console.log(balanceResult);




function employeeattendanceCheck(attendance){
    if(attendance >= 75){
        return "eligible";
    } else {
        return "uneligible";
    }
}
const attendanceResult=employeeattendanceCheck(80);
console.log(attendanceResult);




function courseaccess(payment){
    if(payment==="paid"){
        return "access granted";
    } else {
        return "access denied";
    }
}
const accessResult=courseaccess("paid");
console.log(accessResult);



function internship(course){
    if(course==="completed"){
        return "eligible for internship";
    } else {
        return "not eligible for internship";
    }
}
const internshipResult=internship("completed");
console.log(internshipResult);



function accountstatus(active){
    if(active===true){
        return "account active";
    } else {
        return "account suspended";
    }
}
const accountResult=accountstatus(true);
console.log(accountResult);




function adminaccess(role){
    if(role==="admin"){
        return "access granted";
    } else {
        return "access denied";
    }   
}
const adminResult=adminaccess("user");
console.log(adminResult);




function otpverification(otp){
    if(otp==="123456"){
        return "OTP verified";
    } else {
        return "OTP invalid";
    }
}
const otpResult=otpverification("123456");
console.log(otpResult);




function emailverification(email){
    if(email===""){
        return "email verified";
    }
    else{
        return "email invalid";
    }
}
const emailResult=emailverification("user@example.com");
console.log(emailResult);




function paymentstatus(status){
    if(status==="paid"){
        return "order confirmed";
    } else {
        return "payment failed";
    }
}
const paymentResult=paymentstatus("paid");
console.log(paymentResult);



function courseaccesscheck(login, payment){
    if(login === true && payment === "paid"){
        return "access granted";
    }else if(login === false){
        return "login required";
    }
    else if(login === true && payment === "unpaid"){
        return "complete payment ";
    }
}
    
const accessCheckResult=courseaccesscheck(true, "paid");
console.log(accessCheckResult);
