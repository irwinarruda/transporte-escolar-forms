import React from 'react';

function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
        width,
        height,
    };
}

export const useWindowDimensions = () => {
    const [windowDimensions, setWindowDimensions] = React.useState({
        width: 0,
        height: 0,
    });

    React.useEffect(() => {
        setWindowDimensions(getWindowDimensions());
        function handleResize() {
            setWindowDimensions(getWindowDimensions());
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return windowDimensions;
};
