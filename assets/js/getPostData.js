(function() {
  const PostData = window.PostData || {};

  const setRawData = data => PostData.raw = data;

  const setInternalData = (data) => {
    PostData.internal = data.filter(item => !item.link);
  };

  PostData.init = (data) => {
    setRawData(data);
    setInternalData(data);
  };

  window.PostData = PostData;
})();
