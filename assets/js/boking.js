//navigation, worning, footer 
import {navigation, worning, footer} from "./nav_worning_footer.js";

//********Get all_Data into localStorage**********
let all_User_Data = JSON.parse(localStorage.getItem('all_Data'));
let indexPage_Data = JSON.parse(localStorage.getItem('indexPage'));
//get & set current month
let user_date = indexPage_Data.J_Date;
let user_Month = user_date.substring(8);
// ******Get input data in localstorage*******
let input_Data = localStorage.getItem('indexPage');
let data = JSON.parse(input_Data);
// ********navigation*********
let navigation_container = document.getElementById('navigation');
navigation_container.innerHTML = `${navigation}`;
let toggle_Btn = document.getElementById('toggle_Btn');
let menu_List = document.getElementById('menu_List');
let userEmil = document.getElementById('userEmil');
let logout_Btn = document.getElementById('logout_Btn');

/***toggle menu */
toggle_Btn.addEventListener('click', () => {
    menu_List.classList.toggle('hidden');   
})
/******logout_Btn*********/
logout_Btn.addEventListener('click', () => {
    //move the index.html page 
    window.open("index.html", "_self");
})
//******Modify User Destaination section*******
// ***show div***
let show_Div = `
  <div id="show_Div" class="modify-show-div row  justify-content-lg-between align-items-lg-end">
    <!--**one**-->
    <div class=".col-sm .col-lg-4 m-show-div-one d-flex gap-3">
      <div><img class="rounded-circle shadow border-5 border-light" src="./assets/images/m-logo.jpg" width="72px" height="72px" alt="img"></div>
      <div>
        <h5 ><strong id="show_D_S_Starion">B Sirajul Islam</strong> - <strong id="show_D_S_End">Thakurgaon_Road</strong></h5>
        <h5 id="show_Div_Date"></h5>
      </div>
    </div>
    <!--**Two**-->
    <div class=".col-sm .col-lg-4 m-show-div-two text-center">
      <span class="shadow-sm">
        <button id='prev_Train'> <i class="fa-solid fa-angle-left"></i> Prev.Day</button>
        <button id='next_Train'>Next.Day <i class="fa-solid fa-angle-right"></i></button>
      </span>
    </div>
    <!--**Three**-->
    <div class=".col-sm .col-lg-4 m-show-div-three d-sm-flex justify-content-sm-center justify-content-lg-end"><button id="change_Station" class="shadow-sm">Change Station</button></div>
  </div>
`;
// ***hidden div***
let hidden_div = `
   <div id="hidden_Div" class="modify-hidden-div row row-cols-auto justify-content-lg-center justify-content-xl-evenly">
   <!-- **one** -->
   <div class="col-sm-12 col-lg-auto">
     <p><label for="form">Form</label></p>
     <input id="h_start_Station" class="col-input" type="text" value="B Sirajul Islam">
   </div>
   <!-- **two** -->
   <div class="col-sm-12 col-lg-auto">
     <p><label for="To">To</label></p>
     <input id="h_end_Stat" class="col-input" type="text" value="Dinajpur">
   </div>
   <!-- **three** -->
   <div class="col-sm-12 col-lg-auto">
     <p><label for="Date Of Journey">Date Of Journey</label></p>
     <input id="h_date" class="col-input col-date" type="date">
   </div>
   <!-- **four** -->
   <div class="col-sm-12 col-lg-auto select-div">
     <p><label for="Choose Class">Choose Class</label></p>
     <select class="col-input bg-white" id="selection">
       <option value="0">Choce a Class</option>
       <option value="1" selected="selected">AC-B</option>
       <option value="2">SNIGDHA</option>
       <option value="3">F-BERTH</option>
       <option value="4">F-SEAT</option>
       <option value="5">F-CHAIR</option>
       <option value="6">S-CHAIR</option>
       <option value="7">SHOVAN</option>
       <option value="8">SHULOV</option>
       <option value="9">AC-CHAIR</option>
    </select>
   </div>
   <!-- **five** -->
   <div class="col-sm-12 col-lg-auto search-train">
     <p><button id="close_Btn">Close <i class="fa-solid fa-x"></i> </button></p>
     <button>Search Train</button>
   </div>
  </div>
`;
// ******Get input data in localstorage*******
let show_Container = document.getElementById('show_Container');
let hidden_Container = document.getElementById('hidden_Container');
//*****append show and hidden div*****
show_Container.innerHTML = `${show_Div}`;
hidden_Container.innerHTML = `${hidden_div}`;
hidden_Container.style.display = 'none';
// ************inicial starion data add*************
//show div items selection
let show_D_S_Starion = document.getElementById('show_D_S_Starion');
let show_D_S_End = document.getElementById('show_D_S_End');
let show_Div_Date = document.getElementById('show_Div_Date');
let next_Train = document.getElementById('next_Train');
let prev_Train = document.getElementById('prev_Train');
// ***append show div data***
show_D_S_Starion.innerHTML = `${data.start_Station}`;
show_D_S_End.innerHTML = `${data.end_Station}`;
show_Div_Date.innerHTML = `${data.J_Date}`;
//hidden div items selection
let h_start_Station = document.getElementById('h_start_Station');
let h_end_Stat = document.getElementById('h_end_Stat');
let h_date = document.getElementById('h_date');
let h_Selection = document.querySelector('#selection');
// **replace lostorage Data hidden div (input.value)
h_start_Station.value = `${data.start_Station}`;
h_end_Stat.value = `${data.end_Station}`;
h_date.value = `${data.J_Date}`;
h_Selection.options[1].innerHTML= `${data.class}`;

