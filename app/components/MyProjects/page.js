'use client'
import './page.css'
export default function MyProjects(){
    return(
        <div className='projectsContainer'>
            <h1 className='projectsheading'>My Projects</h1>
            <p className='projectspara'>Lorem ipsum dolor sit amet consectetur. Mollis erat duis aliquam mauris est risus lectus. Phasellus consequat urna tellus</p>
            <div>
            <ul className='buttons'>
            <li className='btnlist'><button className='projectbutton'>All</button></li>
            <li className='btnlist'><button className='projectbutton'>UI/UX</button></li>
            <li className='btnlist'><button className='projectbutton1'>Web Design</button></li>
            <li className='btnlist'><button className='projectbutton'>App Design</button></li>
            <li className='btnlist'><button className='projectbutton'>Graphic Design</button></li>
        </ul>
            </div>
            <div className='projectslist'>
                <img className='projectimage' src='images/Group 25.png' alt='project'/>
                <img className='projectimage' src='images/Group 26.png' alt='project'/>
                <img className='projectimage' src='images/Group 27.png' alt='project'/>
            </div>
            
        </div>
    )
}