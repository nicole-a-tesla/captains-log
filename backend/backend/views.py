from flask import Flask, json, Response, request
import requests
import json

from backend import app
from backend.models import db, Species


@app.route('/search/<species_name>', methods=['GET'])
def search(species_name):
    endpoint = 'http://stapi.co/api/v1/rest/species/search'
    headers = {'Content-Type': 'application/x-www-form-urlencoded'}
    payload = {'name': species_name}

    response = requests.post(endpoint, headers=headers, data=payload)

    return Response(
       response.text,
       status=200,
       mimetype='application/json'
    )


@app.route('/species/', methods=['GET'])
def species():
    species = Species.query.all()

    return Response(
        json.dumps([s.serialize() for s in species]),
        status=200,
        mimetype='application/json'
    )


@app.route('/species/<species_id>/sightings/<sightings_count>', methods=['POST'])
def update_sightings(species_id, sightings_count):

    species = Species.query.get(species_id)
    # species = db.session.query(Species).get(species_id)
    species.sightings = sightings_count

    db.session.add(species)
    db.session.commit()

    return Response(
        json.dumps(species.serialize()),
        status=200,
        mimetype='application/json'
    )



if __name__ == '__main__':
    app.run(debug=True,host='0.0.0.0')
