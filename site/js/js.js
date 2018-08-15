$("#myCarousel").ready(function(){
    //immediately stop the interval scrolling
    $('#myCarousel').carousel({
      interval: false
    })
    $(this).carousel('pause');
    
    //on video end, scroll to next and restart
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
    
    $("source").hide();
    
    //disabling submit button by default
    $("#contact-submit").prop("disabled",true);
    
    //button functionality
    //nav-item clicked for mobile, collapse menu
    $(".nav-item").click(function(){
        $("#navbarSupportedContent").collapse("hide");
    });
    
    //home
    $("#homeButton").click(function(){
        $("#secondaryContent").slideDown();
        $("#mainContent").slideDown();
        $(".nav-item").removeClass("active");
        $("#homeLabel").addClass("active");
    });
    //contact us
    $(".contactButton").click(function(){
        $("#secondaryContent").slideUp();
        $("#mainContent").slideUp();
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
        //$("#submission-status").html("Your message was sent successfully!");
        
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
            $("#submission-status").html(success_msg);
            
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
    var validationToSubmit = [false,false,false,false];
    
    //name
    $("#contact-name").keyup(function(){
        var nameData = $(this).val();
        
        //length validation above 0
        if(nameData.length > 0){
            $("#span-name").addClass("input-success");
            $("#span-name").removeClass("input-failure");
            validationToSubmit[0] = true;
            refreshSubmit(validationToSubmit);
        }
        else{
            $("#span-name").addClass("input-failure");
            $("#span-name").removeClass("input-success");
            validationToSubmit[0] = false;
            refreshSubmit(validationToSubmit);
        }
    });
    
    //email
    $("#contact-email").keyup(function(){
        var emailData = $(this).val();
        
        //.com validator
        emailData = emailData.split(".");
        if(emailData[1] == "com"){
            $("#span-email").addClass("input-success");
            $("#span-email").removeClass("input-failure");
            validationToSubmit[1] = true;
            refreshSubmit(validationToSubmit);
        }
        else{
            $("#span-email").addClass("input-failure");
            $("#span-email").removeClass("input-success");
            validationToSubmit[1] = false;
            refreshSubmit(validationToSubmit);
        }
    });
    
    //phone
    $("#contact-phone").keyup(function(){
        var phoneData = $(this).val();
        
        //length validation is 10
        if(phoneData.length == 10){
            $("#span-phone").addClass("input-success");
            $("#span-phone").removeClass("input-failure");
            validationToSubmit[2] = true;
            refreshSubmit(validationToSubmit);
        }
        else{
            $("#span-phone").addClass("input-failure");
            $("#span-phone").removeClass("input-success");
            validationToSubmit[2] = false;
            refreshSubmit(validationToSubmit);
        }
        
        //creates the digit spacing
        
    });
    
    //msg
    $("#contact-msg").keyup(function(){
        var msgData = $(this).val();
        
        //length validation above 0
        if(msgData.length > 0){
            $("#span-msg").addClass("input-success");
            $("#span-msg").removeClass("input-failure");
            validationToSubmit[3] = true;
            refreshSubmit(validationToSubmit);
        }
        else{
            $("#span-msg").addClass("input-failure");
            $("#span-msg").removeClass("input-success");
            validationToSubmit[3] = false;
            refreshSubmit(validationToSubmit);
        }
    });
    
}

function refreshSubmit(amount){
    console.log(amount);
    if(amount[0] && amount[1] && amount[2] && amount[3]){
        $("#contact-submit").prop("disabled",false);
    }
    else{
        $("#contact-submit").prop("disabled",true);
    }
}