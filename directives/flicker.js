const animatedScrollObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('enter2');
        } else {
            entry.target.classList.remove('enter2');
        }
    });
});

export default {
    bind(el) {
        el.classList.add('flicker-enter');
        animatedScrollObserver.observe(el);
    }
};