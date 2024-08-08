// ***********Train Info section***********
let train_Info = {
    train : ['PANCHAGARH EXPRESS (794)','Ekota Express(706)','Drutojan Express(758)','DOLONCHAPA EXPRESS (768)','BANGLABANDHA EXPRESS (804)','CHILAHATI EXPRESS (806)','NILSAGAR EXPRESS (766)','NILSAGAR EXPRESS (766)','BURIMARI EXPRESS (810)'],
}
//*********particuler station object*********
let Panchagarh_To_Dhaka = ['B Sirajul Islam','Kismat','Ruhia','Thakurgaon_Road','Pirganj','Setabganj','Dinajpur','Chirirbandar','Parbatipur','Fulbari','Birampur','Panchbibi','Joypurhat','Akkelpur','Santahar','Ahsanganj','Natore','Ishwardi Bypass','Chatmohar','Jamtail','BBSetu_E','Tangail','Joydebpur','Dhaka'];
let all_Station = {
    Panchagarh_To_Dhaka,
}

 //localstorage Train name send 
 localStorage.setItem('train_info', JSON.stringify(train_Info));
 //localstorage Train all station send 
 localStorage.setItem('all_Station', JSON.stringify(all_Station));

// ********navigation*********
let toggle_Btn = document.getElementById('toggle_Btn');
let menu_List = document.getElementById('menu_List');
let userEmil = document.getElementById('userEmil');
let logout_Btn = document.getElementById('logout_Btn');

//***toggle menu */
toggle_Btn.addEventListener('click', () => {
    menu_List.classList.toggle('hidden');   
})
// ********user Accound Create**********
let user_Id = localStorage.getItem('userData');
let userData_Obj = JSON.parse(user_Id); 

// ********send_Data_log_div*********
let send_Data_log_div = () => {
    // ***append userData into menu li***
    userEmil.innerHTML =`${userData_Obj.u_Email}`;
}
// *********Logout Btn *****event************
logout_Btn.addEventListener('click', () => {
    window.open("login.html" , '_self');
    localStorage.clear();
})

// ********alert_Text selector*********
let alert_Text = document.getElementById('alert_Text');
// ********alert_Text alert_Text_F*********
window.onload = () => {
   //**call F**
   send_Data_log_div();
   setInterval(() => {
     alert_Text.classList.add('alert_Text');
     alert_Text.style.opacity = '.3';
   },3000);
   setInterval(() => {
       alert_Text.style.opacity = '1';
   },4000);
}


// ***********user Input Validtion selection**********
let input = document.getElementById('input_Station');
let input_To = document.getElementById('input_To');
let jurney_Date = document.getElementById('date');
let selection = document.getElementById('selection');
let helping_Title = document.getElementById('helping_Title');
let helping_Text = document.getElementById('helping_Text');
let helping_Img = document.getElementById('helping_Img');
let result_Box = document.querySelector('#result_Box ul');
let result_Box_To = document.querySelector('#result_Box_To ul');
// **btn**
let search_Btn = document.getElementById('search_Btn');
let clear_Btn = document.getElementById('clear_Btn');
// ********stations list**********
let stations_List = ['Abdulpur','Ashanganj','Akkelpur','Azampur','B_Sirajul_Islam','Baijitpur','Biman_Bandar','Birampur','Burimari','Chadpur','Dhaka','Dinapur','Fulbari','Gachihata','Harashpur','Ishwardi','Jamalpur_Twon','Kauia','Lalmonirhat','Maijgaon','Natore','Nilphamari','Padma','Quasba','Rangpur','Rajshahi','Thakurgaon_Road','Ullapara'];
// **********some Data Stor in localStorage*************
let form_Staion = input.value;
let to_Station = input_To.value;
let date_V = jurney_Date.value;
let send_Data = new Date(date_V);
//***user Current Day***
let select_Day = send_Data.getDate();
let m = send_Data.toDateString();
//***user Current Month***
let select_M = m.substring(4, 7);

