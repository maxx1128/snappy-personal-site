(function() {
  const menu = document.getElementById('navigation');

  if (menu) {
    menu.classList.add('navigation--with-js')

    const menuToggle = document.getElementById('toggle'),
          navMenu = document.getElementById('navigation-menu');

    navMenu.classList.add('nav__main-menu--collapsed');
    menuToggle.setAttribute('aria-expanded', true);
    menuToggle.setAttribute('aria-haspopup', true);

    menuToggle.addEventListener('click', function() {
      const isHidden = navMenu.classList.contains('nav__main-menu--collapsed');

      navMenu.classList.toggle('nav__main-menu--expanded');
      navMenu.classList.toggle('nav__main-menu--collapsed');
      menuToggle.setAttribute('aria-expanded', !isHidden);
    });
  }
})();
