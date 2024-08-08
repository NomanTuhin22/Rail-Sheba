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