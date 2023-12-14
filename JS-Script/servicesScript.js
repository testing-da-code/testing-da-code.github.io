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

//View:Browser to small
// Is the width for all the buttons to expand so the can be the same 
var button_width = "50%";

//View: Desktop, Browser to small
//This variable is to know what button is selected
// Value is from 1 -6 for each button
// Button 1 being 1 and Button 6 being 6
var button_selected = 1;

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

function reset_buttons()
{
    'use strict';
    document.getElementById("button_one").style.width = "40%";
    document.getElementById("button_one").style.backgroundColor = "rgb(120,120,120)";
   
    document.getElementById("button_two").style.width = "40%";
    document.getElementById("button_two").style.backgroundColor = "rgb(120,120,120)";  
    
    document.getElementById("button_three").style.width = "40%";
    document.getElementById("button_three").style.backgroundColor = "rgb(120,120,120)";

    document.getElementById("button_four").style.width = "40%";
    document.getElementById("button_four").style.backgroundColor = "rgb(120,120,120)";

    document.getElementById("button_five").style.width = "40%";
    document.getElementById("button_five").style.backgroundColor = "rgb(120,120,120)";

    document.getElementById("button_six").style.width = "40%";
    document.getElementById("button_six").style.backgroundColor = "rgb(120,120,120)";
}
function reset_images()
{
    'use strict';
    document.getElementById("button_one_image").style.display = "none";
    document.getElementById("button_two_image").style.display = "none";
    document.getElementById("button_three_image").style.display = "none";
    document.getElementById("button_four_image").style.display = "none";
    document.getElementById("button_five_image").style.display = "none";
    document.getElementById("button_six_image").style.display = "none";
}
function reset_all()
{
    'use strict';
    reset_buttons();
    reset_images();
    
}
//  View: Mobile
//  Summary: This function makes all images connected to the buttons dissapear 
//  by setting display to none
function mobile_reset_images()
{
    'use strict';
    document.getElementById("mobile_button_one_images_container").style.display = "none";
    document.getElementById("mobile_button_two_images_container").style.display = "none";
    document.getElementById("mobile_button_three_images_container").style.display = "none";
    document.getElementById("mobile_button_four_images_container").style.display = "none";
    document.getElementById("mobile_button_five_images_container").style.display = "none";
    document.getElementById("mobile_button_six_images_container").style.display = "none";
}
function button_one_stretch()
{
    'use strict';
    button_selected = 1;
    if(is_browser_to_small())
    {
        reset_buttons();
        mobile_reset_images();
        document.getElementById("button_one").style.width = button_width;
        document.getElementById("mobile_button_one_images_container").style.display = "block";

    }
    else
    {
        reset_all();
        document.getElementById("button_one").style.width = "50%";
        document.getElementById("button_one_image").style.display = "block";
    }
    document.getElementById("button_one").style.backgroundColor = "white";
   
                          
}
function button_two_stretch()
{
    'use strict';
    button_selected = 2;
    if(is_browser_to_small())
    {
        reset_buttons();
        mobile_reset_images();
        document.getElementById("button_two").style.width = button_width;
        document.getElementById("mobile_button_two_images_container").style.display = "block";

    }
    else
    {
        reset_all();
        document.getElementById("button_two").style.width = "53%";
        document.getElementById("button_two_image").style.display = "block";  
    }
    document.getElementById("button_two").style.backgroundColor = "white";
                        
}
function button_three_stretch()
{
    'use strict';
    button_selected = 3;
    if(is_browser_to_small())
    {
        reset_buttons();
        mobile_reset_images();
        document.getElementById("button_three").style.width = button_width;
        document.getElementById("mobile_button_three_images_container").style.display = "block";

    }
    else
    {
        reset_all();
        document.getElementById("button_three").style.width = "63%";
        document.getElementById("button_three_image").style.display = "block";  
    }
    document.getElementById("button_three").style.backgroundColor = "white";                   
}
function button_four_stretch()
{
    'use strict';
    button_selected = 4;
    if(is_browser_to_small())
    {
        reset_buttons();
        mobile_reset_images();
        document.getElementById("button_four").style.width = button_width;
        document.getElementById("mobile_button_four_images_container").style.display = "block";

    }
    else
    {
        reset_all();
        document.getElementById("button_four").style.width = "56%";
        document.getElementById("button_four_image").style.display = "block";
    }
    document.getElementById("button_four").style.backgroundColor = "white";                   
}
function button_five_stretch()
{
    'use strict';
    button_selected = 5;
    if(is_browser_to_small())
    {
        reset_buttons();
        mobile_reset_images();
        document.getElementById("button_five").style.width = button_width;
        document.getElementById("mobile_button_five_images_container").style.display = "block";

    }
    else
    {
        reset_all();
        document.getElementById("button_five").style.width = "52%";
        document.getElementById("button_five_image").style.display = "block";
    }
    document.getElementById("button_five").style.backgroundColor = "white";                      
}
function button_six_stretch()
{
    'use strict';
    button_selected = 6;
    if(is_browser_to_small())
    {
        reset_buttons();
        mobile_reset_images();
        document.getElementById("button_six").style.width = button_width;
        document.getElementById("mobile_button_six_images_container").style.display = "block";

    }
    else
    {
        reset_all();
        document.getElementById("button_six").style.width = "67%";
        document.getElementById("button_six_image").style.display = "block";
    }
    document.getElementById("button_six").style.backgroundColor = "white";                     
}
//******************* Mobile functions ************************** */
// *****************************************************************

