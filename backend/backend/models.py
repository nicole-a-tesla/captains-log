from flask import Flask
from backend import db


class Species(db.Model):
    __tablename__ = 'species'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120), unique=True, nullable=False)
    homeworld = db.Column(db.String(120), nullable=False)
    quadrant = db.Column(db.String(120), nullable=False)
    warp_capable = db.Column(db.Boolean, nullable=False)
    sightings = db.Column(db.Integer, nullable=False)

    extinct = db.Column(db.Boolean, nullable=True)
    extra_galactic = db.Column(db.Boolean, nullable=True)
    humanoid = db.Column(db.Boolean, nullable=True)
    reptilian = db.Column(db.Boolean, nullable=True)
    non_corporeal = db.Column(db.Boolean, nullable=True)
    shape_shifting = db.Column(db.Boolean, nullable=True)
    spaceborne = db.Column(db.Boolean, nullable=True)
    telepathic = db.Column(db.Boolean, nullable=True)
    trans_dimentional = db.Column(db.Boolean, nullable=True)
    alternate_reality = db.Column(db.Boolean, nullable=True)

    def __repr__(self):
        return '<Species {}>'.format(self.name)

    def _serializable_keys(self):
        return [
            'id',
            'name',
            'homeworld',
            'quadrant',
            'warp_capable',
            'sightings',
            'extinct',
            'extra_galactic',
            'humanoid',
            'reptilian',
            'non_corporeal',
            'shape_shifting',
            'spaceborne',
            'telepathic',
            'trans_dimentional',
            'alternate_reality'
        ]

    def serialize(self):
        return {
            key: self.__dict__[key]
            for key in self._serializable_keys()
        }
