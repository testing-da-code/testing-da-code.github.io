// Variables for browser width and height
var browser_width = window.innerWidth;
var browser_height = window.innerHeight;
// Variables for screen width and height
var screen_width = screen.width;
var screen_height = screen.height;
//variable that identifies language switch
var swch = document.getElementById("switchOne");
var swch_mobile = document.getElementById("switchOne_mobile");

//runs whatever is inside the function brackets on page laoding fully
window.onload = function() {
    "use strict";
    //makes slider slide to spansih since on psanish page
    swch.checked = true;
    swch_mobile.checked = true;
};

//switch language to english by redirecting to other page with english text
function switchLanguage() 
{
    "use strict";
    swch.checked = false;
    window.location.href = "../about.html";
}

//shows mobile menu when click mobile menu button
function show_menu()
{
    'use strict';
    document.getElementById("menuImage").style.display = "none";
    document.getElementById("switchContainer_mobile").style.display = "none";
    document.getElementById("menu_show_container").style.display = "block";
    document.getElementById("close_image").style.display = "block";
}

//closes mobile menu when click mobile menu button
function close_menu()
{
    'use strict';
     document.getElementById("menu_show_container").style.display = "none";
    document.getElementById("close_image").style.display = "none";
    document.getElementById("menuImage").style.display = "block";
    document.getElementById("switchContainer_mobile").style.display = "block";
                            
   
}

//function that checks screen size and adjust view for desktop, mobile or mini browser(when user adjust browser in desktop)
function checkScreen()
{
                        'use strict';
                        //closes menu incase resize screen whle mobile menu open
                        close_menu();
                        //Checks if screen width or browser width are 800px or below. if so enter
                        if((screen_width <= 800) || (browser_width <= 800))
                        {
                            //remove tabs
                            document.getElementById("list_one").style.display = "none";
                            document.getElementById("list_two").style.display = "none";
                            document.getElementById("list_three").style.display = "none";
                            document.getElementById("list_four").style.display = "none";
                            //remove switch container
                            document.getElementById("switchContainer").style.display = "none";
                            //remove desktop logo
                            document.getElementById("logo_container").style.display = "none";
                            //show mobile menu
                            document.getElementById("menuImage").style.display = "block";
                            //show mobile logo
                            document.getElementById("logoImage_mobile").style.display = "block";
                             //show mobile switch
                            document.getElementById("switchContainer_mobile").style.display = "block";
                            //Expand containers so everything is one line as opposed to side by side
                            document.getElementById("pic_container").style.width = "100%";
                            document.getElementById("about_info_container").style.width = "100%";
                            document.getElementById("approach_pic_container").style.width = "100%";
                            document.getElementById("approach_info_container").style.width = "100%";
                            
                            //Checks if screen widht is less then or equal to 800. 
                            // that way if someone just minimized their browser on a desktop, the screen size will still be to big
                            //in mobile phone
                            if(screen_width <= 800)
                            {
                                document.getElementById("switchContainer_mobile").style.paddingTop = "150px";
                            }
                            else
                            {
                                // *** on mini browser ***
                                //resize nav container
                                document.getElementById("nav_container").style.paddingTop = "60px";
                                //resize image
                                //document.getElementById("logoImage_mobile").style.height = "90px";
                                //bar height
                                document.getElementById("bar").style.height = "140px";
                                document.getElementById("logo_container").style.display = "none";
                                //resize nav container
                                document.getElementById("switchContainer_mobile").style.paddingTop = "0px";
                                //document.getElementById("menuImage").style.height = "40px";
                            }
                            
                            
                        }
                        //checks if screen width and browser width are more then 800px
                        if((screen_width > 800) && (browser_width > 800))
                        {
                            //closes menu incase resize screen whle mobile menu open
                            close_menu();
                            //remove mobile switch
                            document.getElementById("switchContainer_mobile").style.display = "none";
                            //remove mobile logo
                            document.getElementById("logoImage_mobile").style.display = "none";
                            //remove mobile menu 
                            document.getElementById("menuImage").style.display = "none";
                            //show desktop logo
                            document.getElementById("logo_container").style.display = "block";
                            //show desktop switch
                            document.getElementById("switchContainer").style.display = "block";
                            //show desktop navigation bar
                            document.getElementById("list_one").style.display = "inline";
                            document.getElementById("list_two").style.display = "inline";
                            document.getElementById("list_three").style.display = "inline";
                            document.getElementById("list_four").style.display = "inline";
                            //half width of containers so fit side by side for desktop view
                            document.getElementById("pic_container").style.width = "45.5%";
                            document.getElementById("about_info_container").style.width = "45.5%";
                            document.getElementById("approach_pic_container").style.width = "47%";
                            document.getElementById("approach_info_container").style.width = "47%";
                           
                            //resize nav container
                            document.getElementById("nav_container").style.paddingTop = "5px";
                            //resize image
                            document.getElementById("logoImage").style.height = "120px";
                            document.getElementById("switchContainer_mobile").style.paddingTop = "0px";
                            //bar height
                            document.getElementById("bar").style.height = "210px";
                           
                        }

}
//checks screen on start
checkScreen();

//checks to see if browesr is resized, 
//if resized calls functions to adjust website to screen dimensions
window.addEventListener('resize', 
    function(event){
                        //Gets browser widht and height
                        browser_width = window.innerWidth;
                        browser_height = window.innerHeight;
                        //Gets screen width and height
                        screen_width = screen.width;
                        screen_height = screen.height;
                        //calls function to adjsut website on screen and broswer dimensions
                        checkScreen();
                    });