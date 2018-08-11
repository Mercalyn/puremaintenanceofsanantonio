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