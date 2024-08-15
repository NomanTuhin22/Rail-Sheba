
//navigation, worning, footer 
import {navigation, worning, footer} from "./nav_worning_footer.js";

//*********ticket menu section*********
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

let menu_List_li = document.querySelectorAll('.custom-ul li a');
let chose = document.querySelectorAll('#chose');
let menu_Btn = document.getElementById('dropdownMenuButton1');
let type_Of_C_Ticket = document.querySelectorAll('#type_Of_C_Ticket div');
let all_Ticket_Container = document.getElementById('all_Ticket_Container');
// *****show_Ticket*****
let k_Ticket = Math.floor(Math.random() * (105 - 1) + 1); 
let kh_Ticket = Math.floor(Math.random() * (105 - 1) + 1);
let g_Ticket = Math.floor(Math.random() * (105 - 1) + 1);
let gh_Ticket = Math.floor(Math.random() * (105 - 1) + 1);
let umo_Ticket = Math.floor(Math.random() * (105 - 1) + 1);
let cha_Ticket = Math.floor(Math.random() * (105 - 1) + 1);
// *****list value append******
chose[0].innerText = `k-Seat(${k_Ticket})`;
chose[1].innerText = `kh-Seat(${kh_Ticket})`;
chose[2].innerText = `g-Seat(${g_Ticket})`;
chose[3].innerText = `gh-Seat(${gh_Ticket})`;
chose[4].innerText = `umo-Seat(${umo_Ticket})`;
chose[5].innerText = `ch-Seat(${cha_Ticket})`;
//******all ticket container*******
let main_Visiable_C = document.querySelector('.main');
let visiable_container = document.querySelector('#container0');
let container_K = document.querySelector('#container1');
let container_Kh = document.querySelector('#container2');
let container_G = document.querySelector('#container3');
let container_Gh = document.querySelector('#container4');
let container_Umo = document.querySelector('#container5');
let container_Cha = document.querySelector('#container6');
//**all container hide */
let main_container = document.querySelectorAll('.main-container');
main_container[1].style.display = 'none';
main_container[2].style.display = 'none';
main_container[3].style.display = 'none';
main_container[4].style.display = 'none';
main_container[5].style.display = 'none';
main_container[6].style.display = 'none';

//***dainamic Ticket Genarator,(active chose-K) visiable container ***
for(let i = 1; i <= 105; i++) {
    let ticket =`<strong id='js_create_t_Visiable' class='myclass'>k- 00</strong>`;
    visiable_container.innerHTML += `${ticket}`;
    main_Visiable_C.style.display = 'block';

    let js_create_t_Visiable = document.querySelectorAll('#js_create_t_Visiable');
    js_create_t_Visiable.forEach((value, index) => {
        /*cheack if index(1-9)is, true then append 0 (0, 00, 9 ,09) */
        if(index < 10 && index > 0){
            value.innerText = `K-0${index}`;  
        }else{
            value.innerText = `K-${index}`;
        }
    })
}
//*******visiable ticket selection (chose k) *****(E)****
let js_create_t_Visiable = document.querySelectorAll('#js_create_t_Visiable');
//secection ticket array
let booking_Items_Array = [];

//*****hidden ticket selection eatch (Chose k/kh/g/gh/umo/ch..) F********
let booking_Items = (ticket) => {
    ticket.forEach((strong, index) => {
         strong.addEventListener('click', (e) => {
             //ticket validation.......(booked / unbooked);
             if(strong.id == 'booked'){
                 alert('This will be booked');
             }else{
                 booking_Items_Array.push(e.target);
             }
             // send ticket info...
             seat_Details_F(booking_Items_Array);
             
             if(booking_Items_Array.length <= 4){
                 strong.classList.add('ticket-booking-Toggle');
             }
             else{
                 for(let a = 0; a <= 4; a++){       
                    booking_Items_Array[a].classList.remove('ticket-booking-Toggle');
                 }
                 booking_Items_Array = [];
             }
         })
    })
 }

 //********booked ticket Loop*********/
js_create_t_Visiable.forEach((strong, index) => {
    for(let i = k_Ticket; i <= index; i++){
        strong.style.backgroundColor = 'rgb(255, 129, 10)';
        strong.style.color= '#fff';
        strong.style.border = 'none';
        strong.setAttribute('id', 'booked');
    }
})

