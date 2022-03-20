function navigationButton(){
    $('#nav-button').click(function(){
        $("#nav-items-wrapper").slideToggle(400);
    });
}

function styling(){

    let window_width = window.outerWidth;
    let window_height = window.outerHeight;

    if(window_height <= 568){
        let section = document.getElementById("hero-section-wrapper");
        let mask = document.getElementById("hero-section-inner-wrapper");
        mask.style.height = "100vh";
        section.style.height ="100vh";
        //welcome_caption[0].style.fontSize = "14pt";
    }
   
}
navigationButton();
styling();
