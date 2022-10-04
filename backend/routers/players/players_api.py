from fastapi import APIRouter, HTTPException, status
from . import players_utils
import requests

router = APIRouter()

@router.get("/players")
def get_players(teamName, year, hasBirthDate):
    players = requests.get(f"http://data.nba.net/10s/prod/v1/{year}/players.json").json()["league"]
    filtered_players = []
    try:
        filter_by_has_birth_date = True if hasBirthDate == "true" else False
        filtered_players = players_utils.filter_players_by_team_year(players, teamName, int(year), filter_by_has_birth_date)
        return {"players": filtered_players}

    except players_utils.InvalidTeamName:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Invalid team name"
        )


@router.get("/players/stats/{first_name}/{last_name}")
def get_player_stats(first_name, last_name):
    stats = requests.get(f"https://nba-players.herokuapp.com/players-stats/{last_name}/{first_name}").json()
    player_stats = players_utils.filter_player_stats(stats)
    return {"stats": player_stats}