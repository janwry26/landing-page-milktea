import '../styles/hero.css'
import hero from '../assets/hero.png';  
function Hero(){
    return(
        <section className='hero-section' id='home'>
          <div className="container px-5 hero-container">
            <div className="row gx-5">
                <div className="col-lg-6  hero-paragraph" data-aos="zoom-in-right"  data-aos-duration="1000">
                   <div className='row my-3 mx-2 '>
                        <div className='col-lg-12'>
                            <p className='title'>
                               <span>HORCHATEA</span>
                            </p>
                        </div>
                        <div className='col-lg-12 description'>
                            <p >
                            Horchatea is a kind of milk tea that is made of rice. Aside from that, we have different offers.
                            </p>
                        </div>
                 
                    <button class="cta">
                        <span class="hover-underline-animation">Order now</span>
                        <svg viewBox="0 0 46 16" height="10" width="30" xmlns="http://www.w3.org/2000/svg" id="arrow-horizontal">
                            <path transform="translate(30)" d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z" data-name="Path 10" id="Path_10"></path>
                        </svg>
                    </button>
                   </div>
                </div>
                <div className="col-lg-6 col-md-12 img-container">
                    
                       <img className='img-fluid' alt="hero-pic" src={hero}/>
                        
                </div>
                <div className="col-lg-6 col-md-12 img-container1">
                    
                    <img className='img-fluid' alt="hero-pic" src={hero}/>
               
             </div>
             <div className="footer-icons">
 
                <a href="https://www.facebook.com/Janwryyyyy" target="_blank"><i className="fa fa-facebook"></i></a>
                <a href="https://twitter.com/Janwryyyyy" target="_blank"><i className="fa fa-twitter"></i></a>
                <a href="https://www.linkedin.com/in/janwry-dela-cruz-6182b9261/" target="_blank"><i className="fa fa-linkedin"></i></a>
                <a href="https://github.com/janwry26" target="_blank"><i className="fa fa-github"></i></a>

             </div>
            </div>
          </div>
        </section>
    )
}
export default Hero;