const footerLogo = document.querySelector('.footer-logo');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      footerLogo.classList.add('animate-footer');
      observer.unobserve(entry.target);
    }
  });
});

observer.observe(footerLogo);