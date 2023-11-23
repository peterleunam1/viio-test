import { Button } from 'components/atoms'
import './social-auth.styled.scss'
import GOOGLE from 'assets/images/google.svg'
import FACEBOOK from 'assets/images/facebook.svg'

export default function SocialAuth () {
  return (
    <article className="social">
      <strong className="social__separator">OR</strong>
      <Button variant="outline" type="button" onClick={() => {}}>
        <img src={GOOGLE} alt="google" className="social__image" />
        Continue with Google
      </Button>
      <Button variant="outline" type="button" onClick={() => {}}>
        <img src={FACEBOOK} alt="facebook" className="social__image" />
        Continue with Facebook
      </Button>
      <p>
        Dont have an account? <strong className='social__signup'>Sign Up.</strong>
      </p>
    </article>
  )
}
