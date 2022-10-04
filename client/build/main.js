"use strict";
(function () {
    const data = new Data();
    const render = RenderModule();
    $('#players-container').on("mouseenter", ".player-card", function () {
        $(this).addClass('animate');
        if ($(this).find(".player-options").children().length == 0) {
            let playerId = $(this).data().id;
            data.generateStatsOfPlayer(playerId).then((res) => {
                render.renderStats(this, res["stats"]);
            });
        }
    });
    $("#players-container").on("mouseleave", ".player-card", function () {
        $(this).removeClass('animate');
    });
    $("#search-btn").on("click", function () {
        let teamName = $("#team-input").val();
        let year = $("#year-input").val();
        let filterByHasBitrhDate = $("#birthDate-checkbox").is(":checked");
        data.generatePlayers(teamName, year, filterByHasBitrhDate).then(() => {
            render.renderPlayers(data);
        });
    });
    $("#dreamTeam-btn").on("click", function () {
        data.generateDreamTeam().then(() => {
            render.renderDreamTeam(data);
        });
    });
    $("#players-container").on("click", ".add-btn", function () {
        let playerId = $(this).closest(".player-card").data().id;
        data.addPlayerToDreamTeam(playerId);
    });
    $("#players-container").on("click", ".remove-btn", function () {
        var _a;
        let playerId = $(this).closest(".player-card").data().id;
        (_a = data.removePlayerFromDreamTeam(playerId)) === null || _a === void 0 ? void 0 : _a.then(() => {
            render.renderDreamTeam(data);
        });
    });
})();
