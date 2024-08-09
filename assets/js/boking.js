//********Get all_Data into localStorage**********
let all_User_Data = JSON.parse(localStorage.getItem('all_Data'));
let indexPage_Data = JSON.parse(localStorage.getItem('indexPage'));
// ******Get input data in localstorage*******
let input_Data = localStorage.getItem('indexPage');
let data = JSON.parse(input_Data);

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
start_Time[0].children[0].innerText = `${all_User_Data.select_Day} ${all_User_Data.select_M} ${all_User_Data.start_Time}`;
start_Time[1].children[0].innerText = `${all_User_Data.select_Day} ${all_User_Data.select_M} ${all_User_Data.start_Time}`;
start_Time[2].children[0].innerText = `${all_User_Data.select_Day} ${all_User_Data.select_M} ${all_User_Data.start_Time}`;
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
end_Time[0].children[0].innerText = `${all_User_Data.select_Day} ${all_User_Data.select_M} ${all_User_Data.end_Time}`;
end_Time[1].children[0].innerText = `${all_User_Data.select_Day} ${all_User_Data.select_M} ${all_User_Data.end_Time}`;
end_Time[2].children[0].innerText = `${all_User_Data.select_Day} ${all_User_Data.select_M} ${all_User_Data.end_Time}`;

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