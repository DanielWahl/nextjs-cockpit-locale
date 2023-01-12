import { Variants } from "framer-motion";

export const scrollToTop = () => {
    const c = document.documentElement.scrollTop || document.body.scrollTop;
    if (c > 0) {
        window.requestAnimationFrame(scrollToTop);
        window.scrollTo(0, c - c / 8);
    }
};

export const animateY = () => {
    if (window.innerWidth > 920) {
        const items = document.querySelectorAll(".animate-y");
        // window.requestAnimationFrame(animateY);
        items?.forEach((item: HTMLDivElement, index) => {
            let pace: number = parseInt(item.dataset.scrollYPace);
            let translateY = pace * (window.pageYOffset / 2) * 0.1;
            item.style.transform = "translateY(" + translateY + "px)";
        });
    }
};

export const scrollViewVariant: Variants = {
    offscreen: {
        opacity: 0,
        y: 20,
    },
    onscreen: {
        opacity: 1,
        y: 0,
        transition: {
            delay: 0.5,
        },
    },
};

export const scrollParentVariant: Variants = {
    offscreen: { opacity: 0 },
    onscreen: {
        opacity: 1,
        transition: {
            delay: 0.5,
            staggerChildren: 0.1,
            delayChildren: 0.5,
        },
    },
};

export const scrollChildVariant: Variants = {
    offscreen: { opacity: 0, y: 20 },
    onscreen: {
        opacity: 1,
        y: 0,
    },
};
