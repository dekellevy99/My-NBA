(function(){
    const data: Data = new Data();
    const render = RenderModule();

    $('#players-container').on("mouseenter", ".player-card", function(){
        $(this).addClass('animate');
        if($(this).find(".player-options").children().length == 0){
            let playerId: number = $(this).data().id
            data.generateStatsOfPlayer(playerId).then((res) => {
                render.renderStats(this, res["stats"])
            })
        }
     });

     $("#players-container").on("mouseleave", ".player-card", function(){
        $(this).removeClass('animate');	
     });
       		
    $("#search-btn").on("click", function(){
        let teamName: string = <string> $("#team-input").val()
        let year: number = <number> $("#year-input").val()
        data.generatePlayers(teamName, year).then(() => {
            render.renderPlayers(data)
        })
    });

    $("#dreamTeam-btn").on("click", function(){
        data.generateDreamTeam().then(() => {
            render.renderPlayers(data)
        })
    })

    $("#players-container").on("click", ".add-btn", function(){
        let playerId: number = $(this).closest(".player-card").data().id
        data.addPlayerToDreamTeam(playerId)
    })





})()