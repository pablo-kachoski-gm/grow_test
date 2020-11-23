import doFetch from 'commons/api/do-fetch'
import MethodType from 'commons/model/method-type'
import { getIdFromURL } from "commons/utils/ids"

const getPlanets = async ({ page }) => {
  const fetched = await doFetch({ method: MethodType.GET, endpoint: 'planets', page })
  return {
    ...fetched,
    results: fetched.results.map(planet => ({ ...planet, id: getIdFromURL(planet.url) }))
  }
}

export default getPlanets
