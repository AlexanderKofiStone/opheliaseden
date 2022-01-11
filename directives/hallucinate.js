const animatedScrollObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('enter4');
        } else {
            entry.target.classList.remove('enter4');
        }
    });
});

export default {
    bind(el) {
        el.classList.add('hallucinate-enter');
        animatedScrollObserver.observe(el);
    }
};