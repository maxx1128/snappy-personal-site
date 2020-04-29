(function() {
  const posts = window.PostData.raw,
        randomPost = posts[Math.floor(Math.random() * posts.length)],
        linkElement = document.getElementById('random-link');

  if (linkElement) {
    linkElement.classList.remove('hidden');

    if (randomPost.link) {
      linkElement.setAttribute('href', randomPost.link);
      linkElement.setAttribute('target', '_blank');
    } else {
      linkElement.setAttribute('href', randomPost.url);
    }
  }
})();
