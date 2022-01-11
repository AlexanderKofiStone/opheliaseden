const animatedScrollObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('enter1');
        } else {
            entry.target.classList.remove('enter1');
        }
    });
});

export default {
    bind(el) {
        el.classList.add('slideUp-enter');
        animatedScrollObserver.observe(el);
    }
};