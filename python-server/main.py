from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()

class Something(BaseModel):
    name: str
    price: float

@app.get("/")
async def read_root():
    return {"message": "Hello World"}

@app.post("/post")
async def post(items: Something):
    data = {
        "Name": items.name, 
        "Price": items.price
    }
    
    print(data)

    return data