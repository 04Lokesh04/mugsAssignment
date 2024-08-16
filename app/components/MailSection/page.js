import './page.css'

export default function MailSection(){
    return (
        <div className='MailContainer'>
            <h1 className='MailHEading'>Lets Design Together</h1>
            <p className='Mailpara'>Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium</p>
            <div className='MailInput'>
                <input className='input'
                type='text'
                placeholder='Enter Your Email' />
                <button className='inputbutton'>Contact Me</button>
            </div>
        </div>
    )
}