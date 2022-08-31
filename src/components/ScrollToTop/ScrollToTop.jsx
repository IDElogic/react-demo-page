import { useEffect, useState } from "react";
import { BiArrowFromBottom} from 'react-icons/bi';
import './ScrollToTop.css';


const ScrollToTop = () => {
    
    const [isVisible, setIsVisible] = useState(false)

    const toggleVisibility = () => {
        if(window.pageYOffset > 300){
            setIsVisible(true);
        }else {
            setIsVisible(false);
        }
    };

    const ScrollToTop = () => {
        window.scrollTo({
        top: 0,
        behavior: 'smooth',
        });
    };

    useEffect (() => {
        window.addEventListener('scroll', toggleVisibility);

        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        }

    }, []);

    return (
        <div className="scroll">
            <button type="button" onClick={ScrollToTop}  >
                <BiArrowFromBottom className="icon" aria-hidden='true' />
            </button>
        </div>
    )


}

export default ScrollToTop