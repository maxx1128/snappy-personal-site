(function() {
  const posts = window.ContentData.posts,
        randomPost = posts[Math.floor(Math.random() * posts.length)],
        linkElement = document.getElementById('random-link');

  if (linkElement) {
    linkElement.classList.remove('hidden');
    linkElement.setAttribute('href', randomPost.url);
  }
})();