//*******Ticket Next & Previce section******** */
// current month array []
let this_Month = [];

let allDate = new Date();
let currentYear = allDate.getFullYear();
let currentMonth = allDate.getMonth();
// current month last day
let all_Days = new Date(currentYear, currentMonth, 0).getDate();
//current month create in this loop
for(let i = 1; i <= all_Days; i++){
  this_Month.push(i);
}
// substring (2024-08-29)
let days =  data.J_Date.substring(8);
let day  = parseInt(days);
let d = day;

//*******next_Train Btn E********/
let count = 1;
next_Train.addEventListener('click', () => {
  if(count <= 5 && (this_Month.length <= all_Days)){
    count++;
    if(d < 9){
      show_Div_Date.innerHTML = `${currentYear} - 0${currentMonth} - 0${this_Month[d++]}`;
    }else{
      show_Div_Date.innerHTML = `${currentYear} - ${currentMonth} - ${this_Month[d++]}`;
    }
  }else{
    count = 1;
    d = day;
  }
})

//*******prev_Train Btn E********/
let count2 = 1;
let dd = day - 1;
prev_Train.addEventListener('click', () => {
  if(count2 <= 6 && (this_Month.length >= -1)){
    count2++;
    if(dd < 9){
      show_Div_Date.innerHTML = `${currentYear} - 0${currentMonth} - 0${this_Month[dd--]}`;
    }else{
      show_Div_Date.innerHTML = `${currentYear} - ${currentMonth} - ${this_Month[dd--]}`;
    }
  } 
  else{
    count2 = 1;
    dd = day;
  }
})

// ***hidden div Event***
let change_Station = document.getElementById('change_Station');
change_Station.addEventListener('click', () => {
  show_Container.style.display = 'none';
  hidden_Container.style.display = 'block';
})
// ***show div Event***
let close_Btn = document.getElementById('close_Btn');
close_Btn.addEventListener('click', () => {
  hidden_Container.style.display = 'none';
  show_Container.style.display = 'block';
})

