
let all_Data = JSON.parse(localStorage.getItem('all_Data'));
let indexPage = JSON.parse(localStorage.getItem('indexPage'));
let userData = JSON.parse(localStorage.getItem('userData'));
let ticket = JSON.parse(localStorage.getItem('ticket'));

let start_Date_Time = document.getElementById('start_Date_Time');
let end_Date_Time = document.getElementById('end_Date_Time');
let train_Name = document.getElementById('train_Name');
let form_Station = document.getElementById('form_Station');
let to_Station = document.getElementById('to_Station');
let class_Name= document.getElementById('class');
let coach = document.getElementById('coach');
let seats = document.getElementById('seats');
let fare = document.getElementById('fare');
let vat = document.getElementById('vat');
let total_Fare = document.getElementById('total_Fare');
let user_Name = document.getElementById('user_Name');
let emali = document.getElementById('emali');
let phone_Number = document.getElementById('phone_Number');
//juney time
start_Date_Time.innerText = `${indexPage.J_Date} ${all_Data.start_Time}`;
end_Date_Time.innerText = `${indexPage.J_Date} ${all_Data.start_Time}`;
//train name
train_Name.innerText = `${indexPage.train_Name}`;
//stations
form_Station.innerText = `${indexPage.start_Station}`;
to_Station.innerText = `${indexPage.end_Station}`;
//class
class_Name.innerText = `${indexPage.class}`;
//coachs
coach.innerText = `${indexPage.all_Coach}`;
//seats
seats.innerText = `${ticket}`;
//fare
fare.innerText = `BDT ${indexPage.ticket_Amount}.00 টাকা`;
let t_amount = parseInt(indexPage.ticket_Amount) + 20;
//total fare
total_Fare.innerText = `BDT ${t_amount}.00 টাকা`;
//user email
emali.innerHTML = `${userData.u_Email}`;
//user phone number
phone_Number.innerText = `${indexPage.phone_Number}`