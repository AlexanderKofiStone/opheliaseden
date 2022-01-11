const animatedScrollObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('enter3');
        } else {
            entry.target.classList.remove('enter3');
        }
    });
});

export default {
    bind(el) {
        el.classList.add('fade-enter');
        animatedScrollObserver.observe(el);
    }
};