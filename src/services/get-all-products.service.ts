import axios from 'axios'
import { Alerts, BASE_URL, storageTypes } from 'constant'
import { type ProductModel } from 'models'
import { getLocalStorage } from 'utils'

const getAllProducts = async (): Promise<ProductModel []> => {
  const token = getLocalStorage(storageTypes.TOKEN)
  const options = {
    method: 'GET',
    url: BASE_URL + 'products',
    headers: {
      Authorization: 'Bearer' + token
    }
  }
  return await axios.request(options).then(function (response) {
    if (response.status !== 200) {
      throw new Error(Alerts.ERROR)
    } else {
      return response.data
    }
  }).catch(function (error: unknown) {
    console.error(error)
  })
}
export default getAllProducts
