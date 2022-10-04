"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class Data {
    constructor() {
        this._players = [];
    }
    get players() {
        return [...this._players];
    }
    addPlayer(player) {
        let existPlayer = this._players.find(p => p.id == player.id);
        if (!existPlayer) {
            this._players.push(player);
        }
    }
    getPlayerById(playerId) {
        let player = this._players.find(p => p.id == playerId);
        return player;
    }
    removePlayerById(playerId) {
        for (let i = 0; i < this._players.length; i++) {
            let curPlayer = this._players[i];
            if (curPlayer.id == playerId) {
                this._players.splice(i, 1);
            }
        }
    }
    generateStatsOfPlayer(playerId) {
        return __awaiter(this, void 0, void 0, function* () {
            let player = this.getPlayerById(playerId);
            if (player !== undefined) {
                let firstName = player.firstName;
                let lastName = player.lastName;
                let stats = yield $.get(`/players/stats/${firstName}/${lastName}`);
                return stats;
            }
        });
    }
    generatePlayers(teamName, year, filterByHasBitrhDate) {
        return __awaiter(this, void 0, void 0, function* () {
            let dataPlayers = yield $.get(`/players?teamName=${teamName}&year=${year}&hasBirthDate=${filterByHasBitrhDate}`);
            this._players.splice(0);
            for (const player of dataPlayers["players"]) {
                const { personId, firstName, lastName, jersey, pos, picture } = player;
                this.addPlayer(new Player(personId, firstName, lastName, jersey, pos, picture));
            }
        });
    }
    generateDreamTeam() {
        return __awaiter(this, void 0, void 0, function* () {
            let dreamTeamPlayers = yield $.get("/dreamTeam");
            this._players.splice(0);
            for (const player of dreamTeamPlayers["players"]) {
                const { personId, firstName, lastName, jersey, pos, picture } = player;
                this.addPlayer(new Player(personId, firstName, lastName, jersey, pos, picture));
            }
        });
    }
    addPlayerToDreamTeam(playerId) {
        let player = this.getPlayerById(playerId);
        if (player != undefined) {
            $.post("/dreamTeam", JSON.stringify({
                "personId": player.id,
                "firstName": player.firstName,
                "lastName": player.lastName,
                "jersey": player.jerseyNumber,
                "pos": player.position,
                "picture": player.picture
            }));
        }
    }
    removePlayerFromDreamTeam(playerId) {
        let player = this.getPlayerById(playerId);
        if (player != undefined) {
            this.removePlayerById(playerId);
            return $.ajax({
                url: `/dreamTeam/${playerId}`,
                method: "DELETE"
            });
        }
    }
}
