if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    containsNumber : function(str) {
        return (/[0-9]+/).test(str);
    },

    containsRepeatingLetter : function(str) {
        // http://stackoverflow.com/questions/20513274/detect-repeating-letter-in-an-string-in-javascript
        return (/([a-zA-Z]).*?\1/).test(str);
    },

    endsWithVowel : function(str) {
        return (/[aeiouAEIOU]$/).test(str);
    },

    captureThreeNumbers : function(str) {
        var matchData = str.match(/[0-9]{3}/);
        return matchData ? matchData[0] : false;
    },

    matchesPattern : function(str) {
        return (/^[0-9]{3}\-[0-9]{3}\-[0-9]{4}$/).test(str);
    },
    isUSD : function(str) {
        return (/^\$[0-9]{1,3}(,[0-9]{3})*(\.[0-9]{2})?$/).test(str);
    }
  };
});
