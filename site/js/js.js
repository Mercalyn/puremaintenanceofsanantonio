$("#myCarousel").ready(function(){
    $('#myCarousel').carousel({
      interval: false
    })
    $(this).carousel('pause');
    
    $("video").on('ended',function(){
        $("#myCarousel").carousel("next");
        var video = [];
        video[0] = document.getElementById('vidOne');
        video[1] = document.getElementById('vidTwo');
        video[2] = document.getElementById('vidTre');
        var iteration;
        for (iteration = 0; iteration < video.length; iteration++) { 
            video[iteration].pause();
            video[iteration].currentTime = 0;
            video[iteration].load();
            console.log(iteration);
        }
        
    });
})

$(document).ready(function(){
    //hiding the army corps engineers section by default
    $("#engineersArticle").hide();
    
    //disabling submit button by default
    $("#contact-submit").prop("disabled",true);
    
    //button functionality
    //home
    $("#homeButton").click(function(){
        $(".contentLoad").slideDown();
        $(".nav-item").removeClass("active");
        $("#homeLabel").addClass("active");
    });
    //contact us
    $(".contactButton").click(function(){
        $(".contentLoad").slideUp();
        $(".nav-item").removeClass("active");
        $("#contactLabel").addClass("active");
        
    });
    //services
    $(".servicesButton").click(function(){
        
    });
    //company
    $(".companyButton").click(function(){
        
    });
    //army corps engineers button
    $("#engineersButton").click(function(){
        $("#engineersArticle").toggle("fast");
    });
    
    //input keyup validation
    key_validation();
    
    //contact form button
    $("#contact-submit").click(function(){
        //create an object filled out from the form
        var formObject = {
            name: $("#contact-name").val(),
            email: $("#contact-email").val(),
            phone: $("#contact-phone").val(),
            msg: $("#contact-msg").val()
        };
        //stringify formObject
        var jsonObject = JSON.stringify(formObject);
        console.log(jsonObject);
        
        //POST data to php server
        $.ajax({
            method: "POST",
            url: "contact.php",
            data: jsonObject
        }).done(function(success_msg){
            //do this on good php contact, but it doesn't mean php didn't return with error, only that the php loop worked
            $("#contact-submit").html(success_msg);
            
            //disable all input fields
            $("#contact-name").prop("disabled",true);
            $("#contact-email").prop("disabled",true);
            $("#contact-phone").prop("disabled",true);
            $("#contact-msg").prop("disabled",true);
            $("#contact-submit").prop("disabled",true);
            
            //remove the submit id so that it won't submit again
            $("#contact-submit").removeAttr("id");
        });
    });
})

function ajax_load(fileName){
    
}

function key_validation(){
    
}