//********purchase ticket E*********/
let purchase_Btn = document.getElementById('purchase_Btn');
purchase_Btn.addEventListener('click', () => {

    booking_Items_Array.forEach((items, index) => {
        items.style.backgroundColor = 'rgb(255, 129, 10)';
        items.style.color= '#fff';
        items.style.border = 'none';
        items.setAttribute('id', 'booked');
    })
    //**moveto boking page**
    window.open("./purchase.html", "_self");
})

//***dainamic Ticket Genarator (chose-K) F***
for(let i = 1; i <= k_Ticket; i++) {
    let k =`<strong id='js_create_k'>K- 00</strong>`;
    container_K.innerHTML += `${k}`;

    let js_create_k = document.querySelectorAll('#js_create_k');
    js_create_k.forEach((value, index) => {
        ///*cheack if index(1-9)is, true then append 0 (0, 00, 9 ,09) */
        if(index < 10 && index > 0){
            value.innerText = `K-0${index}`;  
        }else{
            value.innerText = `K-${index}`;
        }
    })
}
//***dainamic Ticket Genarator F(chose-KH)***
for(let i = 1; i <= kh_Ticket; i++) {
    let kh =`<strong id='js_create_t_Kh'>KH- 00</strong>`;
    container_Kh.innerHTML += `${kh}`;

    let js_create_t_Kh = document.querySelectorAll('#js_create_t_Kh');
    js_create_t_Kh.forEach((value, index) => {
        ///*cheack if index(1-9)is, true then append 0 (0, 00, 9 ,09) */
        if(index < 10 && index > 0){
            value.innerText = `KH-0${index}`;  
        }else{
            value.innerText = `KH-${index}`;
        }
    })
}
//***dainamic Ticket Genarator F(chose-G)***
for(let i = 1; i <= g_Ticket; i++) {
    let g =`<strong id='js_create_t_G'>k- 00</strong>`;
    container_G.innerHTML += `${g}`;
    
    let js_create_t_G = document.querySelectorAll('#js_create_t_G');
    js_create_t_G.forEach((value, index) => {
        ///*cheack if index(1-9)is, true then append 0 (0, 00, 9 ,09) */
        if(index < 10 && index > 0){
            value.innerText = `G-0${index}`;  
        }else{
            value.innerText = `G-${index}`;
        }
   })
}
//***dainamic Ticket Genarator F(chose-Gh)***
for(let i = 1; i <= gh_Ticket; i++) {
    let gh =`<strong id='js_create_t_Gh'>k- 00</strong>`;
    container_Gh.innerHTML += `${gh}`;
    
    let js_create_t_Gh = document.querySelectorAll('#js_create_t_Gh');
    js_create_t_Gh.forEach((value, index) => {
        ///*cheack if index(1-9)is, true then append 0 (0, 00, 9 ,09) */
        if(index < 10 && index > 0){
            value.innerText = `Gh-0${index}`;  
        }else{
            value.innerText = `Gh-${index}`;
        }
    })
}
//***dainamic Ticket Genarator F(chose-Umo)***
for(let i = 1; i <= umo_Ticket; i++) {
    let cha =`<strong id='js_create_Umo'>k- 00</strong>`;
    container_Umo.innerHTML += `${cha}`;

    let js_create_Umo = document.querySelectorAll('#js_create_Umo');
    js_create_Umo.forEach((value, index) => {
        ///*cheack if index(1-9)is, true then append 0 (0, 00, 9 ,09) */
        if(index < 10 && index > 0){
            value.innerText = `UMO-0${index}`;  
        }else{
            value.innerText = `UMO-${index}`;
        }
    })
}
//***dainamic Ticket Genarator F(chose-Cha)***
for(let i = 1; i <= cha_Ticket; i++) {
    let cha =`<strong id='js_create_Cha'>k- 00</strong>`;
    container_Cha.innerHTML += `${cha}`;

    let js_create_Cha = document.querySelectorAll('#js_create_Cha');
    js_create_Cha.forEach((value, index) => {
        ///*cheack if index(1-9)is, true then append 0 (0, 00, 9 ,09) */
        if(index < 10 && index > 0){
            value.innerText = `Cha-0${index}`;  
        }else{
            value.innerText = `Cha-${index}`;
        }
    })  
}
// *****dropdown menu selector ***(E)*****
let js_create_k = document.querySelectorAll('#js_create_k');
let js_create_t_Kh = document.querySelectorAll('#js_create_t_Kh');
let js_create_t_G = document.querySelectorAll('#js_create_t_G');
let js_create_t_Gh = document.querySelectorAll('#js_create_t_Gh');
let js_create_Umo = document.querySelectorAll('#js_create_Umo');
let js_create_Cha = document.querySelectorAll('#js_create_Cha');
// visialble ticket genarator F call
booking_Items(js_create_t_Visiable);
//***dorpdown menu E and this(chose)display***
menu_List_li.forEach((item, index) => {
    item.addEventListener('click', (e) => {
        if(index == 0){
            //visialble ticket call
            booking_Items(js_create_k);
            main_Visiable_C.style.display = 'none';
            main_container[1].style.display = 'block';
            main_container[2].style.display = 'none';
            main_container[3].style.display = 'none';
            main_container[4].style.display = 'none';
            main_container[5].style.display = 'none';
            main_container[6].style.display = 'none';
        }
        else if(index == 1){
            //visialble ticket call
            booking_Items(js_create_t_Kh);
            main_Visiable_C.style.display = 'none';
            main_container[1].style.display = 'none';
            main_container[2].style.display = 'block';
            main_container[3].style.display = 'none';
            main_container[4].style.display = 'none';
            main_container[5].style.display = 'none';
            main_container[5].style.display = 'none';
        }
        else if(index == 2){
            //visialble ticket call
            booking_Items(js_create_t_G);
            main_Visiable_C.style.display = 'none';
            main_container[1].style.display = 'none';
            main_container[2].style.display = 'none';
            main_container[3].style.display = 'block';
            main_container[4].style.display = 'none';
            main_container[5].style.display = 'none';
            main_container[6].style.display = 'none';
        }
        else if(index == 3){
            //visialble ticket call
            booking_Items(js_create_t_Gh);
            main_Visiable_C.style.display = 'none';
            main_container[1].style.display = 'none';
            main_container[2].style.display = 'none';
            main_container[3].style.display = 'none';
            main_container[4].style.display = 'block';
            main_container[5].style.display = 'none';
            main_container[5].style.display = 'none';
        }
        else if(index == 4){
            //visialble ticket call
            booking_Items(js_create_Umo);
            main_Visiable_C.style.display = 'none';
            main_container[1].style.display = 'none';
            main_container[2].style.display = 'none';
            main_container[3].style.display = 'none';
            main_container[4].style.display = 'none';
            main_container[5].style.display = 'block';
            main_container[6].style.display = 'none';
        }
        else if(index == 5){
            //visialble ticket call
            booking_Items(js_create_Cha);
            main_Visiable_C.style.display = 'none';
            main_container[1].style.display = 'none';
            main_container[2].style.display = 'none';
            main_container[3].style.display = 'none';
            main_container[4].style.display = 'none';
            main_container[5].style.display = 'none';    
            main_container[6].style.display = 'block';    
        }
    })
})

