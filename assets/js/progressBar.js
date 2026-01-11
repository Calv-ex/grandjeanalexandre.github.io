document.addEventListener("DOMContentLoaded", function() {
  const events = document.querySelectorAll('.event-item');
  const eventSteps = document.querySelectorAll('.event-step');
  const sections = document.querySelectorAll('section[class$="-section"]');
  const mainBars = document.querySelectorAll('.main-bar');

  const observerOptions = {
    root: null,
    threshold: 0.6
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        if (entry.target.classList.contains('event-item')) {
          events.forEach(el => el.classList.remove('active'));
          entry.target.classList.add('active');
          const index = Array.from(events).indexOf(entry.target);
          eventSteps.forEach((step, i) => {
            step.classList.toggle('active', i <= index);
          });
        }
        
        if (entry.target.tagName === 'SECTION' || entry.target.classList.contains('profile-section') || entry.target.classList.contains('path-section')) {
          const isProfile = entry.target.classList.contains('profile-section');
          if (mainBars.length >= 2) {
            mainBars[0].classList.add('active'); 
            mainBars[1].classList.toggle('active', isProfile);
          }
        }
      }
    });
  }, { root: null, threshold: 0.5 });

  events.forEach(el => observer.observe(el));
  sections.forEach(el => observer.observe(el));
});