from fastapi import FastAPI
from fastapi.responses import FileResponse
from fastapi.staticfiles import StaticFiles
import uvicorn
from routers import players_api

app = FastAPI()
app.include_router(players_api.router)

app.mount("/client/build", StaticFiles(directory="client/build"), name="static")

@app.get("/")
def root():
    return FileResponse("./client/build/index.html")

if __name__ == "__main__":
    uvicorn.run("server:app", host="0.0.0.0", port=8000, reload=True)