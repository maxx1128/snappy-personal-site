(function() {
  const PostData = window.PostData || {};

  setRawData = data => PostData.raw = data;

  setInternalData = (data) => {
    PostData.internal = data.filter(item => !item.link);
  };

  PostData.init = (data) => {
    setRawData(data);
    setInternalData(data);
  };

  window.PostData = PostData;
})();
