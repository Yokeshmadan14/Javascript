const delivery = new Promise((resolve, reject) => {
    resolve('package delivered');
});
delivery.then((message) => {
    console.log(message);
});


const delivery2 = new Promise((resolve , reject) =>{
    reject('package not delivered')
});
delivery2.then(message => console.log(message))
.catch(error => console.log(error));


const enterpass='abc123';
const crctpass='abc123';
const login = new Promise((resolve, reject) => {
    if(enterpass === crctpass){
        resolve('login successful');
    }
    else{
        reject('login failed');
    }
});
login.then(message => console.log(message))
.catch(error => console.log(error));


const prepareorder = new Promise((resolve, reject) =>{
    console.log('preparing order');
    setTimeout(() => {resolve('order confirmed')},2000);
});
prepareorder.then(message =>console.log(message))
.catch(error => console.log(error));


function validateCart()  { return Promise.resolve('Cart Valid'); }
function processPayment(){ return Promise.resolve('Payment Done'); }
function confirmShip()   { return Promise.resolve('Shipment Confirmed'); }
validateCart()
  .then(msg => { console.log(msg); return processPayment(); })
  .then(msg => { console.log(msg); return confirmShip(); })
  .then(msg => console.log(msg));

  


function oldGetData(callback) {
  setTimeout(() => callback(null, 'Old Data'), 1000);
}
function getData() {
  return new Promise((resolve, reject) => {
    oldGetData((err, data) => {
      if (err) reject(err);
      else resolve(data);
    });
  });
}
getData().then(data => console.log(data));

