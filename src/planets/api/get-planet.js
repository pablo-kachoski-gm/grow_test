import doFetch from 'commons/api/do-fetch'
import MethodType from 'commons/model/method-type'

import { getIdFromURL } from "commons/utils/ids"

const getPlanet = async ({ id }) => {
  const fetched = await doFetch({ method: MethodType.GET, endpoint: `planets/${id}` })
  return { ...fetched, id, residents: fetched.residents.map(residentURL => getIdFromURL(residentURL)) }
}

export default getPlanet
