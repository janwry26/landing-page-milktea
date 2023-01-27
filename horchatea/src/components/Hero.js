import '../styles/hero.css'
import hero from '../assets/hero.png';  
import left from '../assets/left.png';
import right from '../assets/right.png';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';    
function Hero(){
    return(
        <section className='hero-section' id='home'>

        <div className="container px-5 hero-container">
            <div className="row gx-5 ">
                <div className="col-lg-6 text-container">
                    <div className='row'>
                        <div className='col-lg-12 title'>
                            <span>HORCHATEA </span>
                        </div>
                        <div className='col-sm-12 description d-flex justify-content-center'>
                            <p className='text-center description'>
                            Horchatea is a kind of milk tea that is made of rice. Aside from that, we have different offers.
                            </p>
                        </div>
                        <div className='col-sm-12 col-lg-12 d-flex justify-content-center'>
                        <button className='bttn'> <span>Order Now</span></button>
                        </div>
                        <div className='col-sm-12 col-lg-12 d-flex justify-content-center'>
                        <div className='social-icons'>
                            <FaFacebook className='social-icon'/>
                            <FaInstagram className='social-icon'/>
                            <FaTwitter className='social-icon'/>
                        </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 img-container">
                    <div class="grid-container ">
                        <div class="grid-item"> <img className='img-fluid left' src={left}/></div>
                        <div class="grid-item"></div>
                        <div class="grid-item"></div>
                        <div class="grid-item"></div>
                        <div class="grid-item"> <img className='img-fluid hero-img' src={hero}/></div>
                        <div class="grid-item"></div>
                        <div class="grid-item"></div>
                        <div class="grid-item"></div>
                        <div class="grid-item"> <img className='img-fluid right' src={right}/></div>
                    </div>
                </div>
            </div>
        </div>
            
         
        </section>
    )
}
export default Hero;