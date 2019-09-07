// Containerized JS for the input fields
function menu() {

  var menu, toggle, body;

  var toggleMenu = function() {
    body.classList.toggle('body--collapsed-menu');
    body.classList.toggle('body--expanded-menu');

    menu.classList.toggle('menu--collapsed');
    menu.classList.toggle('menu--expanded');

    toggle.classList.toggle('menu-toggle--collapsed');
    toggle.classList.toggle('menu-toggle--expanded');
  }

  function init() {
    body.classList.remove('body--default-menu');
    body.classList.add('body--collapsed-menu');

    menu.classList.remove('menu--default');
    menu.classList.add('menu--collapsed');

    toggle.removeAttribute('hidden');
    toggle.classList.add('menu-toggle--collapsed');
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
