import { useRef, useState, useEffect } from "react";

export default function Carousel() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const carouselRef = useRef(null);

    const slides = [
        "/image/Golden Grain.jpg",
        "/image/Baguette.jpg",
        "/image/Bakery Classic.jpg",
        "/image/Rustic Sourdough.png",
        "/image/Soft Wheat.jpg"
    ];

    const SLIDE_WIDTH = 180;
    const GAP = 20;

    const nextSlide = () => {
        setCurrentIndex(prev => {
            if (prev >= slides.length - 1) {
                return 0;
            }
            return prev + 1;
        });
    };

    const prevSlide = () => {
        setCurrentIndex(prev => {
            if (prev <= 0) {
                return slides.length - 1;
            }
            return prev - 1;
        });
    };

    const handleWheel = (e) => {
        e.preventDefault();
        if (e.deltaY > 0) {
            nextSlide();
        } else {
            prevSlide();
        }
    };

    useEffect(() => {
        const carousel = carouselRef.current;
        if (!carousel) return;

        carousel.addEventListener("wheel", handleWheel, { passive: false });

        return () => {
            carousel.removeEventListener("wheel", handleWheel);
        };
    }, [currentIndex]);

    return (
        <div className="carousel" ref={carouselRef}>
            <button
                className="carousel__button carousel__button--left"
                onClick={prevSlide}
            >
                &#10094;
            </button>

            <div
                className="carousel__track"
                style={{ transform: `translateX(-${currentIndex * (SLIDE_WIDTH + GAP)}px)` }}
            >
                {slides.map((slide, index) => (
                    <div className="carousel__slide" key={index}>
                        <img src={slide} alt={`Slide ${index + 1}`} />
                    </div>
                ))}
            </div>

            <button
                className="carousel__button carousel__button--right"
                onClick={nextSlide}
            >
                &#10095;
            </button>
        </div>
    );
}