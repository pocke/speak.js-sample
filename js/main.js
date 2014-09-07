var speakWorker;
try {
  speakWorker = new Worker('vendor/speak-js/speakWorker.js');
} catch(e) {
  console.log('speak.js warning: no worker support');
}


(function () {
  
  var text = function () {
    var textarea = $('#text');
    return textarea.val();
  };

  $(document).on('click', '#speak', function (e) {
    speak(text());
  });


})();