let start_Time = new Date().toLocaleTimeString();
//****end Time**********
let current_Time = new Date();
let convert_M_Second = current_Time.getTime();
//***rendom number***
let random_Number = Math.floor(Math.random() * (8 - 1 + 1) + 1);
let addMlSeconds = 60 * 60 * 1000; // 1 h = 3600000 s
let end_M_Second = (addMlSeconds * random_Number);
//*** end time ***
let total_M_Second = new Date(convert_M_Second + end_M_Second);
let end_Time = total_M_Second.toLocaleTimeString();
let total_Duration_H = total_M_Second.getHours();
let total_Duration_M = total_M_Second.getMinutes();
//***ticket Value***
let random_Ticket = Math.floor(Math.random() * (100 - 1 + 1) + 1);


// **********collect Data a arry and filter the value********
//**********all_Data_Collect_F*****Form******
input.onkeyup = () => {
    let result = [];
    let user_Input_Value = input.value;
    if(user_Input_Value.length) {
        result = stations_List.filter((value) => {
          return result = value.toLocaleLowerCase().includes(user_Input_Value.toLocaleLowerCase());
        })
    }
    all_Data_Append_C_Fild_F(result);
}
//**********all_Data_Collect_Append current fild***********
let all_Data_Append_C_Fild_F = (result) => {
    let allData = result.map((list) => {
        return "<li onclick = selectInput(this)>"+ list +"</li>";
    }) 
    result_Box.innerHTML = allData.join('');    
}
// ***********set data inpu fild*********
function selectInput(list){  //Not Work
    input.value = list.innerHTML;
    result_Box.innerHTML = '';
}
// **********input To F**********
input_To.onkeyup = () => {
    let result2 = [];
    let inputTo = input_To.value;
    if(inputTo.length) {
        result2 = stations_List.filter((value) => {
          return result2 = value.toLocaleLowerCase().includes(inputTo.toLocaleLowerCase());
        })
    }
    all_Data_Append_Input_To(result2, result_Box_To);
} 
//**********all_Data_Collect_Append current fild***********
let all_Data_Append_Input_To = (result, result_Box_To) => {
    let allData = result.map((list) => {
        return "<li onclick='select_Input_To(this)'>"+ list +"</li>";
    })
    result_Box_To.innerHTML = allData.join('');   
}
// ***********set data inpu fild*********
function select_Input_To(list) {
    input_To.value = list.innerHTML;
    result_Box_To.innerHTML = '';
}

// ***********user data cullect and send localStorage F***********
let user_Data_Send_LocalStorage = () => {
    let all_Data = {
        start_station : `${form_Staion}`,
        to_Station    : `${to_Station}`,
        start_Time    : `${start_Time}`,
        end_Time      : `${end_Time}`,
        select_Day    : `${select_Day}`,
        select_M      : `${select_M}`,
        total_Duration_H : `${total_Duration_H}`,
        total_Duration_M : `${total_Duration_M}`,
        random_Ticket : `${random_Ticket}`,
    }
    return all_Data;
}

// ***********valiation F***********
let valiation_F = () => {
    // get value F call
    let all_Data = user_Data_Send_LocalStorage();
    // *** all dainamic data append in this objct*********
    let start_Jurney_V = input.value;
    let end_Jurney_V = input_To.value;
    let jurney_Date_V = jurney_Date.value;
    let selection_V = selection.value;
    
    if((start_Jurney_V && end_Jurney_V && jurney_Date_V && selection_V) == ''){
        helping_Text.innerText = 'Empty Value !!';
        helping_Text.classList.add('h-wornig');
    }
    else if((start_Jurney_V || end_Jurney_V).match(/\d+/) || (start_Jurney_V || end_Jurney_V).match(/[!@#\$%\^\&*\)\(+=._-]{1,}$/g)) {
        helping_Text.innerText = 'Not Match !!';
        helping_Text.classList.add('h-wornig');
    }
    else{
        helping_Title.innerText = 'Loging Success';
        helping_Text.innerText ='';
        helping_Img.src = '';
        // **create object**
        let indexPage_Obj = {};
        indexPage_Obj.start_Station = start_Jurney_V;
        indexPage_Obj.end_Station = end_Jurney_V;
        indexPage_Obj.J_Date =  jurney_Date_V;
        indexPage_Obj.class =  selection_V;
       
        // **send data local storage**
        localStorage.setItem('indexPage', JSON.stringify(indexPage_Obj));
        //*********send Data localStorage***********
        localStorage.setItem('all_Data',JSON.stringify(all_Data));
        alert('working')
    }
    
}
// **********Secarch Btn ****Event**********
search_Btn.addEventListener('click',valiation_F);