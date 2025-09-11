!function() {
  const projectCards = document.querySelectorAll('.project-card');

  projectCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.classList.add('hover');
    });
    card.addEventListener('mouseleave', () => {
      card.classList.remove('hover');
    });
  });
}();