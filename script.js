// Scroll Reveal Animations
const sections = document.querySelectorAll('.section.reveal');
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, {
    threshold: 0.2,
                    });

sections.forEach(section => {
    observer.observe(section);
});

// Light/Dark Mode Toggle
const toggle = document.getElementById('theme-toggle');
toggle.addEventListener('click', () => {
    const root = document.documentElement;
    const current = root.getAttribute('data-theme');
    const next = current === 'light' ? 'dark' : 'light';
    root.setAttribute('data-theme', next);
    toggle.textContent = next === 'light' ? '🌞' : '🌙';
});

// Booking Form Submission
document.getElementById('booking-form').addEventListener('submit', e => {
    e.preventDefault();
    alert('Booking confirmed! 🧔‍♂️✂️');
});

new Swiper(".testimonial-swiper", {
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
});


gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray('.section').forEach(section => {
  gsap.from(section, {
    opacity: 0,
    y: 50,
    duration: 1,
    scrollTrigger: {
      trigger: section,
      start: "top 80%",
      toggleActions: "play none none reverse"
    }
  });
});


gsap.to(".parallax-hero", {
  backgroundPosition: "50% 100%",
  ease: "none",
  scrollTrigger: {
    trigger: ".parallax-hero",
    start: "top top",
    end: "bottom top",
    scrub: true,
  },
});

gsap.to("header", {
  backgroundColor: "rgba(17,17,17,0.95)",
  padding: "0.5rem 2rem",
  duration: 0.3,
  scrollTrigger: {
    trigger: "main",
    start: "top top",
    toggleActions: "play none none reverse",
  },
});


gsap.from(".hero-text h1", { y: -50, opacity: 0, duration: 1, delay: 0.3 });
gsap.from(".hero-text p", { y: 30, opacity: 0, duration: 1, delay: 0.6 });
gsap.from(".hero-text .cta-button", { scale: 0, duration: 0.8, delay: 1 });


gsap.utils.toArray(".card, .gallery-grid img").forEach((el, i) => {
  gsap.from(el, {
    opacity: 0,
    y: 40,
    duration: 0.5,
    delay: i * 0.1,
    scrollTrigger: {
      trigger: el,
      start: "top 90%",
      toggleActions: "play none none reverse",
    },
  });
});
