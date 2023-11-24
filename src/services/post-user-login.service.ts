import axios from 'axios'
import { BASE_URL } from 'constant'
import { type CredentialsToLogin, type UserLogin } from 'models'

const postUserLogin = async ({ crediantials }: CredentialsToLogin): Promise<UserLogin> => {
  const options = {
    method: 'POST',
    url: BASE_URL + 'auth/login',
    data: crediantials
  }
  return await axios.request(options).then(function (response) {
    if (response.status !== 200) {
      throw new Error('Error')
    } else {
      return response.data
    }
  }).catch(function (error: unknown) {
    console.error(error)
  })
}
export default postUserLogin