//**popup_window inicial */
let popup_window_Section = `
 <div id="hidden_popup_window" class="trin-stop-staion-container">
    <div class="train-stop-s-sub-container">
      <div class="train-stop-main-continer bounceIn shadow">
        <!-- **train-stop-name** -->
        <div class="t-stop-name d-flex justify-content-between">
          <h6 id='current_T'>DOLONCHAPA EXPRESS (768)</h6>
          <h5 id="arival_Container_Close"><i class="fa-solid fa-circle-xmark"></i></h5>
        </div>
        <!-- **Runs On** -->
         <div class="days">
            <h6>Runs On : 
              <span>Fri</span>
              <span>Sat</span>
              <span>Sun</span>
              <span>Mon</span>
              <span>Tue</span>
              <span>wed</span>
              <span>Thu</span>
            </h6>
         </div>
         <!--**routes station** -->
         <div class="routes"><h5><span>Routes</span></h5></div>
         <!-- **station** -->
          <div class="arrival-container">
          <!-- ***arival station add*** -->
          <div id='nex_Station'></div>
          <!-- **total duration** -->
          <div class="total-duration"><h6>Total Duration: <strong id='popup_Duration'>11:35h</strong></h6></div>
        </div>
      </div>
    </div>
  </div>
`;
let hidden_Popup_Window = document.getElementById('hidden_Popup_Window');
// **********ticket section and hidden_popup_window ************
let main_Container = document.querySelectorAll('.main-container');
let train_Name_1 = document.getElementById('train_Name_1');
let train_Name_2 = document.getElementById('train_Name_2');
let train_Name_3 = document.getElementById('train_Name_3');
let hide_and_show_div = document.querySelectorAll('#hide_and_show_div');
let toggle_Menu = document.querySelectorAll('.toggle_Menu');
let train_Details = document.querySelectorAll('#train_Details');
//***start time***
let start_Time = document.querySelectorAll('.start-time');
let total_time= document.querySelectorAll('.total-time');
//***start time jone***
start_Time[0].children[0].innerText = `${user_Month} ${all_User_Data.select_M} ${all_User_Data.start_Time}`;
start_Time[1].children[0].innerText = `${user_Month} ${all_User_Data.select_M} ${all_User_Data.start_Time}`;
start_Time[2].children[0].innerText = `${user_Month} ${all_User_Data.select_M} ${all_User_Data.start_Time}`;
//***start time station***
start_Time[0].children[1].innerText = `${indexPage_Data.start_Station}`;
start_Time[1].children[1].innerText = `${indexPage_Data.start_Station}`;
start_Time[2].children[1].innerText = `${indexPage_Data.start_Station}`;
//***total duration ***/
total_time[0].children[1].innerText = `${all_User_Data.total_Duration_H}H | ${all_User_Data.total_Duration_M}M`;
total_time[1].children[1].innerText = `${all_User_Data.total_Duration_H}H | ${all_User_Data.total_Duration_M}M`;
total_time[2].children[1].innerText = `${all_User_Data.total_Duration_H}H | ${all_User_Data.total_Duration_M}M`;
//***ticket random value ***/
let ticket = document.querySelectorAll('.ticket');
ticket[0].children[2].children[1].innerText =`${all_User_Data.random_Ticket}`;
ticket[1].children[2].children[1].innerText =`${all_User_Data.random_Ticket}`;
ticket[2].children[2].children[1].innerText =`${all_User_Data.random_Ticket}`;
ticket[3].children[2].children[1].innerText =`${all_User_Data.random_Ticket}`;
//***end time***
let end_Time = document.querySelectorAll('.end-time');
end_Time[0].children[0].innerText = `${user_Month} ${all_User_Data.select_M} ${all_User_Data.end_Time}`;
end_Time[1].children[0].innerText = `${user_Month} ${all_User_Data.select_M} ${all_User_Data.end_Time}`;
end_Time[2].children[0].innerText = `${user_Month} ${all_User_Data.select_M} ${all_User_Data.end_Time}`;

