//import nav_worning_footer.js file
import {card_Bkash, card_Nagad, card_Rocket, card_Upay} from "./nav_worning_footer.js";
// all data access
let user_Data = JSON.parse(localStorage.getItem('all_Data'));
let indexPage = JSON.parse(localStorage.getItem('indexPage'));
let ticket = JSON.parse(localStorage.getItem('ticket'));

let trainName = document.getElementById('trainName');
let custom_S_Name = document.getElementById('custom_S_Name');
let deprature_Date_Time = document.getElementById('deprature_Date_Time');
let total_Duration = document.getElementById('total_Duration');
let arival_Station = document.getElementById('arival_Station');
let arival_Date_Time = document.getElementById('arival_Date_Time');
//coach section
let coach_Name = document.querySelectorAll('#coach_Name');
let chose_Class = document.querySelectorAll('#chose');
let chose_Site = document.querySelectorAll('#chose_Site');
let coach_Container = document.querySelectorAll('#coach_Container');
// ticket form substring value collect
let coac_h_0 = ticket[0];
let coac_h_1 = ticket[1];
let coac_h_2 = ticket[2];
let coac_h_3 = ticket[3];
let chose0 = coac_h_0.substring(0, 1);
let chose1 = coac_h_1.substring(0, 1);
let chose2 = coac_h_2.substring(0, 1);
let chose3 = coac_h_3.substring(0, 1);

let original_T_Amount = document.querySelectorAll('#original_T_Amount');
let you_Pay_Amount = document.querySelectorAll('#you_Pay_Amount');
// string to number
let original_amount = parseInt(indexPage.ticket_Amount);
let vat = original_amount + 25 + 20;

//***coach_section_value_append F*******
let coach_section_value_append = () => {
    //send all chose name into locastorage
    let coach = [chose0,chose1,chose2,chose3];
    indexPage.all_Coach = coach;
    localStorage.setItem('indexPage', JSON.stringify(indexPage));

    for(let i = 1; i <= ticket.length; i++){
        if(ticket.length == 2){
            //this container show
            coach_Container[1].style.display = 'block';
            //coach name
            coach_Name[0].innerText = `1st.L-${chose0}`;
            coach_Name[1].innerText = `1st.L-${chose1}`;    
            //coach class 
            chose_Class[0].innerText = `${indexPage.class}`;
            chose_Class[1].innerText = `${indexPage.class}`;
            //chose_Site
            chose_Site[0].innerText =`${ticket[0]}`;
            chose_Site[1].innerText =`${ticket[1]}`;
        }
        else if(ticket.length == 3){
            //this container show
            coach_Container[1].style.display = 'block';
            coach_Container[2].style.display = 'block';
            //coach name
            coach_Name[0].innerText = `1st.L-${chose0}`;
            coach_Name[1].innerText = `1st.L-${chose1}`;
            coach_Name[2].innerText = `1st.L-${chose2}`;
            //coach class 
            chose_Class[0].innerText = `${indexPage.class}`;
            chose_Class[1].innerText = `${indexPage.class}`;
            chose_Class[2].innerText = `${indexPage.class}`;
            //chose_Site
            chose_Site[0].innerText =`${ticket[0]}`;
            chose_Site[1].innerText =`${ticket[1]}`;
            chose_Site[2].innerText =`${ticket[2]}`;
        }
        else if(ticket.length == 4){
            //this container show
            coach_Container[1].style.display = 'block';
            coach_Container[2].style.display = 'block';
            coach_Container[3].style.display = 'block';
            //coach name
            coach_Name[0].innerText = `1st.L-${chose0}`;
            coach_Name[1].innerText = `1st.L-${chose1}`;
            coach_Name[2].innerText = `1st.L-${chose2}`;
            coach_Name[3].innerText = `1st.L-${chose3}`;
            //coach class 
            chose_Class[0].innerText = `${indexPage.class}`;
            chose_Class[1].innerText = `${indexPage.class}`;
            chose_Class[2].innerText = `${indexPage.class}`;
            chose_Class[3].innerText = `${indexPage.class}`;
             //chose_Site
             chose_Site[0].innerText =`${ticket[0]}`;
             chose_Site[1].innerText =`${ticket[1]}`;
             chose_Site[2].innerText =`${ticket[2]}`;
             chose_Site[3].innerText =`${ticket[3]}`;
        }
    }
}
//***cullect data into locallstorage & append into html element, .innerText */
window.onload = () => {
    // start & end station
    trainName.innerHTML = `${indexPage.train_Name}`;
    custom_S_Name.innerText = `${user_Data.start_station}`;
    arival_Station.innerText = `${user_Data.to_Station}`;
    //jurny start & end time * date
    deprature_Date_Time.innerText =`${user_Data.select_M} ${user_Data.select_Day}, ${user_Data.start_Time}`;
    arival_Date_Time.innerText = `${user_Data.select_M} ${user_Data.select_Day}, ${user_Data.end_Time}`;
    // total duration jurny
    total_Duration.innerText = `${user_Data.total_Duration_H}H ${user_Data.total_Duration_M}M`;
    //coach_section_value_append F
    coach_section_value_append();
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
            //send phone number
            indexPage.phone_Number = bank_Input.value;
            localStorage.setItem('indexPage',JSON.stringify(indexPage));
            //otp send
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
            window.open("user_ticket.html", "_self");
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


