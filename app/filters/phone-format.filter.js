app.filter('phone', function() {
    var phoneRegex = /^(\+38)?[ ]?(\(([0-9]{3})\)|([0-9]{3}))[- ]?([0-9]{3})[- ]?([0-9]{4})$/;

    return function(input) {
        var regexMatchInfo = input.match(phoneRegex);
        return `+38 (${regexMatchInfo[3] || regexMatchInfo[4]}) ${regexMatchInfo[5]} ${regexMatchInfo[6]}`
    };
  })