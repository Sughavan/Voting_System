import React, { useEffect, useRef } from 'react';
import './ImageSlider.css';
import image1 from '../Images/vote1.jpeg'
import image2 from '../Images/vote 2.jpeg'
import image3 from '../Images/vote3.jpeg'

const ImageSlider = () => {
    const sliderRef = useRef(null);

    useEffect(() => {
        const slider = sliderRef.current;
        let interval = setInterval(() => {
            slider.scrollBy({
                top: 0,
                left: slider.clientWidth,
                behavior: 'smooth'
            });

            if (slider.scrollLeft + slider.clientWidth >= slider.scrollWidth) {
                slider.scrollTo({ left: 0, behavior: 'smooth' });
            }
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="slider-container" ref={sliderRef}>
            <div className="slider">
                <div className="slide"><img src={image1} alt="Image 1" /></div>
                <div className="slide"><img src={image2} alt="Image 2" /></div>
                <div className="slide"><img src={image3} alt="Image 3" /></div>
                <div className="slide"><img src={image3} /></div>
            </div>
        </div>
    );
};

export default ImageSlider;
