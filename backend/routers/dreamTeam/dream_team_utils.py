NOT_FOUND = -1

_dream_team_players = []

def _get_player_index(player_id):
    for i in range(len(_dream_team_players)):
        cur_player = _dream_team_players[i]
        if cur_player.personId == player_id:
            return i
    return NOT_FOUND


def _is_in_dream_team(player):
    player_id = player.personId
    return _get_player_index(player_id) != NOT_FOUND


def add_player(player):
    if not _is_in_dream_team(player):
        _dream_team_players.append(player)
        return True
    return False


def get_dream_team():
    return _dream_team_players[:]


def get_player_by_id(player_id):
    player_index = _get_player_index(player_id)
    if player_index != NOT_FOUND:
        return _dream_team_players[player_index]
    return None


def update_player_by_id(player_id, update_player):
    player_index = _get_player_index(player_id)
    if player_index != NOT_FOUND:
        _dream_team_players[player_index] = update_player
        return True
    return False


def remove_player_by_id(player_id):
    player_index = _get_player_index(player_id)
    if player_index != NOT_FOUND:
        del _dream_team_players[player_index]
        return True
    return False


