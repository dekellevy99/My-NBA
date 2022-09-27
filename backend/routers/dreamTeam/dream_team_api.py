from fastapi import APIRouter, HTTPException, status
from fastapi import Request, Response
from . import dream_team_utils
from ..players.players_utils import PlayerData

ERROR_MSG_PLAYER_DOES_NOT_EXIST = "Given ID isn't exist"
router = APIRouter()

@router.get("/dreamTeam")
def get_dream_team():
    return {"players": dream_team_utils.get_dream_team()}


@router.get("/dreamTeam/{id}")
def get_player_dream_team(id):
    player = dream_team_utils.get_player_by_id(id)
    if player == None:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail=ERROR_MSG_PLAYER_DOES_NOT_EXIST
        )
    else:
        return {"player": player}


@router.post("/dreamTeam")
async def add_player_to_dream_team(request: Request, response: Response):
    req = await request.json()
    player = PlayerData(**req)
    has_been_added = dream_team_utils.add_player(player)
    if has_been_added:
        response.status_code = status.HTTP_201_CREATED
    return {"player": player}


@router.put("/dreamTeam/{id}")
async def update_player_in_dream_team(id, request: Request, response: Response):
    req = await request.json()
    update_player = PlayerData(**req)
    has_been_update = dream_team_utils.update_player_by_id(id, update_player)
    if not has_been_update:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail=ERROR_MSG_PLAYER_DOES_NOT_EXIST
        )
    response.status_code = status.HTTP_204_NO_CONTENT


@router.delete("/dreamTeam/{id}")
def remove_player_from_dream_team(id, response: Response):
    has_been_removed = dream_team_utils.remove_player_by_id(id)
    if not has_been_removed:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail=ERROR_MSG_PLAYER_DOES_NOT_EXIST
        )
    response.status_code = status.HTTP_204_NO_CONTENT


    

