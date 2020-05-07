// Check if it is post or note data, and load up the needed data
  // random-navigator-wrapper--post or random-navigator-wrapper--note
// Filter out the current page based on if the data url contains the current relative url
// Grab a random link from the remaining data
  // // randomPost = posts[Math.floor(Math.random() * posts.length)]
// Make the link visible and adjust the link href and content

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
