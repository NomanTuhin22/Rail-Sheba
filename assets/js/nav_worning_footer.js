
// ***********navigation component*************
export let navigation = `
     <div class="d-flex justify-content-lg-around justify-content-xxl-evenly align-items-lg-center custom-menubar shadow">
           <!-- ***logo*** -->
           <div class="d-flex w-100">
              <div>
                 <img class="logo" src="./assets/images/logo.png" alt="img">
              </div>
              <div class="logo-title">
                 <h2>Bangladesh</h2>
                 <h2>Railway</h2>
              </div>
           </div>
          <!-- ******nav list****** -->
           <div id="menu_List" class="menu-min-div w-100 hidden d-lg-block">
               <ul class="d-lg-flex justify-content-xxl-evenly justify-content-lg-center custom-items p-0">
                   <li><a href="#">Home</a></li>
                   <li><a href="#">Train Information</a></li>
                   <li><a href="#">Loging</a></li>
                   <li><a href="#">Contact Us</a></li>
                   <li class="user-id"><a id="user_Id" href="#">Loging <i class="fa-solid fa-user"></i></a>
                       <div class="dropdown-div shadow">
                          <div>
                           <h2 id="userEmil"><span><i class="fa-solid fa-envelope"></i></span>Tuhin002020@gmail.com</h2>
                           <p><button id="logout_Btn">Logout</button></p>
                          </div>
                       </div>
                   </li>
               </ul>
           </div>
    <!-- ****toggle**** -->
    <div class="d-flex justify-content-end mt-3 me-3 d-lg-none w-100">
        <strong class='toggle' id="toggle_Btn"><i class="fa-solid fa-bars-staggered"></i></strong>
    </div>
    </div>
`;
// ***********worning component*************
export let worning = `
    <div class="d-flex justify-content-center w-100 w-lg-80" id="alert_Text">
       <div class="d-flex gap-3 justify-content-center align-items-lg-center alert-messages shadow px-3">
           <p><img class="aleart-img mt-3" src="./assets/images/aleart.jpg" alt="img"></p>
           <p id='custom_W' class="text-danger">১৮ জুলাই ২০২৪ হতে সাময়িকভাবে ট্রেন চলাচল স্থগিত থাকায় যে সকল ট্রেন সম্পূর্ণ চলাচল করে নাই, সে সকল ট্রেনের টিকিট রিফান্ডের ক্ষেত্রে যাত্রীদের করণীয় সম্পর্কিত তথ্যদিঃ..<a href='https://railapp.railway.gov.bd/' style ='color:#10b981;  font-family:"Roboto", sans-serif;'> railapp.railway.gov.bd</a></p>
       </div>
    </div>
`;
// ***********footer component*************
export let footer = `
    <div class="d-flex flex-column flex-lg-row justify-content-lg-evenly align-items-center custom-footer">
        <div class="powered-by">
            <h6>Powered By</h6>
            <div class="d-flex shadow powered-by-card">
                <img class="shadow" src="./assets/images/noman.jpg" alt="img">
                <div>
                 <p class="name">Noman Tuhin</p>
                 <p class="working">As a juniyer Devloper in JavaScript</p>
                </div>
            </div>
        </div>
        <div class="d-flex custom-tc">
            <p class="mr-4"><a href="#">Terms and Conditions |</a> </p>
            <p> <a href="#"> Privacy Policy</a></p>
        </div>
        <div class="d-flex justify-content-center align-items-center pt-4 custom-footer-logo">
            <div><img src="./assets/images/logo.png" width="100px" alt="logo"></div>
            <div class="logo-text">
                <p>Bangladesh Railway </p>
                <p>নিরাপদ. আরামদায়ক. সাশ্রায়ী</p>
            </div>
        </div>
    </div>
`;

// *********payment section*********
export let card_Bkash = `
    <!-- bank logo -->
      <div class="d-flex justify-content-center border-bottom">
        <img src="./assets/images/paylogo.png" alt="logo" width="170px" h="170px">
      </div>
    <!-- rail seba logo -->
      <div>
        <div class="d-flex py-4">
            <p class="d-flex justify-content-between">
                <div class="py-2">
                    <p class="rounded-circle mx-3 custom-railseba-shadow"><img src="./assets/images/logo.png" alt="logo" width="50px" height="50px"></p>
                </div>
                <div class="logo-text">
                   <p>Bangladesh Railway</p>
                   <p>Invoice : 38458584</p>
                </div>
            </p>
            <p id="total_Amount" class="custom-amount-m mt-3 ">৳ 210</p>
        </div>
      </div>
    <!-- input section-->
     <div class="input-section d-flex text-center align-items-center">
        <div>
            <p class="text-light pb-3">Your bkash Account number</p>
            <h5><input id='bank_Input' class="py-2 custom-input" type="text" placeholder="e.g 01XXXXXXXXX"></h5>
            <p class="custom-input-p py-3 text-light">By clicking on Confirm,you are agreeing to the <a>terms & conditions</a></p>
        </div>
     </div>
    <!-- btn group -->
     <div class="d-flex justify-content-center custom-group">
       <div> 
        <button id='close_Btn' class="custom-btn btn1">CLOSE</button>
        <button id='confirm_Btn' class="custom-btn btn2">CONFIRM</button>
       </div>
     </div>
    <!-- hote line -->
    <div>
        <h6 class="custom-call-text text-center py-3"><span class="custom-call-icon rounded-circle"><i class="fa-solid fa-phone"></i></span> 16247</h6>
    </div>
`;

