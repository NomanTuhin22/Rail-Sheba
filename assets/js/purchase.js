//navigation, worning, footer 
import {navigation, worning, footer} from "./nav_worning_footer.js";

//*********purchase menu section*********
let navigation_container_Ticket = document.getElementById('navigation_Ticket');
navigation_container_Ticket.innerHTML = `${navigation}`;

let toggle_Btn = document.getElementById('toggle_Btn');
let nav = document.getElementById('menu_List');

/***toggle menu */
let count = 0;
toggle_Btn.addEventListener('click', () => {
    if(count == 1){
        nav.style.display = 'block';
        count = 0; 
    }else{
        nav.style.display = 'none';
        count = 1;
    }
 })

//**************worning section*************
let worning_Container = document.getElementById('worning_Container');
worning_Container.innerHTML = `${worning}`;
let custom_W = document.getElementById('custom_W');
custom_W.innerHTML =`OTP delivery may be delayed due to congestion at telco or SMS GateWay's end. Shohoz-Synesis-Vincen JV is not responsilble for any delay in OTP delivery.`;

// ********verify OTP section********
//get value localstorage
let userData = JSON.parse(localStorage.getItem('userData'));
let timar = document.getElementById('timar');
let second_Timer = document.getElementById('second_Timer');
let otp_Input_Field = document.querySelectorAll('#otp_Input_Field');
let otp_submit_Btn = document.getElementById('otp_submit_Btn');
let resend_Otp = document.getElementById('resend_Otp');

/****timer****/
let minit = 3;
let second = 59;
let s_Minit = 0;
let s_Second = 0;
// *****timer F******2nd
let timar_F = () => {
    s_Second++;
    if(s_Second <= 59){
        if(s_Second < 10){
            second_Timer.innerText = `0${s_Minit}:0${s_Second}`;
        }else{
            second_Timer.innerText = `0${s_Minit}:${s_Second}`;
        }
    }
    if(s_Second == 59 && minit <= 3){
        s_Second = 0;
        second_Timer.innerText = `0${s_Minit++}:0${s_Second}`;
    }
    if(minit == 4){
        second_Timer.innerText = `0${s_Minit}:
        00`;
    }
}
// ***********input filed F***********
otp_Input_Field[0].focus();
otp_Input_Field.forEach((input, index) => {
    input.addEventListener('keyup', (e) => {
        let currentInput = input,
        nextInput = input.nextElementSibling,
        prevInput = input.previousElementSibling;
        // 3 input is disabled
        if(nextInput && nextInput.hasAttribute('disabled') && currentInput.value !== ''){
            nextInput.removeAttribute('disabled', true);
            nextInput.focus();
        }
        // backspace
        if(e.key === 'Backspace'){
            otp_Input_Field.forEach((input, index2) => {
                if(index <= index2 && prevInput){
                    input.setAttribute('disabled', true);
                    prevInput.focus();
                    prevInput.value = '';
                }
            })
        }
        //submit btn active class add
        if(!otp_Input_Field[3].disabled && otp_Input_Field.value !==''){
            otp_submit_Btn.classList.add('otp_Btn_Active');
        }else{
            otp_submit_Btn.classList.remove('otp_Btn_Active');
        }
    })
})
// random number
let otpValue0 = Math.floor(Math.random() * 9);
let otpValue1 = Math.floor(Math.random() * 9);
let otpValue2 = Math.floor(Math.random() * 9);
let otpValue3 = Math.floor(Math.random() * 9);
let otpValue = `${otpValue0}${otpValue1}${otpValue2}${otpValue3}`;
// ***********otp_Validation_F***********
let otp_Validation_F = (otpValue0, otpValue1, otpValue2, otpValue3) => {
    otp_submit_Btn.addEventListener('click', () => {
        if(otp_Input_Field[0].value == '' || otp_Input_Field[1].value == '' || otp_Input_Field[2].value == '' || otp_Input_Field[3].value == ''){
           alert('Empty Value !!');
        }
        if(otp_Input_Field[0].value == otpValue0 && otp_Input_Field[1].value == otpValue1 && otp_Input_Field[2].value == otpValue2 && otp_Input_Field[3].value == otpValue3){
            //move select_payment_Method.js
            window.open('./select_payment_method.html', '_self');
        }
        else{
            alert('not match');
        }
    })
}
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
            otp_Validation_F(otpValue0, otpValue1, otpValue2, otpValue3);
        }
      }
    );
}
// *****timer F******1st
window.onload = () => {
otp_Genarator_F(otpValue);
  setInterval(() => {
      if(second >= 0){
          //2nd timer_F
          timar_F();
          if(second < 10){
              timar.innerText = `0${minit}:0${second--}`;
          }else{
              timar.innerText = `0${minit}:${second--}`;
          }
          if(second == 0 && !minit <= 0){
              second = 59;
              timar.innerText = `0${minit--}:${second}`;
          }
      }
  }, 500);
}
//**********resend_Otp******E*****
resend_Otp.addEventListener('click', () => {
    window.location.reload();
    otp_Input_Field[0].value ='';
    otp_Input_Field[1].value ='';
    otp_Input_Field[2].value ='';
    otp_Input_Field[3].value ='';
})

    
//**************footer section*************
let footer_Container = document.getElementById('footer');
footer_Container.innerHTML = `${footer}`;


