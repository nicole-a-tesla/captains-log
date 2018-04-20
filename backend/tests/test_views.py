import unittest
import mock

from backend import app
from backend.models import db


class TestViews(unittest.TestCase):
    def setUp(self):
        self.app = app.test_client()
        self.app.testing = True 

if __name__ == '__main__':
        unittest.main()
