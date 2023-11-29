import axios from 'axios'
import { Alerts, BASE_URL } from 'constant'
import { type CredentialsToSignUp, type SingUpReturnedData } from 'models'

const postCreateUser = async ({ crediantials }: CredentialsToSignUp): Promise<SingUpReturnedData> => {
  const options = {
    method: 'POST',
    url: BASE_URL + 'users',
    data: crediantials
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
export default postCreateUser
