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
// ********verify OTP section********
let timar = document.getElementById('timar');

let minit = 4;
let second = 59;
// *****timer F******
window.onload = () => {
    setInterval(() => {
        if(second >= 0){
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

//**************worning section*************
let worning_Container = document.getElementById('worning_Container');
worning_Container.innerHTML = `${worning}`;
let custom_W = document.getElementById('custom_W');
custom_W.innerHTML =`OTP delivery may be delayed due to congestion at telco or SMS GateWay's end. Shohoz-Synesis-Vincen JV is not responsilble for any delay in OTP delivery.`;

//**************footer section*************
let footer_Container = document.getElementById('footer');
footer_Container.innerHTML = `${footer}`;
