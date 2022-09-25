(function(){
    const data: Data = new Data();
    const render = RenderModule();

    $('.player-card').hover(function(){
        $(this).addClass('animate');		
     }, function(){
        $(this).removeClass('animate');			
    });


    $("#search-btn").on("click", function(){
        let teamName: string = <string> $("#team-input").val()
        let year: number = <number> $("#year-input").val()
        data.generateData(teamName, year).then(() => {
            render.renderData(data)
        })
    })
})()