// Variables for browser width and height
var browser_width = window.innerWidth;
var browser_height = window.innerHeight;
// Variables for screen width and height
var screen_width = screen.width;
var screen_height = screen.height;
//variable tjat identifies language switch
var swch = document.getElementById("switchOne");

//switch language to english by redirecting to other page with english text
function switchLanguage() {
    "use strict";
    swch.checked = true;
    window.location.href = "span/services.html";
}

//shows mobile menu
function show_menu()
{
    'use strict';
    document.getElementById("menuImage").style.display = "none";
    document.getElementById("switchContainer_mobile").style.display = "none";
    document.getElementById("menu_show_container").style.display = "block";
    document.getElementById("close_image").style.display = "block";
}

//closes mobile menu
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
                            //removes desktop switch
                            document.getElementById("switchContainer").style.display = "none";
                            //remoces desktop logo
                            document.getElementById("logo_container").style.display = "none"
                            //shows mobile menu button
                            document.getElementById("menuImage").style.display = "block";
                            //show mobile menu
                            document.getElementById("logoImage_mobile").style.display = "block";
                            //show mobile switch
                            document.getElementById("switchContainer_mobile").style.display = "block";
                            // Expand containers to take uo whole screens o not side by side
                            document.getElementById("pic_container").style.width = "100%";
                            document.getElementById("about_info_container").style.width = "100%";

                            //Checks if screen width is lessthen or equal to 800. 
                            // that way if someone just minimized their browser on a desktop, the screen size will still be to big
                            //in mobile phone
                            if(screen_width <= 800)
                            {
                                // *** mobile phone ***
                                //resize nav container
                                document.getElementById("switchContainer_mobile").style.paddingTop = "150px";
                                //document.getElementById("nav_container").style.paddingTop = "120px";
                                //resize image
                                //document.getElementById("logo_container").style.width = "0px";
                                //document.getElementById("logoImage").style.height = "100px";
                               // document.getElementById("menuImage").style.height = "90px";
                                //document.getElementById("menuImage").style.width = "100px";
                                //bar height
                                //document.getElementById("bar").style.height = "155px";
                            }
                            else
                            {
                                //*** in mini browser ***
                                //resize nav container
                                document.getElementById("nav_container").style.paddingTop = "60px";
                                //resize image
                                //document.getElementById("logoImage_mobile").style.height = "50px";
                                //bar height
                                document.getElementById("bar").style.height = "125px";
                                document.getElementById("logo_container").style.display = "none";
                            }
                            
                            
                        }
                        //checks if screen width and browser width are more then 800px
                        if((screen_width > 800) && (browser_width > 800))
                        {
                            //closes menu incase resize screen whle mobile menu open
                            close_menu();
                            //remove mobileswitch
                            document.getElementById("switchContainer_mobile").style.display = "none";
                            //remove mobile logo
                            document.getElementById("logoImage_mobile").style.display = "none";
                            //remove monile menu button
                            document.getElementById("menuImage").style.display = "none";
                            //Show desktop logo
                            document.getElementById("logo_container").style.display = "block";
                            //show desktop switch
                            document.getElementById("switchContainer").style.display = "block";
                            //Show tabs 
                            document.getElementById("list_one").style.display = "inline";
                            document.getElementById("list_two").style.display = "inline";
                            document.getElementById("list_three").style.display = "inline";
                            document.getElementById("list_four").style.display = "inline";
                            //half containers so they can be side by side
                            document.getElementById("pic_container").style.width = "45.5%";
                            document.getElementById("about_info_container").style.width = "45.5%";
                            
                            //resize nav container
                            document.getElementById("nav_container").style.paddingTop = "5px";
                            //resize image
                            document.getElementById("logoImage").style.height = "120px";
                            
                            //bar height
                            document.getElementById("bar").style.height = "170px";
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