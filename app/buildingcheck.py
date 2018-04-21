from .building import getBuilding
import re

def getBuildingCheck(src):
            classdict=getBuilding()
            abv = ""
            src = re.sub("[^a-zA-Z]+", "", src)
            for i in src:
                if i != "-" and i != " ":
                    abv = abv + i
                else:
                    break
            if len(abv) >= 10:
                abv = abv[:-9]
            if abv in classdict:
                    building = classdict[abv]
            elif abv.upper() in classdict:
                    building = classdict[abv.upper()]
            else:
                building = ['','']
            return building

def getBldId(src):
            classdict=getBuilding()
            abv = ""
            src = re.sub("[^a-zA-Z]+", "", src)
            for i in src:
                if i != "-" and i != " ":
                    abv = abv + i
                else:
                    break
            if len(abv) >= 10:
                abv = abv[:-9]
            return abv.upper()

