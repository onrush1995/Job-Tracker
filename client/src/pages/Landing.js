import main from '../assets/images/main.svg'
import Wrapper from '../assets/wrappers/LandingPage'
import { Logo } from '../components'
import { Link } from 'react-router-dom'
const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className='container page'>
        {/* info */}
        <div className='info'>
          <h1>
            job <span 
            >tracking</span> app
          </h1>
          <p>
                        Prioritize wisely
                        <sup>Time & Task</sup>
                    </p>
          <Link to='/register' className='btn btn-hero'
          style={{
            fontSize: '3vmin',
            background: 'linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 55%, rgba(252,176,69,1) 100%)'
            
        }}
          >
          Login/SignUp
          </Link>
        </div>
        <img src={main} alt='job hunt' className='img main-img' />
      </div>
    </Wrapper>
  )
}

export default Landing
