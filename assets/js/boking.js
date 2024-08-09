//********Get all_Data into localStorage**********
let all_User_Data = JSON.parse(localStorage.getItem('all_Data'));

// **********ticket section and hidden_popup_window ************
let main_Container = document.querySelectorAll('.main-container');
let train_Name_1 = document.getElementById('train_Name_1');
let train_Name_2 = document.getElementById('train_Name_2');
let train_Name_3 = document.getElementById('train_Name_3');
let hide_and_show_div = document.querySelectorAll('#hide_and_show_div');
let toggle_Menu = document.querySelectorAll('.toggle_Menu');
let train_Details = document.querySelectorAll('#train_Details');

//******popup_window and ticket container******
let all_Train_list = JSON.parse(localStorage.getItem('train_info'));
let all_Train_Names = all_Train_list.train;

// ******ticket container section*******
let number =  Math.floor(Math.random() * (3 - 0) + 0);
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