//*************seat_Details_F****$ section*****
let custom_Sidebar_T_Div = document.querySelectorAll('#custom_Sidebar_T_Div div');
let custom_Sidebar_Ticket_Div = document.querySelectorAll('.ticket');

let clear_Ticket_Box = document.getElementById('clear_Ticket_Box');
//Class
let strong_One_1_Class = custom_Sidebar_T_Div[0].children[0];
let strong_One_2_Class = custom_Sidebar_T_Div[1].children[0];
let strong_One_3_Class = custom_Sidebar_T_Div[2].children[0];
let strong_One_4_Class = custom_Sidebar_T_Div[3].children[0];
//Seats
let strong_Two_1_Seats = custom_Sidebar_T_Div[0].children[1];
let strong_Two_2_Seats = custom_Sidebar_T_Div[1].children[1];
let strong_Two_3_Seats = custom_Sidebar_T_Div[2].children[1];
let strong_Two_4_Seats = custom_Sidebar_T_Div[3].children[1];
//Fare
let strong_Three_1_Fare = custom_Sidebar_T_Div[0].children[2];
let strong_Three_2_Fare = custom_Sidebar_T_Div[1].children[2];
let strong_Three_3_Fare = custom_Sidebar_T_Div[2].children[2];
let strong_Three_4_Fare = custom_Sidebar_T_Div[3].children[2];

