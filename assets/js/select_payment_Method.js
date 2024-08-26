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
//***cullect data into locallstorage & append into html element, .innerText */
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
//get value localstorage
let userData = JSON.parse(localStorage.getItem('userData'));

//otp genarator
let otpValue0 = Math.floor(Math.random() * 9);
let otpValue1 = Math.floor(Math.random() * 9);
let otpValue2 = Math.floor(Math.random() * 9);
let otpValue3 = Math.floor(Math.random() * 9);
let otpValue = `${otpValue0}${otpValue1}${otpValue2}${otpValue3}`;

// ***********otp_Genarator_F***********
let otp_Genarator_F = (otpValu) => {
    let emailBody = `<h2>Your OTP is</h2><h3>${otpValu}</h3>`;
    Email.send({
        SecureToken : "617c705b-afcb-42a4-b479-2a3590420994",
        To : userData.u_Email,
        From : userData.u_Email,
        Subject : "Email OTP",
        Body : emailBody
    }).then(
      message => {
        if(message){
            alert("Otp send to your email "+ userData.u_Email);
        }
      }
    );
}


// **********popup_Window_F**********
let popup_Window_F = (total_Amount, bank_Input, phone_Otp, confirm_Btn) => {
    total_Amount.innerText = `৳${indexPage.ticket_Amount}`;
   

    phone_Otp.addEventListener('click', () => {
        if(bank_Input.value != '' && bank_Input.value.match(/(\+88)?-?01[1-9]\d{8}/g)){
        //    otp send
            otp_Genarator_F(otpValue);
        }

    })
    //confirm_Btn E
    confirm_Btn.addEventListener('click', () => {
        if(bank_Input.value == '' && phone_Otp.value == ''){
            alert('Empty Value !!');
        }
        else if(!bank_Input.value.match(/(\+88)?-?01[1-9]\d{8}/g)) {
            alert('Phone Number Not Valid !!');
        }
   
        if(phone_Otp.value != otpValue){
            alert('OTP Not Valid !!');        
        }else{
            console.log('input ok')
        }
         
    })
   
   
    
}

// *********close_Btn_F**********
let close_Btn_F = (close_Btn, total_Amount, bank_Input, phone_Otp, confirm_Btn) => {
    //popup window info colect F
    popup_Window_F(total_Amount, bank_Input, phone_Otp,confirm_Btn);
    // close popup window E
    close_Btn.addEventListener('click', () => {
        //select_payment container show
        select_Payment_Method_Container.style.display ='block';
        payment_Sub_Container.classList.remove('bg-overlay');
        main_Container.innerHTML = '';
    })
}

// ********select popup window section input F********
let form_Element = '';
let form_Element_F = (main_Container) => {
      //select popup window section
      let close_Btn = document.getElementById('close_Btn');
      let total_Amount = document.getElementById('total_Amount');
      let bank_Input = document.getElementById('bank_Input');
      let phone_Otp = document.getElementById('phone_Otp');
      let confirm_Btn = document.getElementById('confirm_Btn');
      // popup window close
      close_Btn_F(close_Btn ,total_Amount, bank_Input, phone_Otp, confirm_Btn);
}

// ********all Banks item loop & add Event********
banks.forEach((item, index) =>{
    item.style.cursor = 'pointer';
    item.addEventListener('click', () => {
        payment_Sub_Container.classList.add('bg-overlay');
        select_Payment_Method_Container.style.display ='none';

        if(index == 0){
            main_Container.innerHTML = `${card_Bkash}`;
            //select popup window section input
            form_Element_F(main_Container);
        }
        else if(index == 1){
            main_Container.innerHTML = `${card_Nagad}`;
            //select popup window section
            form_Element_F(main_Container);
        }
        else if(index == 2){
            main_Container.innerHTML = `${card_Rocket}`;
            //select popup window section
            form_Element_F(main_Container);
        }
        else if(index == 3){
            main_Container.innerHTML = `${card_Upay}`;
            //select popup window section
            form_Element_F(main_Container);
        }
        else if(index == 4){
           alert('working');
        }
        else if(index == 5){
            alert('working');
        }
    })
})


