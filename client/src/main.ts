(function(){
    const data: Data = new Data();
    const render = RenderModule();

    $('.player-card').hover(function(){
        $(this).addClass('animate');		
     }, function(){
        $(this).removeClass('animate');			
    });	

})()