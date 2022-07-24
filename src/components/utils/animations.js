export const pageTransition = {
    initial: {
        y: '100vh',
        // opacity: 0
    },
    animate: {
        y: '0vh',
        // opacity: 1,
        transition: {
            duration: .75, delay: .2, ease: 'easeInOut'
        }
    },
    exit: {
        opacity: 1,
        transition: {
            delay: .5
        }
    }
}

export const sliderTransition = {
    initial: {
        y: '-100vh'
    },
    animate: {
        y: '0vh', transition: {
            duration: .5, ease: 'easeInOut'
        }
    },
    exit: {
        y: '-100vh', transition: {
            duration: .75, ease: 'easeInOut'
        }
    }
}

export const logoTransition = {
    initial: {

        opacity: 0
    },
    animate: {
        y: 0,
        opacity: 1,
        transition: {
            duration: .2,
            delay: .5
        }
    },
    exit: {

        opacity: 0,
        transition: {
            duration: .25,
        }
    }
}