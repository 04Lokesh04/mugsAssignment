'use client'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import'./page.css'

export default function Testimonials(){
    return (
        <div className='testContainer'>
            <h1 className='testheading'>Testimonials</h1>
            <p className='testpara'>Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium</p>
            <div className='carouselcard'>
            <Carousel showArrows={false} autoPlay={true} infiniteLoop={true} showThumbs={false}>
                <div className='card1'>
                    <img className='carouselimage' src='images/Group 32.png' alt='pic'/>
                </div>
                <div className='card1'>
                    <img className='carouselimage' src='images/Group 34.png' alt='pic'/>
                </div>
                <div className='card1'>
                    <img className='carouselimage' src='images/Group 33.png' alt='pic'/>
                </div>
            </Carousel>
            </div>
        </div>
    )
}