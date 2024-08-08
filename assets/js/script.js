
// *********Card 1 *****selectior******
let card_One = document.getElementById('card_One');
// *********Card 2 ****selectior*******
let email = document.getElementById('email');
let password = document.getElementById('password');
let worning_div = document.getElementById('worning_div');
let loggin_Btn = document.getElementById('loggin_Btn');
let create_Btn = document.getElementById('create_Btn');
let card_Two = document.getElementById('card_Two');
let remember = document.getElementById('remember');
let label_Password = document.getElementById('label_Password');
let forget_Password = document.getElementById('forget_Password');
// *********Card 3 *****selectior******
let card_Three = document.getElementById('card_Three');
let get_Email = document.getElementById('get_Email');

// *******create worning******p****
let p = document.createElement('p');
    p.classList.add('worning');

// *************worning_F*****F*********
let worning_F = (worning) => {
  worning_div.children[0].style.display='none';
  worning_div.children[1].style.display='none';
  p.innerText = `${worning}`;
  worning_div.appendChild(p);
  //****worning append***
  let clear = setInterval(() => {
      worning_div.children[0].style.display='block';
      worning_div.children[1].style.display='block';
      p.remove();
      clearInterval(clear);
  },1000)
}
// ***********forget_Password_F*************
let forget_Password_F = () => {
    let passwordValue = password.value;
    if(!email.value == '' && !passwordValue.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*(_|[^\w])).+$/)) {
       label_Password.innerText = 'New Password';
     //Rail00@#
      let num = Math.floor(Math.random(100) * 10);
      let newPassword = `Abc0${num}@#`;
      //  ****copy clipboard***
      navigator.clipboard.writeText(newPassword);
      password.value = newPassword;
      worning_F(newPassword);
    }
    else{
     let empty ='Empty @email !!';
     worning_F(empty);
    }
 }
 // ***********forget_Password_F*****Event********
forget_Password.addEventListener('click', forget_Password_F);
// ************data_Remember_F*****F*********
let data_Remember_F = () => {
    let save = 'auto remember data';
    worning_F(save);
}
// ***remember***Event***
remember.addEventListener('click', data_Remember_F);
// *********setData_LocalStorage_F****F*****
let setData_LocalStorage_F = (user_Email, user_Password) => {
    let userEmil = user_Email;
    let userPassword = user_Password;
    let userInfo = {};
        userInfo.u_Email = userEmil;
        userInfo.u_Password = userPassword;
        localStorage.setItem('userData', JSON.stringify(userInfo));
}
// *************loging_Accound_F*****F*********
let loging_Accound_F = () => {
    let getData = localStorage.getItem('userData');
    if(getData === null) {
        alert('Not Found Accound !!');
    }
    if(!(getData.u_Email && getData.u_Password)){
        let empty = 'Not Found Accound !!!';
        worning_F(empty);
    }else{
        //****goto home page*/
        window.open("./userInfo.html");
    }
}
// *******loging_Accound_F*****Event*****
loggin_Btn.addEventListener('click', loging_Accound_F);
// ***********create_Btn_F******validaton data****
let validation_F = () => {
    let user_Email = email.value;
    let user_Password = password.value;

    if(user_Email =="" || user_Password == ""){
      let empty = 'Empty Value !'
      worning_F(empty);
    }
    else {
        if(user_Email.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)){
            if(user_Password.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*(_|[^\w])).+$/)){
             //*****sed data card 3******** 
            //****go to home page*/
            window.open("./userInfo.html", "_self");
            //user_Password(user_Password);
             setData_LocalStorage_F(user_Email ,user_Password);
             email.value ='';
             password.value ='';
           }
           else {
               let p_Misematch = 'Enter Valid Email Password !';
               worning_F(p_Misematch);
           }
        }
        else {
            let p_Mise = 'Not Valid @mail !';
            worning_F(p_Mise);
        } 
    }
}

// ********create_Btn_F******Event****
create_Btn.addEventListener('click', validation_F);