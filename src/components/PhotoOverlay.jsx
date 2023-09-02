import { useEffect } from 'react';
import Carousel from 'react-gallery-carousel';
import 'react-gallery-carousel/dist/index.css';

const PhotoOverlay = ({ images, activeIndex, onClose, imageFolderPath }) => {

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === 'Escape') {
                onClose();
            };
        }

        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [onClose]);

    return (
        <div className='photo-overlay'>
            <button className='close-button' onClick={onClose} style={{zIndex: '2'}}>
                &times;
            </button>
            {imageFolderPath === 'https://d2nc74wuj3tc6t.cloudfront.net/media/1/images/home-page/' ? 
                (<div>
                    <Carousel
                        images={images.map((item) => ({
                            src: `${imageFolderPath}${item.largeSource}`,
                            alt: item.alt,
                        }))}
                        index={activeIndex}
                        isMaximized={true}
                        transitionSpeed={4}
                        hasMediaButton={false}
                        hasSizeButton={false}
                        zIndexAtMax={1}
                        isLoop={false}
                        hasCaptions='bottom'
                    />
                </div>)
                :
                (<div>
                    <Carousel
                        images={images.map((item) => ({
                            src: `${imageFolderPath}${item.largeSource}`,
                            alt: item.alt,
                        }))}
                        index={activeIndex}
                        isMaximized={true}
                        transitionSpeed={4}
                        hasMediaButton={false}
                        hasSizeButton={false}
                        zIndexAtMax={1}
                        isLoop={false}
                    />
                </div>)        
            }        
        </div>
    );
};

export default PhotoOverlay;