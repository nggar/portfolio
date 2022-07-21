import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import imgPortrait from '../../images/img-portrait.jpg';
import { Link } from 'react-router-dom';

const HeroSection = () => {
    const [showImg, setShowImg] = useState( false );
    const linkRef = useRef( null );
    const [imgPosition, setImgPosition] = useState( {
        x: 0,
        y: 0
    } );

    const moveImgPortrait = ( e ) => {
        setImgPosition( {
            x: e.clientX - linkRef.current.getBoundingClientRect().left,
            y: e.clientY - linkRef.current.getBoundingClientRect().top
        } )
    }

    const imgVariant = {
        initial: { opacity: 0, scale: .7 },
        animate: {
            left: `calc(3% + ${imgPosition.x}px)`, top: `calc(-30vh + ${imgPosition.y}px)`,
            opacity: showImg ? 1 : 0, scale: showImg ? 1 : .7,
            transition: {
                duration: .3
            }
        }
    }

    return (
        <section className="hero-section">
            <div className="inner-hero">
                <h1 className="hero-section__title">
                    Hello, I'm <Link ref={linkRef} className='heading-link heading-link__hero link-portrait' to='about'
                        onMouseEnter={() => setShowImg( !showImg )}
                        onMouseLeave={() => setShowImg( !showImg )}
                        onMouseMove={moveImgPortrait}
                    >Enggar
                    </Link>
                    , a creative digital designer and experienced front-end developer.
                </h1>

                <motion.img className='img-portrait' src={imgPortrait} alt="image portrait"
                    variants={imgVariant}
                    initial='initial'
                    animate='animate'
                />
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum, a.</p>
            </div>
        </section>
    )
}

export default HeroSection;