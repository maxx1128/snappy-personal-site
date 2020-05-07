(function() {
  const PostData = window.PostData || {};

  const setRawData = data => PostData.raw = data;

  PostData.init = (data) => {
    setRawData(data);
  };

  window.PostData = PostData;
})();
