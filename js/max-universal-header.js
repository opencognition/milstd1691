
//#################################
// New Compressed Header Menus
// #################################
jQuery(document).ready(function()
{
	// New standard drop down JS	
	jQuery("li.max-standard-dropdown-li").hover(
		function()
		{ 
			jQuery(this).find("div.dropdown").removeClass("hidden");
			jQuery(this).addClass("active");
		}, 
		function()
		{ 
			jQuery(this).find("div.dropdown").addClass("hidden");
			jQuery(this).removeClass("active");
		}
	);
	
});