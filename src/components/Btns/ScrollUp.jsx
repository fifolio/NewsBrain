import { Button } from '@mui/material';
import { useState, useEffect } from 'react';

export default function ScrollUp() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        // cleanup function to remove the event listener when the component unmounts
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const handleScroll = () => {
        if (window.pageYOffset > 20) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    const buttonStyle = {
        position: "fixed",
        bottom: "50px",
        left: "75px",
        transform: "translateX(-50%)",
        padding: "10px",
        background: 'black',
        color: 'white',
        fontWeight: '500',
        outline: "none",
        textTransform: 'capitalize',
        display: isVisible ? "block" : "none",
        zIndex: 1,
    };

    return (
        <>
            <Button size="small" variant="outlined" style={buttonStyle} onClick={scrollToTop} >
                Return Up
            </Button >
        </>
    );
}
