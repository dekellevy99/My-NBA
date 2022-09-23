from pydantic import BaseModel
from typing import Union


class InvalidTeamName(Exception):
    pass


class PlayerData(BaseModel):
    personId: Union[str, None] = None
    firstName: Union[str, None] = None
    lastName: Union[str, None] = None
    jersey: Union[str, None] = None
    pos: Union[str, None] = None
    picture: Union[str, None] = None


teams_id = {
    "lakers": "1610612747",
    "warriors": "1610612744",
    "heat": "1610612748",
    "suns": "1610612756"
}

def _was_played_in_team_and_yaer(player, team_name, year):
    team_id = teams_id[team_name]
    teams = player["teams"]
    for team in teams:
        if team["teamId"] == team_id and (int((team["seasonStart"])) <= year <= int((team["seasonEnd"]))):
            return True
    return False


def _get_player_img(player):
    first_name = player["firstName"]
    last_name = player["lastName"]
    return "https://nba-players.herokuapp.com/players/{}/{}".format(last_name, first_name)


def _filter_players_content(players):
    filtered_players_content = []
    filtered_players_content.extend(
        map(lambda player: PlayerData(**player, picture=_get_player_img(player)), players)
    )
    return filtered_players_content


def filter_players_by_team_year(players, team_name, year):
    if team_name not in teams_id:
        raise InvalidTeamName("Team Name is not valid")
    
    filtered_players = []
    for league, league_players in players.items():
        filtered_players.extend(
            filter(lambda player: _was_played_in_team_and_yaer(player, team_name, year), league_players)
        )

    return _filter_players_content(filtered_players)