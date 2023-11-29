import { Button } from 'components/atoms'
import './social-auth.styled.scss'
import GOOGLE from 'assets/images/google.svg'
import FACEBOOK from 'assets/images/facebook.svg'
import { useNavigation } from 'hooks'
import { publicRoutes } from 'constant'

export default function SocialAuth () {
  const { goTo } = useNavigation()

  const handleGoTo = () => {
    goTo(`/${publicRoutes.SIGNUP}`)
  }

  return (
    <>
      <strong>OR</strong>
      <article className="social">
        <Button variant="outline" type="button" onClick={() => {}}>
          <img src={GOOGLE} alt="google" className="social__image" />
          Continue with Google
        </Button>
        <Button variant="outline" type="button" onClick={() => {}}>
          <img src={FACEBOOK} alt="facebook" className="social__image" />
          Continue with Facebook
        </Button>
        <p className='social__text'>
          Dont have an account?
          <strong className="social__signup" onClick={handleGoTo}>
            {' '}
            Sign Up.
          </strong>
        </p>
      </article>
    </>
  )
}
