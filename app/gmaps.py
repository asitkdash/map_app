import googlemaps
from datetime import datetime
from .key import getKey

class GMaps():
	def __init__(self, src1, src2):
		self.gmaps = googlemaps.Client(getKey())
		self.li = []
		self.directions = self.gmaps.directions(src1, src2, mode='walking', departure_time=datetime.now())

	def getDirections(self):
		if not self.directions:
			return self.li
		else:
			for steps in self.directions[0]['legs'][0]['steps'][:-1]:
			    self.li.append((steps['html_instructions']) + ' for ' + steps['duration']['text'] + '(' + steps['distance']['text'] + ')')
			self.li.append(self.directions[0]['legs'][0]['steps'][-1]['html_instructions'])
			self.li.append('Total: ' + self.directions[0]['legs'][0]['duration']['text']+ ', ' + self.directions[0]['legs'][0]['distance']['text'])
			return self.li

	def getTripLength(self):
		return self.directions[0]['legs'][0]['duration']['text']

	def getDirectionsObj(self):
		return self.directions
