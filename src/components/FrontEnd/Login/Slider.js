import React from 'react'
import 'react-slideshow-image/dist/styles.css'
import { Slide } from 'react-slideshow-image';
const slideImages = [
    'https://wpkixx.com/html/socimo/images/resources/login-1.png',
    'https://wpkixx.com/html/socimo/images/resources/login-3.png',
    'https://wpkixx.com/html/socimo/images/resources/login-2.png'
];

function Slider() {
    return (
        <div>
            <Slide easing="ease">
                <div className="each-slide">
                    <div style={{ 'backgroundImage': `url(${slideImages[0]})` }}>
                        {/* <span>Slide 1</span> */}
                    </div>
                    <h4 className='mt-3' style={{ color: "white" }}>Find New Researchers or Friends</h4>
                    <p style={{ color: "white" }}>
                        Join Socimo and make your network of university or college
                        fellows.
                    </p>
                </div>
                <div className="each-slide">
                    <div style={{ 'backgroundImage': `url(${slideImages[1]})` }}>
                        {/* <span>Slide 2</span> */}

                    </div>
                    <h4 className='mt-3' style={{ color: "white" }}>Sell Your Online paid Content</h4>
                    <p style={{ color: "white" }}>
                        Sell your online lectures, videos, books and many more with
                        Socimo.
                    </p>
                </div>
                <div className="each-slide">
                    <div style={{ 'backgroundImage': `url(${slideImages[2]})` }}>
                        {/* <span>Slide 3</span> */}

                    </div>
                    <h4 className='mt-3' style={{ color: "white" }}>Ask questions with seniors Researchers</h4>
                    <p style={{ color: "white" }}>
                        Ask questions and get the experienced answer by researchers and
                        others fellows.
                    </p>
                </div>
            </Slide>
        </div>
    )
}

export default Slider
