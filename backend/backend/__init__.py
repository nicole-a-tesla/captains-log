from flask import Flask
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import create_engine

app = Flask(__name__)

engine = 'postgresql://postgres:postgres@db:5432/stocks'
app.config['SQLALCHEMY_DATABASE_URI'] = engine
db = SQLAlchemy(app)

CORS(app)

import backend.views
