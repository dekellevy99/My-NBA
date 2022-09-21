from fastapi import FastAPI
import uvicorn
from backend.routers import players_api

app = FastAPI()
app.include_router(players_api.router)

@app.get("/")
def root():
    return "Server is up and running"


if __name__ == "__main__":
    uvicorn.run("server:app", host="0.0.0.0", port=8000, reload=True)