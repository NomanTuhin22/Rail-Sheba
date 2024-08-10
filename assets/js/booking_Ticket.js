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
menu_List.forEach((item, index) => {
    item.addEventListener('click', (e) => {
        if(index == 0){
            main_Visiable_C.style.display = 'none';
            main_container[1].style.display = 'block';
            main_container[2].style.display = 'none';
            main_container[3].style.display = 'none';
            main_container[4].style.display = 'none';
            main_container[5].style.display = 'none';
            main_container[6].style.display = 'none';
        }
        else if(index == 1){
            main_Visiable_C.style.display = 'none';
            main_container[1].style.display = 'none';
            main_container[2].style.display = 'block';
            main_container[3].style.display = 'none';
            main_container[4].style.display = 'none';
            main_container[5].style.display = 'none';
            main_container[5].style.display = 'none';
        }
        else if(index == 2){
            main_Visiable_C.style.display = 'none';
            main_container[1].style.display = 'none';
            main_container[2].style.display = 'none';
            main_container[3].style.display = 'block';
            main_container[4].style.display = 'none';
            main_container[5].style.display = 'none';
            main_container[6].style.display = 'none';
        }
        else if(index == 3){;
            main_Visiable_C.style.display = 'none';
            main_container[1].style.display = 'none';
            main_container[2].style.display = 'none';
            main_container[3].style.display = 'none';
            main_container[4].style.display = 'block';
            main_container[5].style.display = 'none';
            main_container[5].style.display = 'none';
        }
        else if(index == 4){
            main_Visiable_C.style.display = 'none';
            main_container[1].style.display = 'none';
            main_container[2].style.display = 'none';
            main_container[3].style.display = 'none';
            main_container[4].style.display = 'none';
            main_container[5].style.display = 'block';
            main_container[6].style.display = 'none';
        }
        else if(index == 5){
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