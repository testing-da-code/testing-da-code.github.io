//Variables for broswer width afn height
var browser_width = window.innerWidth;
var browser_height = window.innerHeight;
//variables for screen width and height
var screen_width = screen.width;
var screen_height = screen.height;
//variable to identify language switch
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
function switchLanguage() {
    "use strict";
    swch.checked = false;
    window.location.href = "../index.html";
}

//This function checks to see if this device is an apple os
//returns true if it is apple os
//returns false if it is not an apple os
function iOS()
{
    "use strict";
    if( /iPhone|iPad|iPod/i.test(navigator.userAgent))
    {
        //returns true if an apple os
        return true;
    }
    else
    {
       //returns false if no an apple os
       return false;
    }
}

//shows mobile menu
function show_menu()
{
    'use strict';
    document.getElementById("menuImage").style.display = "none";
    document.getElementById("switchContainer_mobile").style.display = "none";
    document.getElementById("menu_show_container").style.display = "block";
    document.getElementById("close_image").style.display = "block";
    document.getElementById("supervised_container").style.display = "none";
}

//closes mobile menu
function close_menu()
{
    'use strict';
    //document.getElementsByTagName("body").style.height = "auto";
     document.getElementById("menu_show_container").style.display = "none";
    document.getElementById("close_image").style.display = "none";
    document.getElementById("menuImage").style.display = "block";
    document.getElementById("supervised_container").style.display = "block";
    document.getElementById("switchContainer_mobile").style.display = "block";
                            
   
}

//closes the small pop up box at bottom of screen
// that asks if want to change language
function close_language_box()
{
    'use strict';
     document.getElementById("language_container").style.display = "none";
    document.getElementById("close_image_language").style.display = "none";

                            
   
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
                            //remove switch container for mobile
                            document.getElementById("switchContainer").style.display = "none";
                            //remove client portal for desktop
                            document.getElementById("client_portal_container").style.display = "none";
                            //remove navigation container for desktop
                            document.getElementById("list_one").style.display = "none";
                            document.getElementById("list_two").style.display = "none";
                            document.getElementById("list_three").style.display = "none";
                            document.getElementById("list_four").style.display = "none";
                            //remmove logo for desktop
                            document.getElementById("logo_container").style.display = "none";
                            //show menu button image
                            document.getElementById("menuImage").style.display = "block";
                            //show mobile logo image
                            document.getElementById("logoImage_mobile").style.display = "block";
                             //show language switch for mobile
                            document.getElementById("switchContainer_mobile").style.display = "block";
                            
                            //Checks if screen widht is lessthen or equal to 800. 
                            // that way if someone just minimized their browser on a desktop, the screen size will still be to big
                            //in mobile phone
                            if(screen_width <= 800)
                            {
                                //resize nav container
                                // this controls the height of the header, in the other files im using
                                // the padding of the switch container to accomplish this
                                document.getElementById("nav_container").style.paddingTop = "160px"; 
                            }
                            else
                            {
                                //in mini browser
                                //enters here when browser is minimized below or equal to 800
                                //adjust size of center logo
                                document.getElementById("center_logo").style.width = "150px";
                                document.getElementById("center_logo").style.borderWidth = "4px";
                                //adjust language question/button font
                                document.getElementById("language_container").style.fontSize = "20px";
                                document.getElementById("language_button").style.fontSize = "20px";
                                document.getElementById("nav_container").style.paddingTop = "70px"; 
                                
                            }
                            //checks to see if it is an apple os and if it the screen is under or equal to 800px
                            if(iOS() && (screen_width <= 800))
                            {
                                //removes parrallax pic containers
                                document.getElementById("whole_container_one").style.display = "none";
                                document.getElementById("second_container").style.display = "none";
                                document.getElementById("image_divider").style.display = "none";
                            }
                            else
                            {
                                //removes apple os still pic containers
                                document.getElementById("iphone_whole_container_one").style.display = "none";
                                document.getElementById("iphone_whole_container_two").style.display = "none";
                                document.getElementById("iphone_image_divider").style.display = "none";
                            }
                            
                            
                        }
                        //checks if screen width and browser width are more then 800px
                        if((screen_width > 800) && (browser_width > 800))
                        {
                            //closes menu incase resize screen whle mobile menu open
                            close_menu();
                            //switch
                            document.getElementById("switchContainer_mobile").style.display = "none";
                            //adjust size of center logo
                            document.getElementById("center_logo").style.width = "250px";
                            document.getElementById("center_logo").style.borderWidth = "6px";
                            //remove mobile logo
                            document.getElementById("logoImage_mobile").style.display = "none";
                            //remove menu image button
                            document.getElementById("menuImage").style.display = "none";
                            document.getElementById("logo_container").style.display = "block";
                            //switch
                            document.getElementById("switchContainer").style.display = "block";
                            
                            document.getElementById("list_one").style.display = "inline";
                            document.getElementById("list_two").style.display = "inline";
                            document.getElementById("list_three").style.display = "inline";
                            document.getElementById("list_four").style.display = "inline";
                            //show client portal for desktop
                            document.getElementById("client_portal_container").style.display = "block";
                            //adjust language question/button font
                            document.getElementById("language_container").style.fontSize = "30px";
                            document.getElementById("language_button").style.fontSize = "30px";
                          
                           
                            //resize nav container
                            document.getElementById("nav_container").style.paddingTop = "40px";
                            //resize image
                            document.getElementById("logoImage").style.height = "0px";
                            
                           
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

  

//For image one, this function replaces the low res image with the high res image once they have fully loaded                    
function show_high_res_image_one()
{
    "use strict";
    document.getElementById("para_image_one").style.backgroundImage = 'url(images/home/image_one_high.JPG)';
 
}
//For image two, this function replaces the low res image with the high res image once they have fully loaded                    
function show_high_res_image_two()
{
    "use strict";
    document.getElementById("para_image_two").style.backgroundImage = "linear-gradient(rgba(0,0,0,.5),rgba(0,0,0,.5)), url(images/home/image_two_high.jpg)";
 
}
//For image two, this function replaces the low res image with the high res image once they have fully loaded  
function show_high_res_image_three()
{
    "use strict";
    document.getElementById("para_image_divider").style.backgroundImage = "url(images/home/image_three_high.jpg)";
 
}
//For iphone image one, this function replaces the low res image with the high res image once they have fully loaded                    
function show_iphone_high_res_image_one()
{
    "use strict";
    document.getElementById("iphone_image_one").src = 'images/home/iphone_image_one_high.jpg';
}
//For iphone image two, this function replaces the low res image with the high res image once they have fully loaded                    
function show_iphone_high_res_image_two()
{
    "use strict";
    document.getElementById("iphone_para_image_two").style.backgroundImage = "linear-gradient(rgba(0,0,0,.5),rgba(0,0,0,.5)), url(images/home/iphone_image_two_high.jpg)";
}
//For iphone image three, this function replaces the low res image with the high res image once they have fully loaded                    
function show_iphone_high_res_image_three()
{
    "use strict";
    document.getElementById("iphone_image_three").src = 'images/home/iphone_image_three_high.jpg';
}