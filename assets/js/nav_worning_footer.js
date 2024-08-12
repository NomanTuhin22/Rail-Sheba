
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
               <ul class="d-lg-flex justify-content-xxl-evenly custom-items p-0">
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
           <p><img class="aleart-img mt-3" src="./asstes/images/aleart.jpg" alt="img"></p>
           <p class="text-danger">১২ জুন, ২০২৪ তারিখ হতে ঈদের পূর্বদিন পর্যন্ত আন্তঃনগর নীলসাগর ও চিলাহাটি এক্সপ্রেস ট্রেন ঢাকা রেলওয়ে স্টেশনের পরিবর্তে ঢাকা ক্যান্টনমেন্ট রেলওয়ে স্টেশন হতে চলাচল করবে। উক্ত ট্রেন দুইটি বিমানবন্দর স্টেশনে যাত্রা বিরতি করবে না।</p>
       </div>
    </div>
`;
// ***********footer component*************
export let footer = `
    <div class="d-flex flex-column flex-lg-row justify-content-lg-evenly align-items-center custom-footer">
        <div class="powered-by">
            <h6>Powered By</h6>
            <div class="d-flex shadow powered-by-card">
                <img class="shadow" src="./asstes/images/noman.jpg" alt="img">
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
        <div class="d-flex justify-content-center align-items-center pt-5 custom-footer-logo">
            <div><img src="./asstes/images/logo.png" width="100px" alt="logo"></div>
            <div class="logo-text">
                <p>Bangladesh Railway </p>
                <p>নিরাপদ. আরামদায়. সাশ্রায়ী</p>
            </div>
        </div>
    </div>
`;
