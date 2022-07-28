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