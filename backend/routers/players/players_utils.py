class InvalidTeamName(Exception):
    pass


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


def filter_players_by_team_year(players, team_name, year):
    if team_name not in teams_id:
        raise InvalidTeamName("Team Name is not valid")
    
    filtered_players = []
    for league, league_players in players.items():
        for player in league_players:
            if _was_played_in_team_and_yaer(player, team_name, year):
                filtered_players.append(player)
    return filtered_players