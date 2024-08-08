

// ********navigation*********
let toggle_Btn = document.getElementById('toggle_Btn');
let menu_List = document.getElementById('menu_List');
let userEmil = document.getElementById('userEmil');
let logout_Btn = document.getElementById('logout_Btn');

//***toggle menu */
toggle_Btn.addEventListener('click', () => {
    menu_List.classList.toggle('hidden');   
})