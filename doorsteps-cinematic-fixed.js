// ===================================
// THE DOORSTEPS PROJECT
// Cinematic Animation System (FIXED)
// ===================================

// Initialize GSAP plugins
gsap.registerPlugin(ScrollTrigger);

// ===================================
// SMOOTH SCROLL WITH LENIS - FIXED
// ===================================
let lenis;

// Initialize Lenis after page load
window.addEventListener('load', () => {
    lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: 'vertical',
        gestureOrientation: 'vertical',
        smoothWheel: true,
        wheelMultiplier: 1,
        smoothTouch: false,
        touchMultiplier: 2,
        infinite: false,
    });

    function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Sync GSAP ScrollTrigger with Lenis
    lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time) => {
        lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    console.log('✅ Lenis smooth scroll initialized');
});

// ===================================
// NAVIGATION SCROLL STATE
// ===================================
const nav = document.querySelector('.nav');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 100) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }

    lastScroll = currentScroll;
});

// Smooth anchor scrolling
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const target = document.querySelector(targetId);
            if (target && lenis) {
                lenis.scrollTo(target, {
                    offset: -100,
                    duration: 1.5,
                });
            } else if (target) {
                // Fallback if Lenis not loaded
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
});

// ===================================
// HERO ANIMATIONS
// ===================================
window.addEventListener('load', () => {
    const heroTimeline = gsap.timeline({
        defaults: { ease: 'power3.out' }
    });

    heroTimeline
        .to('.hero-title-line', {
            y: 0,
            opacity: 1,
            duration: 1.2,
            stagger: 0.15,
            delay: 0.3
        })
        .to('.hero-subtitle', {
            opacity: 1,
            duration: 1,
        }, '-=0.6')
        .to('.hero-ctas', {
            opacity: 1,
            duration: 1,
        }, '-=0.6')
        .to('.hero-scroll-indicator', {
            opacity: 1,
            duration: 1,
        }, '-=0.8');

    // Hero parallax effect
    gsap.to('.layer-1', {
        y: -100,
        ease: 'none',
        scrollTrigger: {
            trigger: '.hero',
            start: 'top top',
            end: 'bottom top',
            scrub: 1,
        }
    });

    gsap.to('.layer-2', {
        y: -150,
        ease: 'none',
        scrollTrigger: {
            trigger: '.hero',
            start: 'top top',
            end: 'bottom top',
            scrub: 1.5,
        }
    });
});

// ===================================
// TEXT REVEAL ANIMATIONS
// ===================================
ScrollTrigger.addEventListener('refresh', () => {
    const revealTexts = document.querySelectorAll('.reveal-text');

    revealTexts.forEach((text, index) => {
        gsap.from(text, {
            y: 60,
            opacity: 0,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: text,
                start: 'top 85%',
                toggleActions: 'play none none none',
            }
        });
    });
});

// ===================================
// BLOCK REVEAL ANIMATIONS
// ===================================
ScrollTrigger.addEventListener('refresh', () => {
    const revealBlocks = document.querySelectorAll('.reveal-block');

    revealBlocks.forEach((block, index) => {
        gsap.from(block, {
            y: 80,
            opacity: 0,
            duration: 1.2,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: block,
                start: 'top 85%',
                toggleActions: 'play none none none',
            }
        });
    });
});

// ===================================
// GROWTH TIMELINE ANIMATION
// ===================================
ScrollTrigger.addEventListener('refresh', () => {
    const growthStages = document.querySelectorAll('.growth-stage');

    growthStages.forEach((stage, index) => {
        gsap.from(stage, {
            scale: 0.9,
            opacity: 0,
            y: 60,
            duration: 1,
            delay: index * 0.2,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: stage,
                start: 'top 80%',
                toggleActions: 'play none none none',
            }
        });
    });

    gsap.from('.growth-connector', {
        scaleX: 0,
        opacity: 0,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
            trigger: '.growth-timeline',
            start: 'top 75%',
            toggleActions: 'play none none none',
        }
    });
});

// ===================================
// STEPS TIMELINE ANIMATION
// ===================================
ScrollTrigger.addEventListener('refresh', () => {
    const steps = document.querySelectorAll('.step');

    // Animate timeline line
    gsap.from('.timeline-line', {
        scaleY: 0,
        transformOrigin: 'top center',
        duration: 2,
        ease: 'power2.out',
        scrollTrigger: {
            trigger: '.steps-timeline',
            start: 'top 70%',
            toggleActions: 'play none none none',
        }
    });

    // Animate each step
    steps.forEach((step, index) => {
        const stepNumber = step.querySelector('.step-number');
        const stepContent = step.querySelector('.step-content');

        const stepTl = gsap.timeline({
            scrollTrigger: {
                trigger: step,
                start: 'top 75%',
                toggleActions: 'play none none none',
            }
        });

        stepTl
            .from(stepNumber, {
                scale: 0,
                opacity: 0,
                duration: 0.6,
                ease: 'back.out(2)',
            })
            .from(stepContent, {
                x: -40,
                opacity: 0,
                duration: 0.8,
                ease: 'power3.out',
            }, '-=0.3');
    });
});

