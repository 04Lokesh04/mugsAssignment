'Use client'
import './page.css'
export default function MainSection(){
    return (
        <div className='MainContainer'>
            <nav className='navbar'>
                <img className='mainLogo' src='images/logo.png' alt='logo' />
                <ul className='sections'>
                    <li className='section'>Home</li>
                    <li className='section'>About Me</li>
                    <li className='section'>Services</li>
                    <li className='section'>Projects</li>
                    <li className='section'>Testimonials</li>
                    <li className='section'>Contact</li>
                    <li className='section'><button className='navBtn'>Download CV</button></li>
                </ul>
            </nav>

            <div className='HomeCard'>
                <div className='textCard'>
                    <h1 className='Homeheading'>Hi I am </h1>
                    <p className='Homepara'>Muhammad Umair </p>
                    <p className='Homepara2'>UI & UX</p>
                    <p className='HomePara3'>Designer</p>
                    <p className='Homepara4'>Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium. Turpis tempus pharetra</p>
                    <button className='hirebutttton'>
            Hire Me
        </button>
                </div>
                <div className='imageCard'>
                    <div className='imagebg3'>
                        <img className='image1' src='images/Rectangle 4.png' alt='rectangle'/>
                    </div>
                    <div className='imagebg1'>
                        <div className='imagebg2'>  
                        </div>
                    </div>
                    
                    <ul className='iconslist'>
                        <li className='icon'>
                            <img className='iconimage' src='images/Facebook - Negative.png' alt='facebook'/>
                        </li>
                        <li className='icon'>
                            <img className='iconimage' src='images/Twitter - Negative.png' alt='twitter'/>
                        </li>
                        <li className='icon'>
                            <img className='iconimage' src='images/Instagram - Negative.png' alt='instagram'/>
                        </li>
                        <li className='icon'>
                            <img className='iconimage' src='images/LinkedIn - Negative.png' alt='linkedin'/>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}