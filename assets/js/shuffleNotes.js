(function() {
  let notesShuffleButton = document.getElementById('shuffle_notes');

  if (notesShuffleButton) {
    notesShuffleButton.addEventListener('click', function() {
      let notes = document.getElementById('notes');

      for (var i = notes.children.length; i >= 0; i--) {
        notes.appendChild(notes.children[Math.random() * i | 0]);
      }
    });
  }
})();
