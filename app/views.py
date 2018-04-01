from flask import request
from flask import render_template
from flask import jsonify
from flask import session
from app import app
from .gmaps import GMaps
from .building import getBuilding
from .buildingcheck import getBuildingCheck
from .key import getKey
from .content import Content

@app.route('/')
def home():
	key = getKey()
	return render_template('base.html', key=key)

@app.route('/map')
def mapdemo():
	key = getKey()
	TOPIC_DICT = Content()
	return render_template('campusmap.html', key=key, TOPIC_DICT=TOPIC_DICT)

@app.route('/map', methods=['POST'])
def mapdemo_post():
	if request.method == 'POST':
		src = request.form['src1']
		current = request.form['location']
		if current != '':
			session['curLoc'] = current
	if not src:
		TOPIC_DICT = Content()
		return render_template('campusmap.html', TOPIC_DICT=TOPIC_DICT)
	else:
		key = getKey()
		info = getBuildingCheck(src)
		bld = info[0]
		coords = info[1]
		gmaps = GMaps(session['curLoc'], coords)
		directions = gmaps.getDirections()
		tl = gmaps.getTripLength()
		cur = session['curLoc']
		TOPIC_DICT = Content()
		return render_template('directions.html', TOPIC_DICT=TOPIC_DICT,bld=bld, coords=coords, cur=cur, directions=directions, tl=tl, key=key)

@app.context_processor
def coords_processor():
	def getCoords(src):
		y = getBuildingCheck(src)
		return y[1]
	return dict(getCoords=getCoords)