// get the value in locastorage
let getValue = JSON.parse(localStorage.getItem('indexPage'));
let seat_Class = getValue.class;
let start_Station = getValue.start_Station;
let ticket_Amount = getValue.ticket_Amount;
//total Amount 
let total_Amount = document.getElementById('total_Amount');
//jurney start station
let boarding_Station = document.getElementById('boarding_Station');
let boarding_Time = document.getElementById('boarding_Time');
//jurney start time
let getValue_localStorage = JSON.parse(localStorage.getItem('all_Data'));
let juerney_Start_Time = getValue_localStorage.start_Time;

// *******duplicates_items_Remove_F********
let duplicates_items_Remove_F = (booking_Items_Array) => {
    let chose = [];
    //append value in chose array
    booking_Items_Array.forEach((item) => {
       let items = item.innerText;
       chose.push(items);
    })
    //remove mathch value
    let item = chose.filter((item, index) => {
        return chose.indexOf(item) == index;
    })
    
    return item;
}

//*******seat_Details_F********/
let seat_Details_F = (booking_Items_Array) => {
    let boking_Item_array = duplicates_items_Remove_F(booking_Items_Array);

    if(boking_Item_array.length == 1){
        custom_Sidebar_T_Div[0].style.backgroundColor = '#c3e4ae';
        strong_One_1_Class.innerText = `${seat_Class}`;
        strong_Two_1_Seats.innerText= `${boking_Item_array[0]}`;
        strong_Three_1_Fare.innerText = `${ticket_Amount}৳`;
        total_Amount.innerText = `${ticket_Amount}৳`;
        //1st juerney Station
        boarding_Station.innerText =`${start_Station} (${juerney_Start_Time})`;
    }
    if(boking_Item_array.length == 2){
        custom_Sidebar_T_Div[1].style.backgroundColor = '#c3e4ae';
        strong_One_2_Class.innerText = `${seat_Class}`;
        strong_Two_2_Seats.innerText= `${boking_Item_array[1]}`;
        strong_Three_2_Fare.innerText = `${ticket_Amount}৳`;
        total_Amount.innerText = `${ticket_Amount * 2}৳`;
    }
    if(boking_Item_array.length == 3){
        custom_Sidebar_T_Div[2].style.backgroundColor = '#c3e4ae';
        strong_One_3_Class.innerText = `${seat_Class}`;
        strong_Two_3_Seats.innerText= `${boking_Item_array[2]}`;
        strong_Three_3_Fare.innerText = `${ticket_Amount}৳`;
        total_Amount.innerText = `${ticket_Amount * 3}৳`;
    }
    if(boking_Item_array.length == 4){
        custom_Sidebar_T_Div[3].style.backgroundColor = '#c3e4ae';
        strong_One_4_Class.innerText = `${seat_Class}`;
        strong_Two_4_Seats.innerText= `${boking_Item_array[3]}`;
        strong_Three_4_Fare.innerText = `${ticket_Amount}৳`;
        total_Amount.innerText = `${ticket_Amount * 4}৳`;
    }
    if(boking_Item_array.length == 5){
        alert('Only 4 Ticket You booking !!')
         //Class
        strong_One_1_Class.innerText='Select Ticket !';
        strong_One_2_Class.innerText='Select Ticket !';
        strong_One_3_Class.innerText='Select Ticket !';
        strong_One_4_Class.innerText='Select Ticket !';
        //Seats
        strong_Two_1_Seats.innerText='';
        strong_Two_2_Seats.innerText='';
        strong_Two_3_Seats.innerText='';
        strong_Two_4_Seats.innerText='';
        //Fare amount
        strong_Three_1_Fare.innerText = '';
        strong_Three_2_Fare.innerText = '';
        strong_Three_3_Fare.innerText = '';
        strong_Three_4_Fare.innerText = '';
    }
}

//**************footer section*************
let footer_Container = document.getElementById('footer');
footer_Container.innerHTML = `${footer}`;
