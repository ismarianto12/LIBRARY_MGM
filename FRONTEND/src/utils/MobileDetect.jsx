import { useState, useEffect } from "react";

const useMobileDetect = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const handleResize = () => {
                setIsMobile(window.innerWidth <= 768);
            };
            handleResize();

            window.addEventListener('resize', handleResize);
            return () => {
                window.removeEventListener('resize', handleResize);
            };
        }
    }, []);
    return isMobile;
}

export default useMobileDetect