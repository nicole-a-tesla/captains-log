from flask import Flask, json, Response, request
import requests
import json

from backend import app
from backend.models import db


@app.route('/')
def home():
    return 'I WORK'


# @app.route('/stocks/', methods=['GET', 'POST'])
# def stocks_list():
#     stocks = Stock.query.all()

#     if request.method == 'POST':
#         content = json.loads(request.data)
#         _create_new_stock(content)

#     stocks = [
#         _build_json(stock)
#         for stock in Stock.query.all()
#     ]

#     return Response(
#         json.dumps(stocks),
#         status=200,
#         mimetype='application/json'
#     )


if __name__ == '__main__':
    app.run(debug=True,host='0.0.0.0')


