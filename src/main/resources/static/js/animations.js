document.addEventListener('DOMContentLoaded', () => {
  // Scroll-triggered animations
  const observerOptions = {
      threshold: 0.1
  };

  const animateOnScroll = (entries, observer) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.classList.add('animate-fadeIn');
              observer.unobserve(entry.target);
          }
      });
  };

  const scrollObserver = new IntersectionObserver(animateOnScroll, observerOptions);

  // Add animation to sections
  const sections = document.querySelectorAll('#about, #skills, #projects, #contact');
  sections.forEach(section => {
      scrollObserver.observe(section);
  });

  // Particle effect (simple implementation)
  function createParticles() {
      const particleContainer = document.createElement('div');
      particleContainer.classList.add('particle-bg');
      document.body.appendChild(particleContainer);

      for (let i = 0; i < 50; i++) {
          const particle = document.createElement('div');
          particle.classList.add('particle');
          particle.style.left = `${Math.random() * 100}%`;
          particle.style.top = `${Math.random() * 100}%`;
          particle.style.animationDelay = `${Math.random() * 5}s`;
          particleContainer.appendChild(particle);
      }
  }

  // Initialize particles
  createParticles();

  // Typewriter effect (additional fallback)
  const typewriterElements = document.querySelectorAll('.typewriter');
  typewriterElements.forEach(el => {
      const text = el.textContent;
      el.textContent = '';
      let index = 0;

      function typeWriter() {
          if (index < text.length) {
              el.textContent += text.charAt(index);
              index++;
              setTimeout(typeWriter, 50);
          }
      }

      typeWriter();
  });
});