end_Time[0].children[1].innerText = `${all_User_Data.end_Time}`;
end_Time[0].children[1].innerText = `${indexPage_Data.end_Station}`;
end_Time[1].children[1].innerText = `${indexPage_Data.end_Station}`;
end_Time[2].children[1].innerText = `${indexPage_Data.end_Station}`;

//******popup_window and ticket container******
let all_Train_list = JSON.parse(localStorage.getItem('train_info'));
let all_Train_Names = all_Train_list.train;

// ******ticket container section*******
let number =  Math.floor(Math.random() * (3 - 0) + 0);
// ***********main_Container Hide***********
main_Container.forEach((list) => {
    list.style.display = 'none';
})
// ***********train name(list) hide and show***********
toggle_Menu.forEach((value, index) => {
    let hide = 0;
    //*train 2,3 details hide*
    if(index > 0){
      hide_and_show_div[index].style.display = 'none';
    }
    value.addEventListener('click', () => {
        if(hide == 1){
          hide_and_show_div[index].style.display = 'none';
          hide = 0;
        }else{
          hide_and_show_div[index].style.display = 'block';
          hide = 1;
        }
    })
  })
// find popup...train name and set value F
let current_Train_F = (trainOne, trainTwo, trainThree) => {
    all_User_Data.train_List_0 = `${trainOne}`;
    all_User_Data.train_List_1 = `${trainTwo}`;
    all_User_Data.train_List_2 = `${trainThree}`;
  }
  // ***********hidden_Popup_Window open and close section*************
  // **********display Train List F ***********
  window.onload = () => {
    if(number == 0){
      main_Container[0].style.display = 'block';
      train_Name_1.innerText = `${all_Train_Names[0]}`;
      current_Train_F(all_Train_Names[0]);
    }
    if(number == 1){
      main_Container[0].style.display = 'block';
      main_Container[1].style.display = 'block';
      //**Train name add */
      train_Name_1.innerText = `${all_Train_Names[1]}`;
      train_Name_2.innerText = `${all_Train_Names[2]}`;
      current_Train_F(all_Train_Names[1], all_Train_Names[2]);
    }
    if(number == 2){
      main_Container[0].style.display = 'block';
      main_Container[1].style.display = 'block';
      main_Container[2].style.display = 'block';
      //**Train name add */
      train_Name_1.innerText = `${all_Train_Names[3]}`;
      train_Name_2.innerText = `${all_Train_Names[4]}`;
      train_Name_3.innerText = `${all_Train_Names[5]}`;
      current_Train_F(all_Train_Names[3], all_Train_Names[4], all_Train_Names[5]);
    }
  }

