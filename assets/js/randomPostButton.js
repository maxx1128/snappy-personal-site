(function() {
  const posts = window.PostData.internal,
        randomPost = posts[Math.floor(Math.random() * posts.length)],
        linkElement = document.getElementById('random-link');

  if (linkElement) {
    linkElement.classList.remove('hidden');

    if (randomPost.link) {
      linkElement.setAttribute('href', randomPost.link);
      linkElement.setAttribute('target', '_blank');
      linkElement.setAttribute('rel', 'noopener');
    } else {
      linkElement.setAttribute('href', randomPost.url);
    }
  }
})();