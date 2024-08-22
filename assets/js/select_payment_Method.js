
let custom_S_Name = document.getElementById('custom_S_Name');
let deprature_Date_Time = document.getElementById('deprature_Date_Time');
let total_Duration = document.getElementById('total_Duration');
let arival_Station = document.getElementById('arival_Station');
let arival_Date_Time = document.getElementById('arival_Date_Time');

let coach_Name = document.getElementById('coach_Name');
let chose = document.getElementById('chose');
let chose_Site = document.getElementById('chose_Site');
let original_T_Amount = document.getElementById('original_T_Amount');
let you_Pay_Amount = document.getElementById('you_Pay_Amount');

// all data access
let user_Data = JSON.parse(localStorage.getItem('all_Data'));
console.log(user_Data)

window.onload = () => {
    custom_S_Name.innerText = `${user_Data.start_station}`;
    deprature_Date_Time.innerText =`${user_Data.select_M} ${user_Data.start_Time}`;
    total_Duration.innerText = `${user_Data.total_Duration_H}H ${user_Data.total_Duration_M}M`;
    arival_Station.innerText = `${user_Data.to_Station}`;
    arival_Date_Time.innerText = `${user_Data.select_M} ${user_Data.end_Time}`;
    // coach_Name.innerText = `${}`;
    // chose.innerText = `${}`;
    // chose_Site.innerText = `${}`;




}