import './page.css'

export default function Contacts(){
    return (
        <div className='ContactCard'>
            <img className='logoimg' src='images/logo.png' alt='logo' />
            <ul className='lists'>
                <li className='list'>Home</li>
                <li className='list'>About Me</li>
                <li className='list'>Services</li>
                <li className='list'>Projects</li>
                <li className='list'>Testimonials</li>
                <li className='list'>Contacts</li>

            </ul>
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
            <div className='footer'>
                <p className='footerpara'>© 2023 <span className='footerspan'>Mumair</span> All Rights Reserved , Inc.</p>
            </div>
        </div>
    )
}