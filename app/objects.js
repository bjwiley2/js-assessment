if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    alterContext : function(fn, obj) {
        return fn.apply(obj);
    },

    alterObjects : function(constructor, greeting) {
        constructor.prototype.greeting = greeting;
    },

    iterate : function(obj) {
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyNames
        var keys = Object.getOwnPropertyNames(obj);
        var keysAndValues = [];
        
        for(var i = 0; i < keys.length; i++) {
            var key = keys[i];
            var value = obj[key];
            keysAndValues.push(key + ': ' + value);
        }
        
        return keysAndValues;
    }
  };
});
