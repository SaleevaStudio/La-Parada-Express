const navigation = document.querySelector('.nav-scroll');
const categories = Array.from(navigation.querySelectorAll('a'));
const sections = categories.map(link => document.getElementById(link.hash.slice(1)));
let activeLink;

function updateCategory() {
  let index = 0;
  for (let i = 0; i < sections.length; i++) {
    if (sections[i].getBoundingClientRect().top > 110) break;
    index = i;
  }
  const link = categories[index];
  if (link === activeLink) return;
  activeLink?.removeAttribute('aria-current');
  link.setAttribute('aria-current', 'location');
  activeLink = link;
  const bounds = navigation.getBoundingClientRect();
  const item = link.getBoundingClientRect();
  if (item.right > bounds.right || item.left < bounds.left) {
    navigation.scrollLeft += item.left - bounds.left - 20;
  }
}

window.addEventListener('scroll', updateCategory, { passive: true });
window.addEventListener('load', updateCategory);
updateCategory();
