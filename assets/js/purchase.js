//navigation, worning, footer 
import {navigation, worning, footer} from "./nav_worning_footer.js";

//*********purchase menu section*********
let navigation_container_Ticket = document.getElementById('navigation_Ticket');
navigation_container_Ticket.innerHTML = `${navigation}`;

let toggle_Btn = document.getElementById('toggle_Btn');
let nav = document.getElementById('menu_List');
let userEmil = document.getElementById('userEmil');
let logout_Btn = document.getElementById('logout_Btn');

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

let worning_Container = document.getElementById('worning_Container');
worning_Container.innerHTML = `${worning}`;
let custom_W = document.getElementById('custom_W');
custom_W.innerHTML =`সাময়িকভাবে ট্রেন চলাচল স্থগিত থাকায় Rail Sheba Website টিতে প্রবেশ করা যাচ্ছে না, আসা করি আবশিষ্ট কাজটি শীঘ্রই শেষ করতে পারবো ইনসাআল্লাহ,.....(নোমান তুহিন) |`;

//**************footer section*************
let footer_Container = document.getElementById('footer');
footer_Container.innerHTML = `${footer}`;
