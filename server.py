from fastapi import FastAPI
from sqlalchemy import create_engine, Column, Integer, String
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker

app = FastAPI()

@app.get("/hello")
def get_hello():
    return {"message": "Hello, FastAPI!"}

