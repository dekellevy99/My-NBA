from fastapi import APIRouter, HTTPException, status
import requests
from . import players_utils


router = APIRouter()

@router.get("/players")
def get_players(teamName, year):
    players = requests.get(f"http://data.nba.net/10s/prod/v1/{year}/players.json").json()["league"]
    filtered_players = []
    try:
        filtered_players = players_utils.filter_players_by_team_year(players, teamName, int(year))
    except players_utils.InvalidTeamName:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Invalid team name"
        )
    return {"Players": filtered_players}