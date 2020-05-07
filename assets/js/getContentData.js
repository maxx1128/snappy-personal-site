(function() {
  const ContentData = window.ContentData || {};

  const setPostData = data => ContentData.posts = data;
  const setNoteData = data => ContentData.notes = data;

  ContentData.init = (postData, noteData) => {
    setPostData(postData);
    setNoteData(noteData);
  };

  window.ContentData = ContentData;
})();
