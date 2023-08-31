import { FaArrowLeft, FaArrowRight, FaCircle } from 'react-icons/fa';

const PhotoOverlay = ({ images, activeIndex, setActiveIndex, onClose, imageFolderPath }) => {
    const handlePrev = () => {
        setActiveIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    const handleNext = () => {
        setActiveIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };

    const titleStyle = {
        color: 'white',
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        textDecoration: 'none',
        textTransform: 'uppercase',
        display: 'block',
        paddingTop: '20px',
        textAlign: 'left',
        fontFamily: 'Oswald-Light'
    };

    return (
        <div className='photo-overlay'>
            <button className='close-button' onClick={onClose}>
                &times;
            </button>
            <div className='photo-carousel'>
                {images && images.map((item, index) => (
                    <img
                        key={index}
                        src={`${imageFolderPath}${item.largeSource}`}
                        alt={`${item.alt}`}
                        className={`photo-slide ${index === activeIndex ? 'active' : ''}`}
                    />
                ))}
                <button className='prev-button' onClick={handlePrev}>
                    <FaArrowLeft size={24} />
                </button>
                <button className='next-button' onClick={handleNext}>
                    <FaArrowRight size={24} />
                </button>
            </div>
            {imageFolderPath === 'https://d2nc74wuj3tc6t.cloudfront.net/media/1/images/home-page/' ? 
                (<div style={titleStyle} className='title'>
                    {images[activeIndex]['title']}
                </div>)
                :
                (<div className='photo-markers'>
                    {images && images.map((item, index) => (
                        <FaCircle
                            key={index}
                            className={`photo-marker ${index === activeIndex ? 'active' : ''}`}
                            onClick={() => setActiveIndex(index)}
                        />
                    ))}
                </div>)        
            }
        </div>
    );
};

export default PhotoOverlay;