//  View:Mobile
//  Summary: This function deslects all buttons so sets them to the color when not
//  selected which is gray right now
function mobile_reset_buttons()
{
    'use strict';
    document.getElementById("mobile_button_one").style.backgroundColor = "rgb(120,120,120)";
    document.getElementById("mobile_button_two").style.backgroundColor = "rgb(120,120,120)";
    document.getElementById("mobile_button_three").style.backgroundColor = "rgb(120,120,120)";
    document.getElementById("mobile_button_four").style.backgroundColor = "rgb(120,120,120)";
    document.getElementById("mobile_button_five").style.backgroundColor = "rgb(120,120,120)";
    document.getElementById("mobile_button_six").style.backgroundColor = "rgb(120,120,120)";
                         
}

//  View: Mobile
//  Summary: This function calls both fuctions to deselct all buttons by changing the color to
//  when the button isnt pressed and 
//  make all images connected to the buttons disapear so display to none
function mobile_reset_all()
{
    'use strict';
    mobile_reset_buttons();
    mobile_reset_images();

}
//  View: Mobile 
//  Button:Driveways
//  Summary: This function is called when the first button is pressed which is "Steps"
//  The function in general turns the button pressed to white and displays 
//  the image connected to the button. 
//  Using the mobile_reset_all() function,
//  It also resets all buttons to grey and removes all images connected to all
//  buttons
function mobile_button_one()
{
    'use strict';
    mobile_reset_all()
    document.getElementById("mobile_button_one").style.backgroundColor = "white";
    document.getElementById("mobile_button_one_images_container").style.display = "block";

}
//  View: Mobile 
//  Button:Sidewalks
//  Summary: This function is called when the second button is pressed which is "Sidewalks"
//  The function in general turns the button pressed to white and displays 
//  the image connected to the button. 
//  Using the mobile_reset_all() function,
//  It also resets all buttons to grey and removes all images connected to all
//  buttons
function mobile_button_two()
{
    'use strict';
    mobile_reset_all()
    document.getElementById("mobile_button_two").style.backgroundColor = "white";
    document.getElementById("mobile_button_two_images_container").style.display = "block";

}
//  View: Mobile 
//  Button:Slabs
//  Summary: This function is called when the third button is pressed which is "Slabs"
//  The function in general turns the button pressed to white and displays 
//  the image connected to the button. 
//  Using the mobile_reset_all() function,
//  It also resets all buttons to grey and removes all images connected to all
//  buttons
function mobile_button_three()
{
    'use strict';
    mobile_reset_all()
    document.getElementById("mobile_button_three").style.backgroundColor = "white";
    document.getElementById("mobile_button_three_images_container").style.display = "block";

}
//  View: Mobile 
//  Button:Steps
//  Summary: This function is called when the forth button is pressed which is "Steps"
//  The function in general turns the button pressed to white and displays 
//  the image connected to the button. 
//  Using the mobile_reset_all() function,
//  It also resets all buttons to grey and removes all images connected to all
//  buttons
function mobile_button_four()
{
    'use strict';
    mobile_reset_all()
    document.getElementById("mobile_button_four").style.backgroundColor = "white";
    document.getElementById("mobile_button_four_images_container").style.display = "block";

}
//  View: Mobile
//  Button:Walls 
//  Summary: This function is called when the fifth button is pressed which is "Walls"
//  The function in general turns the button pressed to white and displays 
//  the image connected to the button. 
//  Using the mobile_reset_all() function,
//  It also resets all buttons to grey and removes all images connected to all
//  buttons
function mobile_button_five()
{
    'use strict';
    mobile_reset_all()
    document.getElementById("mobile_button_five").style.backgroundColor = "white";
    document.getElementById("mobile_button_five_images_container").style.display = "block";

}
//  View: Mobile 
//  Button:Repairs,etc.
//  Summary: This function is called when the sixth button is pressed which is "Repairs,etc."
//  The function in general turns the button pressed to white and displays 
//  the image connected to the button.
//  Using the mobile_reset_all() function
//  It also resets all buttons to grey and removes all images connected to all
//  buttons
function mobile_button_six()
{
    'use strict';
    mobile_reset_all()
    document.getElementById("mobile_button_six").style.backgroundColor = "white";
    document.getElementById("mobile_button_six_images_container").style.display = "block";

}
// View: Mobile
//Summary: This function is called when the button is pressed in the footer 
// which brings the user back to the top of the page
// purpose of button is for they dont have to scroll alot
function mobile_to_top_button()
{
    'use strict';
    document.getElementById("bar").scrollIntoView();

}
//View: Desktop, Browser to small
// Summary: This function sets the corrrect image and button width
// by checking what button was last pressed.
// Description: It does this by check the variable button_selected to see what value
// it has then depending on that value it calls the function connected 
// with that button that within that fucntion does what need to be done  
function set_correct_image()
{
    'use strict';
    if(button_selected == 1)
    {
        button_one_stretch();
    }
    if(button_selected == 2)
    {
        button_two_stretch();
    }
    if(button_selected == 3)
    {
        button_three_stretch();
    }
    if(button_selected == 4)
    {
        button_four_stretch();
    }
    if(button_selected == 5)
    {
        button_five_stretch();
    }
    if(button_selected == 6)
    {
        button_six_stretch();
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
                            //resize logo image
                            document.getElementById("logoImage").style.height = "50px";
                            //bar height
                            document.getElementById("bar").style.height = "125px";
                            // remove desktop images view
                            document.getElementById("desktop_container_images").style.display = "none";
                            //Show mobile images view and ajust for browser too small view
                            document.getElementById("mobile_all_images_container").style.width = "60%";
                            document.getElementById("mobile_all_images_container").style.display = "block";
                            document.getElementById("mobile_all_images_container").style.marginTop = "0px";
                            
                            
                            
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
                            document.getElementById("topHeadline").style.fontSize = "3vw";
                            //resize nav container
                            document.getElementById("nav_container").style.paddingTop = "70px";
                            //resize image
                            document.getElementById("logoImage").style.height = "80px";
                            //bar height
                            document.getElementById("bar").style.height = "90px";

                            
                            //Here we are removing mobile images view and setting style back to how it was
                            document.getElementById("mobile_all_images_container").style.width = "100%";
                            document.getElementById("mobile_all_images_container").style.marginTop = "50px";
                            document.getElementById("mobile_all_images_container").style.display = "none";
                            //Here we bring back to view desktop images view
                            document.getElementById("desktop_container_images").style.display = "block";
                            
                           
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
                        
                        
                        //reset_all()
                        //Closes menu when resized since if you dont close it then
                        //both buttons will show with menu open
                        close_menu();
                        //when screen resizes calls this function to adjust website 
                        //to work with website dimensions
                        checkScreen();
                        set_correct_image();
                    });
