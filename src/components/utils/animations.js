export const pageTransition = {
    initial: {
        opacity: 0
    },
    animate: {
        opacity: 1,
        transition: {
            duration: .3, delay: 1, ease: 'easeInOut'
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
            duration: 1, ease: 'easeInOut'
        }
    }
}

export const logoTransition = {
    initial: {
        y: 100
    },
    animate: {
        y: 0,
        transition: {
            duration: .2,
            delay: .5
        }
    },
    exit: {
        y: 100,
        transition: {
            duration: .3,
        }
    }
}