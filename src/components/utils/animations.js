export const pageTransition = {
    initial: {
        opacity: 1
    },
    animate: {
        opacity: 1,
    },
    exit: {
        opacity: 1, transition: { delay: .5 }
    }
}

export const sliderTransition = {
    initial: {
        y: '-200vh', borderRadius: '50%', scale: 3
    },
    animate: {
        y: '0',
        transition: {
            duration: .5, ease: [0.77, 0, 0.175, 1], delay: .1
        }
    },
    exit: {
        y: '-200vh',
        transition: {
            duration: .75, delay: .2, ease: [0.77, 0, 0.175, 1]
        }
    }
}

export const logoTransition = {
    initial: {
        opacity: 0,
    },
    animate: {
        opacity: 1, transition: {
            duration: .25, ease: [0.77, 0, 0.175, 1], delay: .6
        }
    },
    exit: {
        opacity: 0,
        transition: {
            duration: .25, ease: [0.77, 0, 0.175, 1]
        }
    }
}

export const projectVariant = {
    initial: { scale: .9 },
    animate: {
        scale: 1, transition: {
            duration: .75, ease: [0.77, 0, 0.175, 1],
        }
    }
}

export const blockTextVariant = {
    initial: { x: '5vw', y: '5vw' },
    animate: {
        x: '0vw', y: '0vw', transition: {
            duration: .75, ease: [0.77, 0, 0.175, 1]
        }
    }
}

export const linkVariant = {
    initial: {
        y: '100%',
    },
    // target h6
    hover: {
        y: '15%',
        transition: {
            duration: .5, delay: .25
        }
    }
}


export const headingVariants = {
    animate: {
        color: '#a9a9a9',
        transition: {
            duration: .25, ease: [0.77, 0, 0.175, 1]
        }
    }
}

export const circleVariants = {
    animate: {
        rotate: '-45deg', color: '#a9a9a9', borderColor: '#a9a9a9',
        transition: {
            duration: .25, ease: [0.77, 0, 0.175, 1]
        }
    }
}

export const imgVariants = {
    initial: {
        opacity: 0, scale: .5
    },
    animate: {
        opacity: 1, scale: 1.2, transition: {
            duration: .25, ease: [0.77, 0, 0.175, 1]
        }
    }
}