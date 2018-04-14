from .building import getBuilding
import re

def getBuildingCheck(src):
            classdict=getBuilding()
            abv = ""
            src = re.sub("[^a-zA-Z]+", "", src)
            # if len(src) > 3:
            #         if src[-3] in ("0", "1", "2", "3", "4", "5"):
            #                 src = src[:-3]
            for i in src:
                if i != "-" and i != " ":
                    abv = abv + i
                else:
                    break

            if len(abv) >= 10:
                abv = abv[:-9]
            # for i in src:
            #         if i != "-":
            #                 abv = abv + i
            #         else:
            #                 break
            if abv in classdict:
                    building = classdict[abv]
                    #building.upper()  #makes sure upper AND lower case will work
            elif abv.upper() in classdict:
                    building = classdict[abv.upper()]
            else:
        #        building = ["Quad", "33.880374, -117.885378"]
                building = ['','']

            return building
