(function () {
  
  var text = function () {
    var textarea = $('#text');
    return textarea.val();
  };

  $(document).on('click', '#speak', function (e) {
    speak(text());
  });


})();
