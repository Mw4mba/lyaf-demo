import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ImageCarouselProps {
    images: string[];
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState<number>(0);

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const nextSlide = () => {
        const isLastSlide = currentIndex === images.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };
    
    const goToSlide = (slideIndex: number) => {
        setCurrentIndex(slideIndex);
    };

    return (
        <div className="relative h-[300px] md:h-[500px] w-full rounded-xl overflow-hidden group">
            <div 
                style={{ backgroundImage: `url(${images[currentIndex]})` }} 
                className="w-full h-full bg-center bg-cover duration-500"
            ></div>
            {/* Left Arrow */}
            <div className="hidden group-hover:block absolute top-1/2 -translate-y-1/2 left-5 text-2xl rounded-full p-2 bg-[#1240a0] text-white cursor-pointer">
                <ChevronLeft onClick={prevSlide} size={30} />
            </div>
            {/* Right Arrow */}
            <div className="hidden group-hover:block absolute top-1/2 -translate-y-1/2 right-5 text-2xl rounded-full p-2 bg-[#1240a0] text-white cursor-pointer">
                <ChevronRight onClick={nextSlide} size={30} />
            </div>
             <div className="absolute bottom-4 right-0 left-0">
                <div className="flex items-center justify-center gap-2">
                {images.map((_, slideIndex: number) => (
                    <div
                    key={slideIndex}
                    onClick={() => goToSlide(slideIndex)}
                    className={`transition-all w-2 h-2 bg-[#ff9138] rounded-full cursor-pointer ${currentIndex === slideIndex ? 'p-1.5' : 'bg-opacity-50'}`}
                    />
                ))}
                </div>
            </div>
        </div>
    );
};

export default ImageCarousel;
