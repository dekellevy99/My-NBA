const RenderModule = function(){

    const _clean = function(): void{
        $("#players-container").empty()
    }

    const renderData = function(data: Data): void{
        _clean()
        let source = $("#player-card-template").html()
        let template = Handlebars.compile(source)
        $("#players-container").append(template({players: data.players}))
    }

    const renderStats = function(player: HTMLElement, stats: Object): void{
        let playerStatsElem = $(player).find(".player-options")
        $(playerStatsElem).empty()
        let source = $("#player-stats-template").html()
        let template = Handlebars.compile(source)
        $(playerStatsElem).append(template(stats))
    }

    return {
        renderData: renderData,
        renderStats: renderStats
    }
}