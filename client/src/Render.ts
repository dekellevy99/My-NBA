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

    return {
        renderData: renderData
    }
}