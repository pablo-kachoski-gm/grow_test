import doFetch from 'commons/api/do-fetch'
import MethodType from 'commons/model/method-type'

const getPeople = async ({ id }) => {
  const fetched = await doFetch({ method: MethodType.GET, endpoint: `people/${id}` })
  const result = { ...fetched, id }
  return result
}

export default getPeople
