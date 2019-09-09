// Containerized JS for the input fields
function themeSwitcher() {

  var list, links, cssLink;

  function updateCSSFilename(newName) {
    var splitString = cssLink['attributes']['href']['nodeValue'].split('assets/css/'),
        newHref = splitString[0] + 'assets/css/' + newName + '.css';

    cssLink.setAttribute('href', newHref);
    localStorage.setItem('theme', newName);
  }

  function init() {
    list.removeAttribute('hidden');

    var prevTheme = localStorage.getItem('theme');
    if (prevTheme) { updateCSSFilename(prevTheme); }
  }

  function setEvents() {
    Array.from(links).forEach(function(link) {
      link.addEventListener('click', function() {
        var clickedTheme = link['attributes']['data-theme-name']['nodeValue']
        updateCSSFilename(clickedTheme);
      });
    });
  }

  function docReady() {
    list = document.getElementsByClassName('themes__list')[0];
    links = document.getElementsByClassName('themes__item');
    cssLink = document.getElementById('css-stylesheet');
    init();
    setEvents();
  }

  return docReady;
}

module.exports = themeSwitcher();