// ===================================
// REGION CARDS ANIMATION
// ===================================
ScrollTrigger.addEventListener('refresh', () => {
    const regions = document.querySelectorAll('.region');

    regions.forEach((region, index) => {
        gsap.from(region, {
            y: 100,
            opacity: 0,
            duration: 1.2,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: region,
                start: 'top 80%',
                toggleActions: 'play none none none',
            }
        });
    });
});

// ===================================
// SYNTHESIS GRID ANIMATION
// ===================================
ScrollTrigger.addEventListener('refresh', () => {
    const synthesisItems = document.querySelectorAll('.synthesis-item');

    synthesisItems.forEach((item, index) => {
        gsap.from(item, {
            y: 40,
            opacity: 0,
            duration: 0.8,
            delay: index * 0.1,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: '.synthesis-grid',
                start: 'top 75%',
                toggleActions: 'play none none none',
            }
        });
    });
});

// ===================================
// COLLABORATIONS GRID ANIMATION
// ===================================
ScrollTrigger.addEventListener('refresh', () => {
    const collabItems = document.querySelectorAll('.collab-item');

    collabItems.forEach((item, index) => {
        gsap.from(item, {
            scale: 0.95,
            opacity: 0,
            duration: 0.6,
            delay: index * 0.05,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: '.collab-grid',
                start: 'top 80%',
                toggleActions: 'play none none none',
            }
        });
    });
});

// ===================================
// IMPACT STATS COUNTER ANIMATION
// ===================================
ScrollTrigger.addEventListener('refresh', () => {
    const stats = document.querySelectorAll('.stat');

    stats.forEach((stat, index) => {
        const numberElement = stat.querySelector('.stat-number');
        const targetValue = numberElement.getAttribute('data-target');

        // Animate stat card appearance
        gsap.from(stat, {
            scale: 0.9,
            opacity: 0,
            y: 60,
            duration: 1,
            delay: index * 0.1,
            ease: 'back.out(1.2)',
            scrollTrigger: {
                trigger: stat,
                start: 'top 80%',
                toggleActions: 'play none none none',
            }
        });

        // Animate number counting if it has a target
        if (targetValue) {
            ScrollTrigger.create({
                trigger: stat,
                start: 'top 75%',
                onEnter: () => {
                    gsap.from(numberElement, {
                        innerText: 0,
                        duration: 2,
                        ease: 'power2.out',
                        snap: { innerText: 1 },
                        onUpdate: function() {
                            numberElement.innerText = Math.ceil(this.targets()[0].innerText).toLocaleString();
                        }
                    });
                },
                once: true
            });
        }
    });
});

// ===================================
// IMPACT QUOTE ANIMATION
// ===================================
ScrollTrigger.addEventListener('refresh', () => {
    const quoteLines = document.querySelectorAll('.impact-quote-text');

    quoteLines.forEach((line, index) => {
        gsap.from(line, {
            y: 80,
            opacity: 0,
            duration: 1.2,
            delay: index * 0.2,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: '.impact-quote',
                start: 'top 75%',
                toggleActions: 'play none none none',
            }
        });
    });
});

// ===================================
// JOIN US SECTION ANIMATION
// ===================================
ScrollTrigger.addEventListener('refresh', () => {
    gsap.from('.join-content', {
        y: 100,
        opacity: 0,
        duration: 1.5,
        ease: 'power3.out',
        scrollTrigger: {
            trigger: '.join-content',
            start: 'top 75%',
            toggleActions: 'play none none none',
        }
    });
});

// ===================================
// BUTTON HOVER EFFECTS
// ===================================
document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.btn');

    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            gsap.to(this, {
                scale: 1.05,
                duration: 0.3,
                ease: 'power2.out'
            });
        });

        button.addEventListener('mouseleave', function() {
            gsap.to(this, {
                scale: 1,
                duration: 0.3,
                ease: 'power2.out'
            });
        });
    });
});

// ===================================
// PERFORMANCE OPTIMIZATIONS
// ===================================

// Reduce motion for users who prefer it
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

if (prefersReducedMotion.matches) {
    gsap.globalTimeline.timeScale(100);
    ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    if (lenis) {
        lenis.destroy();
    }
}

// ===================================
// RESIZE HANDLER
// ===================================
let resizeTimer;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        ScrollTrigger.refresh();
    }, 250);
});

// ===================================
// PAGE LOAD HANDLER
// ===================================
window.addEventListener('load', () => {
    // Ensure all animations are ready
    setTimeout(() => {
        ScrollTrigger.refresh();
        document.body.style.opacity = '1';
    }, 100);
});

// Set initial body opacity
document.body.style.opacity = '0';

// ===================================
// CONSOLE MESSAGE
// ===================================
console.log('%c The Doorsteps Project ', 'background: #d4af37; color: #0a0a0b; font-size: 16px; font-weight: bold; padding: 8px 16px;');
console.log('%c Ensuring every child returns to school, for life. ', 'color: #a8a8a0; font-size: 12px;');
console.log('%c Smooth scrolling: ENABLED ✓ ', 'color: #4ade80; font-size: 12px;');