const userdetails={
name:{
    f_name:"madan",
    l_name:"kumar"  
},
age:20,
address:{
    city:"delhi",
}
}
console.log(userdetails.name.f_name);

const value=[90,80,70,60,50];
console.log(value[0]);



function ShoppingCart(price,quantity){
    return price*quantity;
}
const total=ShoppingCart(100,5);
console.log(total);



function discount(price,discountpercentage){
    const discount = price * discountpercentage / 100;
    return price - discount;
}
const discountedprice = discount(1000 , 20);
console.log(discountedprice);



function employeesalary(salary,bonus){
    return salary + bonus;
}
const totalsalary = employeesalary(50000,2000);
console.log(totalsalary);


function loginvalid(username , password){
    if(username === "admin" && password === "1234"){
        return true;
    } else {
        return false;
    }
}
const valid = loginvalid("admin", "134");
console.log(valid);





function greet(name){
    return "hello " + name;
}
const greetinfo= greet("vino");
console.log(greetinfo);



function addition(a,b){
    return a + b;
}
const sum = addition(10 , 20);
console.log(sum);


function sub(a,b){
    return a - b;
}
const diff = sub(50 , 20);
console.log(diff);



function multiply(a,b){
    return a * b;
}
const product = multiply(10 , 5);
console.log(product);




function even(num){
    if (num % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

const iseven1 = even(9);
const iseven2 = even(10);
console.log(iseven1);
console.log(iseven2);




function adult(age){
    if (age > 18){
        return "adult";
    }
    else{
        return "not adult";
    }
}
const isadult = adult(45);
console.log(isadult);

const isadult1 = adult(15);
console.log(isadult1);


function discount(price,discountper){
    return price * discountper / 100;
}
const discountprice1=discount(1000,20);
console.log(discountprice1);



function finalprice(price , discount){
    return price - discount; 
}
const finalprice1 = finalprice(1000,200);
console.log(finalprice1);



function empsalary(salary,bonus){
    return salary + bonus;
}
const total1salary = empsalary(30000,5000);
console.log(total1salary);




function stockavailability(stock){
    if(stock > 0) {
        return "in stock";
    } else {
        return "out of stock";
    }
}
const availa = stockavailability(10);
console.log(availa);
const availa1 = stockavailability(0);
console.log(availa1);




function cartvalue(price,quantity){
    return price * quantity;
}
const totalcartvalue=cartvalue(60,12);
console.log(totalcartvalue);



function discountamt(price,percent){
    const discount=price*percent/100;
    return price-discount;
}
const discountedamt=discountamt(5000,6);
console.log(discountedamt);



function finalamt(price,discount){
    return price-discount;
}
const finalamot=finalamt(2000,350);
console.log(finalamot);



function deliverycharge(price,charge){
    const delivery=price * 2 / 100;
    return price - delivery;
}
const charge=deliverycharge(1000,5);
console.log(charge);



function totalprice(price,deliverycharge){
    const delicharges=price*2/100;
    return price + delicharges;
}
const totalprice1=totalprice(2000,30);
console.log(totalprice1);


function stockavailability(stock){
    if(stock > 0){
        return "in stock";
    } else {
        return "out of stock";
    }
}
const avail = stockavailability(10);
console.log(avail);
const avail1 = stockavailability(0);
console.log(avail1);



function freedelcheck(price){
    if(price > 199){
        return "free delivery";
    } else {
        return "delivery charges apply";
    }
}
const freede = freedelcheck(200);
console.log(freede);
const freede1 = freedelcheck(150);
console.log(freede1);



function gstcalculation(price,gstpercentage){
    const gstamount = price * gstpercentage / 100;
    return price + gstamount;
}
const gsttotal = gstcalculation(1000,18);
console.log(gsttotal);


function empsalary(salary,bonus){
    return salary + bonus;
}
const Totalsalary=empsalary(40000,5000);
console.log(totalsalary);


function yearlysalary(monthlysalary){
    return monthlysalary * 12;
}
const totalyearlysalary=yearlysalary(50000);
console.log(totalyearlysalary);


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



function totalmarks(marks1,marks2,marks3){
    return marks1 + marks2 + marks3;
}
const totalmarks1=totalmarks(80,90,70);
console.log(totalmarks1);


function average(marks1,marks2,marks3){
    const total=marks1 + marks2 + marks3;
    return total / 3;
}
const avg=average(80,90,70);
console.log(avg);

function averageresult(average)
{
    if(average >= 60){
        return "pass";
    } else {
        return "fail";
    }
}
const result=averageresult(61);
console.log(result);


