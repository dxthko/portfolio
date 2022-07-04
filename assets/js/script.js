/* Show/Hide nav menu */

function openMenu() {
  document.body.classList.add('menu-expanded')
}

function closeMenu() {
  document.body.classList.remove('menu-expanded')
}

/* Back to top button */

const toTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

/* Toogle light/dark mode */

const checkbox = document.getElementById('checkbox')
checkbox.addEventListener('change', () => {
  document.body.classList.toggle('light')
})

/* Scroll reveal lib */
ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700
}).reveal(`
  .header,
  .about,
  .contact,
  .projects,
  .services
  `)
