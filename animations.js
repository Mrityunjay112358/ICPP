// ===================================
// GSAP ANIMATIONS & INTERACTIONS
// ===================================

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

// ===================================
// CUSTOM CURSOR
// ===================================
const cursor = document.querySelector('.cursor');
const cursorFollower = document.querySelector('.cursor-follower');

document.addEventListener('mousemove', (e) => {
    gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1
    });

    gsap.to(cursorFollower, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.3
    });
});

// Cursor effects on hover
document.querySelectorAll('a, button, .cta-button, .nav-link').forEach(el => {
    el.addEventListener('mouseenter', () => {
        gsap.to(cursor, { scale: 1.5, duration: 0.3 });
        gsap.to(cursorFollower, { scale: 1.5, duration: 0.3 });
    });

    el.addEventListener('mouseleave', () => {
        gsap.to(cursor, { scale: 1, duration: 0.3 });
        gsap.to(cursorFollower, { scale: 1, duration: 0.3 });
    });
});

// ===================================
// NAVBAR SCROLL EFFECT
// ===================================
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// ===================================
// HOME PAGE ANIMATIONS
// ===================================
if (document.querySelector('.hero')) {
    // Hero title animation
    gsap.to('.hero-line', {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out',
        delay: 0.3
    });

    // Hero subtitle animation
    gsap.to('.hero-subtitle', {
        opacity: 1,
        duration: 1,
        ease: 'power3.out',
        delay: 1
    });

    // Hero CTA animation
    gsap.to('.hero-cta', {
        opacity: 1,
        duration: 1,
        ease: 'power3.out',
        delay: 1.3
    });

    // Scroll indicator animation
    gsap.to('.scroll-indicator', {
        opacity: 1,
        duration: 1,
        ease: 'power3.out',
        delay: 1.5
    });

    // Smooth scroll for CTA button
    document.querySelector('.cta-button')?.addEventListener('click', (e) => {
        e.preventDefault();
        gsap.to(window, {
            duration: 1.5,
            scrollTo: '#story',
            ease: 'power3.inOut'
        });
    });
}

// ===================================
// FLOATING TEXT ANIMATION
// ===================================
if (document.querySelector('.floating-text')) {
    gsap.to('.float-word', {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
            trigger: '.floating-text',
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
        }
    });

    // Continuous floating animation
    gsap.to('.float-word', {
        y: -20,
        duration: 2,
        stagger: 0.2,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut'
    });
}

// ===================================
// STORY SECTION ANIMATIONS
// ===================================
if (document.querySelector('.our-story')) {
    // Section title
    gsap.from('.section-title', {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
            trigger: '.section-title',
            start: 'top 80%'
        }
    });

    // Story text reveal
    gsap.utils.toArray('.reveal-text').forEach((text, i) => {
        gsap.from(text, {
            opacity: 0,
            y: 30,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: text,
                start: 'top 85%'
            }
        });
    });

    // Growth items animation
    gsap.from('.growth-item', {
        opacity: 0,
        scale: 0.8,
        duration: 1,
        stagger: 0.3,
        ease: 'back.out(1.7)',
        scrollTrigger: {
            trigger: '.growth-visual',
            start: 'top 70%'
        }
    });

    // Growth arrows
    gsap.from('.growth-arrow', {
        opacity: 0,
        scale: 0,
        duration: 0.5,
        stagger: 0.3,
        ease: 'back.out(2)',
        scrollTrigger: {
            trigger: '.growth-visual',
            start: 'top 70%'
        },
        delay: 0.5
    });

    // Story conclusion
    gsap.from('.story-conclusion', {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
            trigger: '.story-conclusion',
            start: 'top 80%'
        }
    });
}

// ===================================
// PARALLAX EFFECT
// ===================================
if (document.querySelector('.parallax-container')) {
    gsap.to('.layer-1', {
        y: -100,
        ease: 'none',
        scrollTrigger: {
            trigger: '.visual-break',
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1
        }
    });

    gsap.to('.layer-2', {
        y: -150,
        ease: 'none',
        scrollTrigger: {
            trigger: '.visual-break',
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1.5
        }
    });

    gsap.to('.layer-3', {
        y: -200,
        ease: 'none',
        scrollTrigger: {
            trigger: '.visual-break',
            start: 'top bottom',
            end: 'bottom top',
            scrub: 2
        }
    });

    gsap.from('.parallax-text h2', {
        opacity: 0,
        scale: 0.8,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
            trigger: '.parallax-text',
            start: 'top 70%'
        }
    });
}

// ===================================
// STEPS SECTION (How We Work)
// ===================================
if (document.querySelector('.steps-section')) {
    gsap.utils.toArray('.step-card').forEach((card, i) => {
        gsap.from(card, {
            opacity: 0,
            x: i % 2 === 0 ? -100 : 100,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: card,
                start: 'top 80%'
            }
        });
    });

    // Timeline line animation
    gsap.from('.timeline-line', {
        scaleY: 0,
        duration: 2,
        ease: 'power3.out',
        scrollTrigger: {
            trigger: '.steps-timeline',
            start: 'top 70%'
        }
    });
}

// ===================================
// REGIONS SECTION (Global Success)
// ===================================
if (document.querySelector('.regions-section')) {
    gsap.utils.toArray('.region-block').forEach((block, i) => {
        gsap.from(block, {
            opacity: 0,
            y: 80,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: block,
                start: 'top 75%'
            }
        });
    });

    // Integration items stagger
    gsap.from('.integration-item', {
        opacity: 0,
        y: 30,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: {
            trigger: '.integration-grid',
            start: 'top 80%'
        }
    });
}

