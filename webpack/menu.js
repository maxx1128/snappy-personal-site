// Containerized JS for the input fields
function menu() {

  var menu, toggle, body;

  var toggleMenu = function() {
    body.classList.toggle('body--collapsed-menu');
    body.classList.toggle('body--expanded-menu');

    menu.classList.toggle('nav__menu--collapsed');
    menu.classList.toggle('nav__menu--expanded');

    toggle.classList.toggle('nav__toggle--collapsed');
    toggle.classList.toggle('nav__toggle--expanded');
  }

  function init() {
    body.classList.remove('body--default-menu');
    body.classList.add('body--collapsed-menu');

    menu.classList.remove('nav__menu--default');
    menu.classList.add('nav__menu--collapsed');

    toggle.removeAttribute('hidden');
    toggle.classList.add('nav__toggle--collapsed');
  }

  function setEvents() {
    toggle.addEventListener('click', function() {
      toggleMenu();
    });
  }

  function docReady() {
    menu = document.getElementById('menu');
    toggle = document.getElementById('menu-toggle');
    body = document.getElementById('body');
    init();
    setEvents();
  }

  return docReady;
}

module.exports = menu();
