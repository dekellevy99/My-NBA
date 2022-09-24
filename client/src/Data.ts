class Data{
    private _players: Player[]

    constructor(){
        this._players = []
    }

    get players(){
        return [...this._players]
    }

    addPlayer(player: Player): void{
        let existPlayer: Player|undefined = this._players.find(p => p.id === player.id)
        if (!existPlayer){
            this._players.push(player)
        }
    }

    getPlayerById(playerId: number): Player|undefined{
        let player: Player|undefined = this._players.find(p => p.id === playerId)
        return player
    }

    removePlayerById(playerId: number): void{
        for(let i = 0; i < this._players.length; i++){
            let curPlayer = this._players[i]
            if(curPlayer.id === playerId){
                this._players.splice(i, 1)
            }
        }
    }

    async generateData(teamName: string, year: number){
        let dataPlayers = await $.get(`http://127.0.0.1:8000/players?teamName=${teamName}&year=${year}`)
        for(const player of dataPlayers["Players"]){
            const {playerId, firstName, lastName, jersey, pos, picture} = player
            this.addPlayer(new Player(playerId, firstName, lastName, jersey, pos, picture))
        }
    }
}