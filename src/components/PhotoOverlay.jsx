import { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const PhotoOverlay = ({ images, onClose }) => {
    const [activeIndex, setActiveIndex] = useState(0);
    console.log(images);

    const handlePrev = () => {
        setActiveIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    const handleNext = () => {
        setActiveIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <div className="photo-overlay">
            <button className="close-button" onClick={onClose}>
                &times;
            </button>
            <div className="photo-carousel">
                {images.map((item, index) => (
                    <img
                        key={index}
                        src={`/images/photography-page/${item.largeSource}`}
                        alt={`${index}`}
                        className={`photo-slide ${index === activeIndex ? 'active' : ''}`}
                    />
                ))}
                <button className="prev-button" onClick={handlePrev}>
                    <FaArrowLeft size={24} />
                </button>
                <button className="next-button" onClick={handleNext}>
                    <FaArrowRight size={24} />
                </button>
            </div>
        </div>
    );
};

export default PhotoOverlay;