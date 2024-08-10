//*********ticket menu section*********
let menu_List = document.querySelectorAll('ul li a');
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
let main_container = document.querySelectorAll('.main-container');
let visiable_container = document.querySelector('#container0');
let container_K = document.querySelector('#container1');
let container_Kh = document.querySelector('#container2');
let container_G = document.querySelector('#container3');
let container_Gh = document.querySelector('#container4');
let container_Umo = document.querySelector('#container5');
let container_Cha = document.querySelector('#container6');
//**all container hide */
main_container[1].style.display = 'none';
main_container[2].style.display = 'none';
main_container[3].style.display = 'none';
main_container[4].style.display = 'none';
main_container[5].style.display = 'none';
main_container[6].style.display = 'none';