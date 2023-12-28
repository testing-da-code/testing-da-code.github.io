// Variables for browser width and height
var browser_width = window.innerWidth;
var browser_height = window.innerHeight;
// Variables for screen width and height
var screen_width = screen.width;
var screen_height = screen.height;
//variable that identifies language switch
var swch = document.getElementById("switchOne");
//switch language to english by redirecting to other page with english text
function switchLanguage() 
{
    "use strict";
    swch.checked = true;
    window.location.href = "span/contactUs.html";
}

//redirects user to email account they are logged into on the device they are using
// it prefills all the info they inputted
function submit_email()
{
    'use strict';
    var first_name, last_name, email, message,mailto_string,subject;
    //gets first name inputted
    first_name = document.getElementById("email_first_name").value;
    //gets last name inputted
    last_name = document.getElementById("email_last_name").value;
    //gets email inputted
    email = document.getElementById("email").value;
    //gets messae inputted
    message = document.getElementById("email_message").value;
    
    //checks if first name txtfield is not empty
    if(first_name.length == 0)
    {
            document.getElementById("error").value = "Please enter first name";
    }
    else
    {
        //checks if first name txtfield is not more then 250 characters
        if(first_name.length > 50)
        {
                document.getElementById("error").value = "First name cannot be more then 50 characters";
        }
        else
        {
            //checks if last name txtfield is not empty
            if(last_name.length == 0)
            {
                  document.getElementById("error").value = "Please enter last name";   
            }
            else
            {
                //checks if last name txtfield is not more then 50 charcters
                if(last_name.length > 50)
                {
                      document.getElementById("error").value = "Last name cannot be more then 50 characters";   
                }
                else
                {
                    //checks if email txtfield is not empty
                    if(email.length == 0)
                    {
                            document.getElementById("error").value = "Please enter email";
                    }
                    else
                    {
                        //checks if email txtfield is not more then 255 characters
                        if(email.length > 256)
                        {
                                document.getElementById("error").value = "Email cannot be more then 256 characters";
                        }
                        else
                        {
                            //checks if message txtfield is not empty
                            if(message.length == 0)
                            {
                                    document.getElementById("error").value = "Please enter message";
                            }
                            else
                            {
                                //checks if message txtfield is not more then 500 characters
                                if(message.length > 500)
                                {
                                        document.getElementById("error").value = "Message cannot be more then 500 characters";
                                }
                                else
                                {
                                    //Gets info inputted and formats it to be prfilled in email when
                                    // it redirects user to email logged into on device they are using
                                    subject = "Website Message - " + first_name + " " + last_name + " - " + email;
                                    mailto_string = "mailto:jenniferz@jennizcounselingcenter.com?subject=" + subject + "&body=" + message;
                                    
                                    //simulates click to link
                                    window.location.href = mailto_string;
                                }
                            }
                        }
                    }
                }
            }
             
        }
       
    } 
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
                            //remove desktop switch
                            document.getElementById("switchContainer").style.display = "none";
                            //remove desktop logo
                            document.getElementById("logo_container").style.display = "none"
                           //show mobile menu button
                            document.getElementById("menuImage").style.display = "block";
                            //show mobile logo
                            document.getElementById("logoImage_mobile").style.display = "block";
                             //show mobile switch
                            document.getElementById("switchContainer_mobile").style.display = "block";
                            //expad containers so they take up 100% of widht so they are not side by side
                            document.getElementById("contact_me_container").style.width = "100%";
                            document.getElementById("form_container").style.width = "100%";

                            //Checks if screen widht is less then or equal to 800. 
                            // that way if someone just minimized their browser on a desktop, the screen size will still be to big
                            //in mobile phone
                            if(screen_width <= 800)
                            {
                                //on mobile phone
                                //resize nav container
                                document.getElementById("switchContainer_mobile").style.paddingTop = "150px";
                            }
                            else
                            {
                                // *** on mini browser ***
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
                            //remove mobile switch
                            document.getElementById("switchContainer_mobile").style.display = "none";
                            //remove mobile logo
                            document.getElementById("logoImage_mobile").style.display = "none";
                            //remove mobile menu button
                            document.getElementById("menuImage").style.display = "none";
                            //show desktop logo
                             document.getElementById("logo_container").style.display = "block";
                            //show desktop switch 
                            document.getElementById("switchContainer").style.display = "block";
                            //show tabs of navigation bar for desktop
                            document.getElementById("list_one").style.display = "inline";
                            document.getElementById("list_two").style.display = "inline";
                            document.getElementById("list_three").style.display = "inline";
                            document.getElementById("list_four").style.display = "inline";
                            //reduce containers to fit side by side for desktop view
                            document.getElementById("contact_me_container").style.width = "30%";
                            document.getElementById("form_container").style.width = "60%";
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