//*********all arivale station genarator F*********/
let append_All_Station_F = (nex_Station) => {
  let all_Station = JSON.parse(localStorage.getItem('all_Station'));
  let all_Station_Array = all_Station.Panchagarh_To_Dhaka;

  all_Station_Array.forEach((station) => {
    nex_Station.innerHTML += `
      <div>
       <div class="d-flex gap-2 arival-logo-div">
         <h5><span><img src="./assets/images/arival-logo.png" alt="logo"></span></h5>
         <h5>${station}</h5>
       </div>
       <div id='all_Span' class="d-flex justify-content-between gap-5 arival-items-div">
         <span>Arrival:<span class="arival-text"></span></span>
         <span>Halt:<span class="arival-text">00min</span></span>
         <span>Departure:<span class="arival-text">07:20 am BST</span></span>
         <span>Duration:<span class="arival-text">00h</span></span>
       </div>
     </div>
    `;
  })

//**********station value append into div**********6/7
let all_S_Span = document.querySelectorAll('#nex_Station div #all_Span');
let popup_Duration = document.getElementById('popup_Duration');
//11:04:41
let start_Jurney_Time = all_User_Data.start_Time;
let hour = start_Jurney_Time.substring(0, 2);
let minit = start_Jurney_Time.substring(3, 5);
let h = parseInt(hour);
let m = parseInt(minit);
//incress minit
let num = Math.floor(Math.random() * (20 - 15) + 15);
// all popup window data append
for(let i in all_S_Span){
  if([i] <= all_S_Span.length){
    let halt_Time = Math.floor(Math.random() * (5 - 1) + 1);
    let Duration_Time = Math.floor(Math.random() * (20 - 5) + 5);
    m = m + num;
    let date = new Date();
    date.setHours(h);
    date.setMinutes(m);
    let arival_Time = date.toLocaleTimeString();
    date.setMinutes(m + halt_Time);
    let departure_Mint = date.toLocaleTimeString();

    // append data eatch Station...
    all_S_Span[i].children[0].innerText =`Arival : ${arival_Time}`;
    all_S_Span[i].children[1].innerText =`Halt : ${halt_Time} min`;
    all_S_Span[i].children[2].innerText = `Departure: ${departure_Mint} BST`;
    all_S_Span[i].children[3].innerText = `Duration: ${Duration_Time} min`;
    //1st station duration
    all_S_Span[0].children[3].innerText = `Duration: 00 min`;
    popup_Duration.innerText = `${arival_Time}`;
  }
 }
}
//**********train_Details *****sectoin********
train_Details.forEach((btn, index) => {
  btn.addEventListener('click', (e) => {
    //poput window append
    hidden_Popup_Window.innerHTML = `${popup_window_Section}`;
    // popup window - train name
    let current_T = document.getElementById('current_T');
    if(index == 0){current_T.innerText = `${all_User_Data.train_List_0}`}
    if(index == 1){current_T.innerText = `${all_User_Data.train_List_1}`}
    if(index == 2){current_T.innerText = `${all_User_Data.train_List_2}`}
 
    // all station container in popup window
    let nex_Station = document.getElementById('nex_Station');
    append_All_Station_F(nex_Station);

    //***popup window close btn ****/
    let arival_Container_Close = document.getElementById('arival_Container_Close');
    arival_Container_Close.addEventListener('click', () => {
      hidden_Popup_Window.innerHTML = '';
    })
  })
})

//**********bookNow_Btn E*****sectoin********
let ticket_Container = document.querySelectorAll('.ticket');
let bookNow_Btn = document.querySelectorAll('#bookNow_Btn');
let train_Container = document.querySelectorAll('#train_Container');
let train = document.querySelectorAll('.train-name p');

//*******select Train name E*******
train_Container.forEach((item, index) => {
    item.addEventListener('click', () => {
        if(index == 0){
          data.train_Name = `${train[index].innerText}`;
          localStorage.setItem('indexPage',JSON.stringify(data));
        }
        if(index == 1){
          data.train_Name = `${train[index].innerText}`;
          localStorage.setItem('indexPage',JSON.stringify(data));
        }
        if(index == 2){
          data.train_Name = `${train[index].innerText}`;
          localStorage.setItem('indexPage',JSON.stringify(data));
        }
    })
})

//******bookNow-Btn click and move the ticket.html page ********/
ticket_Container.forEach((value, index) => {
  value.addEventListener('click', (e) => {
      if(e.target.id == 'bookNow_Btn'){
        //select this id and find the prent-Element
        let c_Div = e.target.parentElement;
        let p_Div = c_Div.parentElement.children[0].innerHTML;
        let amount = c_Div.parentElement.children[1].children[0].innerText;
        // set value
        data.class = `${p_Div}`;
        data.ticket_Amount = `${amount}`;
        // send value
        localStorage.setItem('indexPage',JSON.stringify(data));
        //move the ticket_Booking.html page 
        window.open("ticket_Booking.html", "_self");
      }
  })
})

//**************footer section*************
let footer_Container = document.getElementById('footer');
footer_Container.innerHTML = `${footer}`;
