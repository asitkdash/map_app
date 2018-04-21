from flask import request
from flask import render_template
from flask import jsonify
from flask import session
from app import app
from .gmaps import GMaps
from .building import getBuilding
from .buildingcheck import getBuildingCheck
from .buildingcheck import getBldId
from .key import getKey

@app.route('/home')
def home():
	return render_template('home.html')

@app.route('/contact')
def contact():
	return render_template('contact.html')

@app.route('/map')
def mapdemo():
	key = getKey()
	return render_template('campusmap.html', key=key)

@app.route('/map', methods=['POST'])
def mapdemo_post():
	if request.method == 'POST':
		src = request.form['dest']
		cur = request.form['location']
		userLoc = request.form['userLocation']
		if cur != '':
			session['startLoc'] = cur
		if userLoc != '':
			session['userLoc'] = userLoc
		key = getKey()
		info = getBuildingCheck(src)
		if not info[0]:
			return render_template('campusmap.html', key=key)
		else:
			bldId = getBldId(src)
			bld = info[0]
			coords = info[1]
			gmaps = GMaps(session['startLoc'], coords)
			directions = gmaps.getDirections()
			tl = gmaps.getTripLength()
			userLoc = session['userLoc']
			cur = session['startLoc']
			return render_template('directions.html', userLoc=userLoc, bld=bld, bldId=bldId, coords=coords, cur=cur, directions=directions, tl=tl, key=key)

@app.context_processor
def coords_processor():
	def getCoords(src):
		y = getBuildingCheck(src)
		return y[1]
	return dict(getCoords=getCoords)
