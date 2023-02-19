(function() {
    var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

    for (var names) {
        var firstLetter = names.charAt(0).toLowerCase();

        if (firstLetter === 'j') {
            byeSpeaker.speak(names);
        }
        else {
            helloSpeaker.speak(names);
        }
    }
})();