# from unittest import TestCase
# from species_helpers import create_from_json


# class TestSpeciesCreator(TestCase):
#     def test_creates_species(self):
#         species_json = {
#             'species': [
#                 {
#                     'uid': 'SPMA0000045069',
#                     'name': 'Vulcan',
#                     'homeworld': None,
#                     'quadrant': {
#                         'uid': 'ASMA0000025892',
#                         'name': 'Alpha Quadrant'
#                     },
#                     'extinctSpecies': False,
#                     'warpCapableSpecies': True,
#                     'extraGalacticSpecies': False,
#                     'humanoidSpecies': True,
#                     'reptilianSpecies': False,
#                     'nonCorporealSpecies': False,
#                     'shapeshiftingSpecies': False,
#                     'spaceborneSpecies': False,
#                     'telepathicSpecies': True,
#                     'transDimensionalSpecies': False,
#                     'unnamedSpecies': False,
#                     'alternateReality': False
#                 }
#             ]
#         }
#         species = create_from_json(species_json)

#         self.assertEqual(species.name, 'Vulcan')
#         self.assertEqual(species.homeworld, None)
#         self.assertEqual(species.quadrant, 'Alpha Quadrant')
#         self.assertEqual(species.warp_capable, True)
#         self.assertEqual(species.sightings, 1)

#         self.assertEqual(species.extinct, False)
#         self.assertEqual(species.extra_galactic, False)
#         self.assertEqual(species.humanoid, True)
#         self.assertEqual(species.reptilian, False)
#         self.assertEqual(species.non_corporeal, False)
#         self.assertEqual(species.shape_shifting, False)
#         self.assertEqual(species.spaceborne, False)
#         self.assertEqual(species.telepathic, False)
#         self.assertEqual(species.trans_dimentional, False)
#         self.assertEqual(species.alternate_reality, False)


# if __name__ == '__main__':
#     app.run(debug=True,host='0.0.0.0')
