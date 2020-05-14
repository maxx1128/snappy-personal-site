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
(function() {
  const posts = window.ContentData.posts,
        randomPost = posts[Math.floor(Math.random() * posts.length)],
        postLinkElement = document.getElementById('random-post-link');

  if (postLinkElement) {
    postLinkElement.classList.remove('hidden');
    postLinkElement.setAttribute('href', randomPost.url);
  }
})();

(function() {
  const notes = window.ContentData.notes,
        randomNote = notes[Math.floor(Math.random() * notes.length)],
        noteLinkElement = document.getElementById('random-note-link');

  if (noteLinkElement) {
    noteLinkElement.classList.remove('hidden');
    noteLinkElement.setAttribute('href', randomNote.url);
  }
})();
(function() {
  const getContentData = () => linkWrapper.classList.contains('random-navigator-wrapper--note') ? window.ContentData.notes : window.ContentData.posts

  const filterContent = (data) => {
    const nextLink     = document.getElementsByClassName('random-navigator__next-link')[0],
          previousLink = document.getElementsByClassName('random-navigator__previous-link')[0];

    let blockedURLs    = [window.location.pathname];
    if (nextLink)     { blockedURLs.push(nextLink.getAttribute('href')); }
    if (previousLink) { blockedURLs.push(previousLink.getAttribute('href')); }

    return data.filter(content => !blockedURLs.some(blockedURL => content.url.includes(blockedURL)));
  }

  const linkWrapper = document.getElementById('random-navigator-wrapper');

  if (linkWrapper) {
    const contentData = getContentData(),
          possibleContent = filterContent(contentData),
          randomContent = possibleContent[Math.floor(Math.random() * possibleContent.length)];

    const link = document.querySelectorAll('#random-navigator-wrapper a')[0];
    linkWrapper.classList.remove('hidden');
    link.setAttribute('href', randomContent.url);
    link.innerHTML = randomContent.title;
  }
})();
(function() {
  const noteElements = document.getElementsByClassName('note-styler');

  function removeNoteStyleClass(el) {
    var regx = new RegExp('\\b' + 'note-coloring--' + '.?\\b', 'g');
    el.className = el.className.replace(regx, '');
  }

  if (noteElements) {
    const shuffle = (array) => {
      for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }

      return array;
    }

    const numberOfPalettes = 14,
          classIndexes     = shuffle([...Array(numberOfPalettes * 2).keys()]);

    for (let note of noteElements) {
      removeNoteStyleClass(note);
      note.classList.add(`note-coloring--${classIndexes[0]}`);
      classIndexes.shift();
    }
  }
})();
