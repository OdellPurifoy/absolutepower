$(function() {
    "use strict";
    
    var topoffset = 50; //menu height variable
    
    //Activate Scrollspy
    $("body").scrollspy({
        target: '.navbar',
        offset: topoffset
    });
    
    
    //Adds inbody class when page loads and reloads
         var hash = $(this).find("li.active a").attr("href");
    if(hash !== "#featured"){
        $(".navbar").addClass("inbody");
    } else{
        $(".navbar").removeClass("inbody");
    }
    
    
    //Adds an inbody class to navigation when scroll spy activates
   $(".navbar-fixed-top").on("activate.bs.scrollspy", function (){
        var hash = $(this).find("li.active a").attr("href");
    if(hash !== "#featured"){
        $(".navbar").addClass("inbody");
    } else{
        $(".navbar").removeClass("inbody");
    }
   });
   
    
});
 


