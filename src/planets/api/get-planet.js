// import doFetch from 'commons/api/do-fetch'
// import MethodType from 'commons/model/method-type'

import { getIdFromURL } from "commons/utils/ids"

const getPlanet = async ({ id }) => {
  const fetched = {
    "name": "Tatooine",
    "rotation_period": "23",
    "orbital_period": "304",
    "diameter": "10465",
    "climate": "arid",
    "gravity": "1 standard",
    "terrain": "desert",
    "surface_water": "1",
    "population": "200000",
    "residents": [
      "http://swapi.dev/api/people/1/",
    ],
    "films": [
      "http://swapi.dev/api/films/1/",
      "http://swapi.dev/api/films/3/",
      "http://swapi.dev/api/films/4/",
      "http://swapi.dev/api/films/5/",
      "http://swapi.dev/api/films/6/"
    ],
    "created": "2014-12-09T13:50:49.641000Z",
    "edited": "2014-12-20T20:58:18.411000Z",
    "url": "http://swapi.dev/api/planets/1/"
  }
  // const fetched = await doFetch({ method: MethodType.GET, endpoint: `planets/${id}` })
  return { ...fetched, id, residents: fetched.residents.map(residentURL => getIdFromURL(residentURL)) }
}

export default getPlanet
