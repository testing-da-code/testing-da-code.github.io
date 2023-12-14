//View Info:
// This page has 3 different views
//      - Desktop: more then set_limit width which is what most people will
//                  see on a laptop
//      - Browser to small: which is when the user shrinks the browser width 
//                  to small so lower or equal to the set limit. This means
//                  the browser is to small to have the desktop view look
//                  viewable
//      - Mobile: This view is for mobile on devices(phones,tablets, etc.)


//These variables are used to get the browser width and height
var browser_width = window.innerWidth;
var browser_height = window.innerHeight;

//These variables are used to get thescreen width and height
var screen_width = screen.width;
var screen_height = screen.height;

// This variable is the set limit used to know when the browser width is to
// small for desktop view so the minimum width for desktop view in a sense 
// since anthting above set_limit is desktop view
var set_limit = 1000;

//View: mobile, browser to small
//Summary: This function opens dropdown menu of tabs in header
function show_menu()
{
    'use strict';
    document.getElementById("menuImage").style.display = "none";
    document.getElementById("menu_show_container").style.display = "block";
    document.getElementById("close_image").style.display = "block";
}
//View: mobile, browser to small
//Summary: This function closes dropdown menu of tabs in header
function close_menu()
{
    'use strict';
     document.getElementById("menu_show_container").style.display = "none";
    document.getElementById("close_image").style.display = "none";
    document.getElementById("menuImage").style.display = "block";
                            
   
}

// redirects user to email account they are logged into on the device they are using
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
                                    mailto_string = "1234567899@gmail.com ?subject=" + subject + "&body=" + message;
                                    window.open(mailto_string);
                                }
                            }
                        }
                    }
                }
            }
             
        }
       
    } 
}

//View: Browser too small
//Summary: This functio checks to see if browser was adjusted to a size that is to small for
//          the desktop view and this is not on a small device since the screen width
//          is still bigger then the set limit
//          Returns true if it is to small and false if it is not
function is_browser_to_small()
{
    'use strict';
    if(!(screen_width <= set_limit) && (browser_width <= set_limit))
    {
        return true;
    }
    else
    {
        return false;
    }
}
function checkScreen()
{
    'use strict';
                        //  View: Browser to small
                        //  Summary: Basically for when user adjust browser to too small view   
                        //  Description: Here we changed the code to only allow 
                        //  changes if the browser size
                        //  is below/equal the set limit variable 
                        //  and the screen size is above the set limit variable
                        if(is_browser_to_small())
                        {
                            //Remove desktop tabs
                            //side note: in css i just did this with the class for 
                            // mobile view
                            document.getElementById("list_one").style.display = "none";
                            document.getElementById("list_two").style.display = "none";
                            document.getElementById("list_three").style.display = "none";
                            document.getElementById("list_four").style.display = "none";

                            //Show mobile menu button
                            document.getElementById("menuImage").style.display = "block";
                            //resize nav container
                            document.getElementById("nav_container").style.paddingTop = "60px";
                            //resize image
                            document.getElementById("logoImage").style.height = "50px";
                            //bar height
                            document.getElementById("bar").style.height = "125px";

                            //Ajusting left side of container 
                            document.getElementById("left_side_container").style.width = "100%";
        
                            //Ajusting right side of container 
                            document.getElementById("right_side_container").style.width = "90%";
                            document.getElementById("right_side_container").style.padding = "0px";
                            document.getElementById("right_side_container").style.float = "none";
                            document.getElementById("right_side_container").style.overflow = "hidden";
                            
                            

                            
                        }
                        //  View: Desktop
                        //  This code is ran in regular desktop/browser view so that means
                        //  that both the browser and screen width are greater then set_limit
                        if((screen_width > set_limit) && (browser_width > set_limit))
                        {
                            //Closes menu if menu is open when adjusting browser
                            close_menu();
                            //Removes menu button 
                            document.getElementById("menuImage").style.display = "none";
                            //Brings back tabs
                            document.getElementById("list_one").style.display = "inline";
                            document.getElementById("list_two").style.display = "inline";
                            document.getElementById("list_three").style.display = "inline";
                            document.getElementById("list_four").style.display = "inline";
                          
                            //resize nav container
                            document.getElementById("nav_container").style.paddingTop = "70px";
                            //resize image
                            document.getElementById("logoImage").style.height = "80px";
                            //bar height
                            document.getElementById("bar").style.height = "170px";


                            //Ajusting left side of container 
                            document.getElementById("left_side_container").style.width = "55%";
        ;
                            //Ajusting right side of container 
                            document.getElementById("right_side_container").style.width = "45%";
                            document.getElementById("right_side_container").style.paddingRight = "30px";
                            document.getElementById("right_side_container").style.paddingLeft = "10px";
                            document.getElementById("right_side_container").style.float = "right";
                            document.getElementById("right_side_container").style.overflow = "hidden";
                           
                        }

}
//Here i call the checkscreen function for when page first loads for 
//adjusting to neccessary view
checkScreen();

//This event listener is used to to know when the browser is resized
// if it is resized then checks screen to see if changes need to be made for
// the website to look presentable
window.addEventListener('resize', 
    function(event){
                        //Gets new browser width and height
                        browser_width = window.innerWidth;
                        browser_height = window.innerHeight;
                        //Gets new screen width and height
                        screen_width = screen.width;
                        screen_height = screen.height;
                        
    
                        //Closes menu when resized since if you dont close it then
                        //both buttons will show with menu open
                        close_menu();
                        //when screen resizes calls this function to adjust website 
                        //to work with website dimensions
                        checkScreen();
                        
                    });
