import { useEffect, useState } from 'react';

export default function CustomCursor() {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [ringPosition, setRingPosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        const updateCursor = (e) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };

        const updateRing = (e) => {
            setTimeout(() => {
                setRingPosition({ x: e.clientX, y: e.clientY });
            }, 100);
        };

        const handleMouseEnter = () => setIsHovering(true);
        const handleMouseLeave = () => setIsHovering(false);

        window.addEventListener('mousemove', updateCursor);
        window.addEventListener('mousemove', updateRing);

        const interactiveElements = document.querySelectorAll('a, button, .carousel__button');
        interactiveElements.forEach(el => {
            el.addEventListener('mouseenter', handleMouseEnter);
            el.addEventListener('mouseleave', handleMouseLeave);
        });

        return () => {
            window.removeEventListener('mousemove', updateCursor);
            window.removeEventListener('mousemove', updateRing);
            interactiveElements.forEach(el => {
                el.removeEventListener('mouseenter', handleMouseEnter);
                el.removeEventListener('mouseleave', handleMouseLeave);
            });
        };
    }, []);

    return (
        <>
            <div 
                className="cursor-dot"
                style={{
                    left: `${position.x}px`,
                    top: `${position.y}px`,
                    transform: 'translate(-50%, -50%)'
                }}
            />
            <div 
                className={`cursor-ring ${isHovering ? 'hover' : ''}`}
                style={{
                    left: `${ringPosition.x}px`,
                    top: `${ringPosition.y}px`,
                    transform: 'translate(-50%, -50%)'
                }}
            />
        </>
    );
}