  
    // ===== Mobile Nav Toggle =====
  
    const navToggle = document.querySelector('.nav-toggle');
  
    const navMenu = document.getElementById('primary-navigation');
  
    navToggle?.addEventListener('click', () => {
  
      const open = navMenu.classList.toggle('open');
  
      navToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  
    });
  

  
    // ===== Active Nav Link On Scroll =====
  
    const sections = document.querySelectorAll('section');
  
    const navLinks = document.querySelectorAll('.nav-link');
  
    const makeActive = () => {
  
      let index = sections.length;
  
      while(--index && window.scrollY + 120 < sections[index].offsetTop) {}
  
      navLinks.forEach((link) => link.classList.remove('active'));
  
      const id = sections[index]?.id;
  
      const activeLink = document.querySelector('.nav-link[href="#' + id + '"]');
  
      activeLink?.classList.add('active');
  
    };
  
    makeActive();
  
    window.addEventListener('scroll', makeActive);
  

  
    // ===== Testimonial Dots =====
  
    const slides = document.querySelectorAll('.testimonial-slide');
  
    const dotsContainer = document.getElementById('testimonial-dots');
  
    slides.forEach((_, i) => {
  
      const btn = document.createElement('button');
  
      btn.setAttribute('data-target', i);
  
      if (i === 0) btn.classList.add('active');
  
      btn.addEventListener('click', () => setSlide(i));
  
      dotsContainer.appendChild(btn);
  
    });
  

  
    function setSlide(i){
  
      slides.forEach(s => s.classList.remove('active'));
  
      slides[i].classList.add('active');
  
      dotsContainer.querySelectorAll('button').forEach(b => b.classList.remove('active'));
  
      dotsContainer.querySelector(`[data-target="${i}"]`).classList.add('active');
  
    }
  

function googleFormSubmit(e) {
  e.preventDefault();

  const form = e.target;
  const formData = new FormData(form);

  // Replace with your Google Form's formResponse URL
  const googleFormUrl = "https://docs.google.com/forms/d/e/1FAIpQLSfD_demo_form_link/formResponse";

  fetch(googleFormUrl, {
    method: "POST",
    mode: "no-cors", // Required for Google Forms
    body: formData
  })
  .then(() => {
    alert("Thank you! Your message has been sent.");
    form.reset();
  })
  .catch(() => {
    alert("Sorry, there was a problem sending your message.");
  });

  return false;
}
  
    // ===== Current Year =====
  
    document.getElementById('year').textContent = new Date().getFullYear();
  