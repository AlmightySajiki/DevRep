
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  const isExpanded = navLinks.classList.toggle("active");
  menuToggle.classList.toggle("active");
  menuToggle.setAttribute("aria-expanded", isExpanded);
});

document.querySelectorAll('.has-submenu > a').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const submenu = this.nextElementSibling;
    const isOpen = submenu.style.display === 'flex';

    document.querySelectorAll('.submenu').forEach(sub => {
      sub.style.display = 'none';
      sub.previousElementSibling.setAttribute('aria-expanded', 'false');
      sub.setAttribute('aria-hidden', 'true');
    });

    submenu.style.display = isOpen ? 'none' : 'flex';
    this.setAttribute('aria-expanded', String(!isOpen));
    submenu.setAttribute('aria-hidden', String(isOpen));
  });

  link.addEventListener('keydown', function(e) {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      this.click();
    }
  });
});

document.querySelectorAll('.menu a').forEach(link => {
  link.addEventListener('focus', function () {
    this.classList.add('ativo');
  });
  link.addEventListener('blur', function () {
    this.classList.remove('ativo');
  });
});
