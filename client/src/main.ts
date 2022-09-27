(function(){
    const data: Data = new Data();
    const render = RenderModule();

    $('#players-container').on("mouseenter", ".player-card", function(){
        $(this).addClass('animate');
        let playerId: number = $(this).data().id
        data.generateStatsOfPlayer(playerId).then((res) => {
            render.renderStats(this, res["stats"])
        })
     });

     $("#players-container").on("mouseleave", ".player-card", function(){
        $(this).removeClass('animate');	
     });
       		
    $("#search-btn").on("click", function(){
        let teamName: string = <string> $("#team-input").val()
        let year: number = <number> $("#year-input").val()
        data.generateData(teamName, year).then(() => {
            render.renderData(data)
        })
    });

})()