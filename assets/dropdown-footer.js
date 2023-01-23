const titles = document.querySelectorAll('.footer-block__heading.dropdown');

titles.forEach(title => {
  if (window.innerWidth <= 1024) {
    title.addEventListener('click', ()=> {
      title.parentElement.classList.toggle('active')
    })
  }
});
