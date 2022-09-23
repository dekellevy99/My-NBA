class Data{
    private _players: Player[]

    constructor(){
        this._players = []
    }

    get players(){
        return [...this._players]
    }

    addPlayer(player: Player){
        let existPlayer: Player|undefined = this._players.find(p => p.id === player.id)
        if (!existPlayer){
            this._players.push(player)
        }
    }

    removePlayerById(playerId: number){
        for(let i = 0; i < this._players.length; i++){
            let curPlayer = this._players[i]
            if(curPlayer.id === playerId){
                this._players.splice(i, 1)

            }
        }
    }
}