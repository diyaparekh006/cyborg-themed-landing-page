const menu = document.getElementById('menu');
const nav = document.getElementById('nav');
menu.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menu.setAttribute('aria-expanded', String(open));
  menu.textContent = open ? '×' : '☰';
});
document.querySelectorAll('#nav a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open'); menu.setAttribute('aria-expanded', 'false'); menu.textContent = '☰';
}));
