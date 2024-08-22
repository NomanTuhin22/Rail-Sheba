//import nav_worning_footer.js file
import {card_Bkash, card_Nagad, card_Rocket, card_Upay} from "./nav_worning_footer.js";

let custom_S_Name = document.getElementById('custom_S_Name');
let deprature_Date_Time = document.getElementById('deprature_Date_Time');
let total_Duration = document.getElementById('total_Duration');
let arival_Station = document.getElementById('arival_Station');
let arival_Date_Time = document.getElementById('arival_Date_Time');

let coach_Name = document.getElementById('coach_Name');
let chose = document.getElementById('chose');
let chose_Site = document.getElementById('chose_Site');
let original_T_Amount = document.querySelectorAll('#original_T_Amount');
let you_Pay_Amount = document.querySelectorAll('#you_Pay_Amount');

// all data access
let user_Data = JSON.parse(localStorage.getItem('all_Data'));
let ticket = JSON.parse(localStorage.getItem('ticket'));
let indexPage = JSON.parse(localStorage.getItem('indexPage'));
// string to number
let original_amount = parseInt(indexPage.ticket_Amount);
let vat = original_amount + 25 + 20;

window.onload = () => {
    // start & end station
    custom_S_Name.innerText = `${user_Data.start_station}`;
    arival_Station.innerText = `${user_Data.to_Station}`;
    //jurny start & end time * date
    deprature_Date_Time.innerText =`${user_Data.select_M} ${user_Data.select_Day}, ${user_Data.start_Time}`;
    arival_Date_Time.innerText = `${user_Data.select_M} ${user_Data.select_Day}, ${user_Data.end_Time}`;
    // total duration jurny
    total_Duration.innerText = `${user_Data.total_Duration_H}H ${user_Data.total_Duration_M}M`;
    // chose & class & seats
    // coach_Name.innerText = `${}`;
    chose.innerText = `${indexPage.class}`;
    chose_Site.innerText = `${ticket[0]}`;

    // original & inculed vat ticket amount
    original_T_Amount[0].innerText = `৳ ${indexPage.ticket_Amount}`;
    original_T_Amount[1].innerText = `৳ ${indexPage.ticket_Amount}`;
    you_Pay_Amount[0].innerText = `৳ ${vat}`;
    you_Pay_Amount[1].innerText = `৳ ${vat}`;
}

// **************banks section************
let banks = document.querySelectorAll('#bank');
let main_Container = document.getElementById('main_Container');
let select_Payment_Method_Container = document.getElementById('select_Payment_Method_Container');
let payment_Sub_Container = document.getElementById('payment_Sub_Container');

let confirm_Btn = document.getElementById('confirm_Btn');

// *********close_Btn_F**********
let close_Btn_F = (close_Btn) => {
    close_Btn.addEventListener('click', () => {
        select_Payment_Method_Container.style.display ='block';
        payment_Sub_Container.classList.remove('bg-overlay');
        main_Container.innerHTML = '';
    })
}

// ********all Banks add Event********
banks.forEach((item, index) =>{
    item.style.cursor = 'pointer';
    item.addEventListener('click', () => {
        payment_Sub_Container.classList.add('bg-overlay');
        select_Payment_Method_Container.style.display ='none';

        if(index == 0){
            main_Container.innerHTML = `${card_Bkash}`;
            //select colse btn
            let close_Btn = document.getElementById('close_Btn');
            close_Btn_F(close_Btn);
        }
        else if(index == 1){
            main_Container.innerHTML = `${card_Nagad}`;
            //select colse btn
            let close_Btn = document.getElementById('close_Btn');
            close_Btn_F(close_Btn);
        }
        else if(index == 2){
            main_Container.innerHTML = `${card_Rocket}`;
            //select colse btn
            let close_Btn = document.getElementById('close_Btn');
            close_Btn_F(close_Btn);
        }
        else if(index == 3){
            main_Container.innerHTML = `${card_Upay}`;
            //select colse btn
            let close_Btn = document.getElementById('close_Btn');
            close_Btn_F(close_Btn);
        }
        else if(index == 4){
           alert('working');
        }
        else if(index == 5){
            alert('working');
        }
    })
})