export let card_Nagad =`
    <!-- bank logo -->
    <div class="d-flex justify-content-center border-bottom">
      <img src="./assets/images/nagod.png" alt="logo" width="200px" h="200px">
    </div>
    <!-- rail seba logo -->
    <div>
      <div class="d-flex py-4">
          <p class="d-flex justify-content-between">
              <div class="py-2">
                  <p class="rounded-circle mx-3 custom-railseba-shadow"><img src="./assets/images/logo.png" alt="logo" width="50px" height="50px"></p>
              </div>
              <div class="logo-text">
                 <p>Bangladesh Railway</p>
                 <p>Invoice : 38458584</p>
              </div>
          </p>
          <p id="total_Amount" class="custom-amount-m mt-3 ">৳ 210</p>
      </div>
    </div>
    <!-- input section -->
   <div class="input-section-nagad d-flex text-center align-items-center">
      <div>
          <p class="text-light pb-3">Your Nagad Account number</p>
          <h5><input id='bank_Input' class="py-2 custom-input" type="text" placeholder="e.g 01XXXXXXXXX"></h5>
          <p class="custom-input-p py-3 text-light">By clicking on Confirm,you are agreeing to the <a>terms & conditions</a></p>
      </div>
   </div>
  <!-- btn group -->
   <div class="d-flex justify-content-center custom-group">
     <div> 
      <button id='close_Btn'  class="custom-btn btn1">CLOSE</button>
      <button id='confirm_Btn' class="custom-btn btn-nagad-c">CONFIRM</button>
     </div>
   </div>
  <!-- hote line -->
  <div>
      <h6 class="btn-nagad-c text-center py-3"><span class="custom-call-icon nagad-icon rounded-circle"><i class="fa-solid fa-phone"></i></span> 16167</h6>
  </div>
`;

export let card_Rocket = `
    <!-- bank logo -->
      <div class="d-flex justify-content-center border-bottom">
         <img src="./assets/images/rocate.png" alt="logo" width="170px" height="120px">
       </div>
       <!-- rail seba logo -->
       <div>
         <div class="d-flex py-4">
             <p class="d-flex justify-content-between">
                 <div class="py-2">
                     <p class="rounded-circle mx-3 custom-railseba-shadow"><img src="./assets/images/logo.png" alt="logo" width="50px" height="50px"></p>
                 </div>
                 <div class="logo-text">
                    <p>Bangladesh Railway</p>
                    <p>Invoice : 38458584</p>
                 </div>
             </p>
             <p id="total_Amount" class="custom-amount-m mt-3 ">৳ 210</p>
         </div>
       </div>
         <!-- input section -->
        <div class="input-section-rocket d-flex text-center align-items-center">
           <div>
               <p class="text-light pb-3">Your Nagad Account number</p>
               <h5><input id='bank_Input' class="py-2 custom-input" type="text" placeholder="e.g 01XXXXXXXXX"></h5>
               <p class="custom-input-p py-3 text-light">By clicking on Confirm,you are agreeing to the <a>terms & conditions</a></p>
           </div>
        </div>
       <!-- btn group -->
        <div class="d-flex justify-content-center custom-group">
          <div> 
           <button id='close_Btn'  class="custom-btn btn1">CLOSE</button>
           <button id='confirm_Btn' class="custom-btn btn-rocket-c">CONFIRM</button>
          </div>
        </div>
       <!-- hote line -->
       <div>
           <h6 class="btn-nagad-c text-center py-3 btn-rocket-c"><span class="custom-call-icon rounded-circle rocket-icon"><i class="fa-solid fa-phone"></i></span> 16167</h6>
       </div>
`;

export let card_Upay = `
    <!-- bank logo -->
    <div class="d-flex justify-content-center border-bottom">
       <img src="./assets/images/upayLogo.png" alt="logo" width="170px" height="120px">
     </div>
     <!-- rail seba logo -->
     <div>
       <div class="d-flex py-4">
           <p class="d-flex justify-content-between">
               <div class="py-2">
                   <p class="rounded-circle mx-3 custom-railseba-shadow"><img src="./assets/images/logo.png" alt="logo" width="50px" height="50px"></p>
               </div>
               <div class="logo-text">
                  <p>Bangladesh Railway</p>
                  <p>Invoice : 38458584</p>
               </div>
           </p>
           <p id="total_Amount" class="custom-amount-m mt-3 ">৳ 210</p>
       </div>
     </div>
       <!-- input section -->
      <div class="input-section-upay d-flex text-center align-items-center">
         <div>
             <p class="text-light pb-3">Your Nagad Account number</p>
             <h5><input id='bank_Input' class="py-2 custom-input" type="text" placeholder="e.g 01XXXXXXXXX"></h5>
             <p class="custom-input-p py-3 text-light">By clicking on Confirm,you are agreeing to the <a>terms & conditions</a></p>
         </div>
      </div>
     <!-- btn group -->
      <div class="d-flex justify-content-center custom-group">
        <div> 
         <button id='close_Btn'  class="custom-btn btn1">CLOSE</button>
         <button id='confirm_Btn' class="custom-btn btn-upay-c">CONFIRM</button>
        </div>
      </div>
     <!-- hote line -->
     <div>
         <h6 class="btn-nagad-c text-center py-3 btn-upay-c"><span class="custom-call-icon rounded-circle upay-icon"><i class="fa-solid fa-phone"></i></span> 16167</h6>
     </div>
`;