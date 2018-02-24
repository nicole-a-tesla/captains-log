from flask import Flask
from backend import db


# class Stock(db.Model):
#     id = db.Column(db.Integer, primary_key=True)
#     symbol = db.Column(db.String(120), unique=True, nullable=False)
#     last_close_value = db.Column(db.Float, nullable=False)
#     second_to_last_close_value = db.Column(db.Float, nullable=True)
#     share_count = db.Column(db.Integer, nullable=True)

#     def __repr__(self):
#         return '<Stock {}>'.format(self.symbol)