// ===================================
// COLLABORATIONS
// ===================================
if (document.querySelector('.collab-grid')) {
    gsap.from('.collab-card', {
        opacity: 0,
        scale: 0.9,
        duration: 0.6,
        stagger: 0.05,
        ease: 'back.out(1.7)',
        scrollTrigger: {
            trigger: '.collab-grid',
            start: 'top 80%'
        }
    });
}

// ===================================
// IMPACT PAGE ANIMATIONS
// ===================================
if (document.querySelector('.impact-quote-section')) {
    // Quote lines
    gsap.utils.toArray('.quote-line').forEach((line, i) => {
        gsap.from(line, {
            opacity: 0,
            y: 50,
            duration: 1,
            delay: i * 0.3,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: '.quote-wrapper',
                start: 'top 70%'
            }
        });
    });
}

// ===================================
// STATS COUNTER ANIMATION
// ===================================
if (document.querySelector('.stats-container')) {
    gsap.utils.toArray('.stat-item').forEach((stat, i) => {
        gsap.from(stat, {
            opacity: 0,
            scale: 0.8,
            duration: 0.8,
            delay: i * 0.1,
            ease: 'back.out(1.7)',
            scrollTrigger: {
                trigger: '.stats-container',
                start: 'top 75%'
            }
        });
    });

    // Counter animation
    const counters = document.querySelectorAll('.stat-value[data-target]');
    counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-target'));

        ScrollTrigger.create({
            trigger: counter,
            start: 'top 80%',
            onEnter: () => {
                gsap.to(counter, {
                    innerText: target,
                    duration: 2,
                    ease: 'power1.out',
                    snap: { innerText: 1 },
                    onUpdate: function() {
                        counter.innerText = Math.ceil(counter.innerText).toLocaleString();
                    }
                });
            }
        });
    });
}

// ===================================
// ARTICLES GRID
// ===================================
if (document.querySelector('.articles-grid')) {
    gsap.from('.article-placeholder', {
        opacity: 0,
        y: 30,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
            trigger: '.articles-grid',
            start: 'top 80%'
        }
    });
}

// ===================================
// JOIN US PAGE
// ===================================
if (document.querySelector('.join-hero')) {
    gsap.from('.join-hero-title', {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: 'power3.out',
        delay: 0.3
    });

    gsap.from('.join-hero-subtitle', {
        opacity: 0,
        y: 30,
        duration: 1,
        ease: 'power3.out',
        delay: 0.6
    });
}

if (document.querySelector('.options-grid')) {
    gsap.from('.option-card', {
        opacity: 0,
        y: 50,
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
            trigger: '.options-grid',
            start: 'top 75%'
        }
    });

    // Hover tilt effect for option cards
    document.querySelectorAll('.option-card').forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateX = (y - centerY) / 20;
            const rotateY = (centerX - x) / 20;

            gsap.to(card, {
                rotateX: rotateX,
                rotateY: rotateY,
                duration: 0.5,
                ease: 'power2.out'
            });
        });

        card.addEventListener('mouseleave', () => {
            gsap.to(card, {
                rotateX: 0,
                rotateY: 0,
                duration: 0.5,
                ease: 'power2.out'
            });
        });
    });
}

// ===================================
// STATEMENT ANIMATIONS
// ===================================
if (document.querySelector('.statement-text')) {
    gsap.from('.statement-text', {
        opacity: 0,
        y: 40,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
            trigger: '.statement-text',
            start: 'top 80%'
        }
    });
}

if (document.querySelector('.statement-sub')) {
    gsap.from('.statement-sub', {
        opacity: 0,
        y: 30,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
            trigger: '.statement-sub',
            start: 'top 80%'
        }
    });
}

// ===================================
// PAGE HERO ANIMATIONS
// ===================================
if (document.querySelector('.page-hero-title')) {
    gsap.from('.page-hero-title', {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: 'power3.out',
        delay: 0.2
    });
}

if (document.querySelector('.page-hero-subtitle')) {
    gsap.from('.page-hero-subtitle', {
        opacity: 0,
        y: 30,
        duration: 1,
        ease: 'power3.out',
        delay: 0.5
    });
}

// ===================================
// SMOOTH SCROLL FOR ALL LINKS
// ===================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            gsap.to(window, {
                duration: 1,
                scrollTo: target,
                ease: 'power3.inOut'
            });
        }
    });
});

// ===================================
// MAGNETIC BUTTONS
// ===================================
document.querySelectorAll('.cta-button, .nav-link').forEach(button => {
    button.addEventListener('mousemove', (e) => {
        const rect = button.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;

        gsap.to(button, {
            x: x * 0.3,
            y: y * 0.3,
            duration: 0.3,
            ease: 'power2.out'
        });
    });

    button.addEventListener('mouseleave', () => {
        gsap.to(button, {
            x: 0,
            y: 0,
            duration: 0.3,
            ease: 'power2.out'
        });
    });
});

// ===================================
// LOADING ANIMATION (Optional)
// ===================================
window.addEventListener('load', () => {
    gsap.to('body', {
        opacity: 1,
        duration: 0.5
    });
});

// Set initial opacity
document.body.style.opacity = 0;
gsap.to('body', { opacity: 1, duration: 0.5, delay: 0.1 });

// ===================================
// REFRESH SCROLLTRIGGER ON RESIZE
// ===================================
window.addEventListener('resize', () => {
    ScrollTrigger.refresh();
});

console.log('🚀 GSAP Animations Loaded Successfully!');
