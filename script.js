// script.js
const lenis = new Lenis({
    wrapper: document.getElementById('main'), // Scroll container
    content: document.getElementById('pages-container'), // Scroll content
    lerp: 0.1,
    smoothWheel: true,
    duration: 1.2
});

// GSAP integration
lenis.on('scroll', ScrollTrigger.update);
gsap.ticker.add((time) => lenis.raf(time * 1000));
gsap.ticker.lagSmoothing(0);

// Update ScrollTrigger on window resize
window.addEventListener('resize', () => ScrollTrigger.refresh());