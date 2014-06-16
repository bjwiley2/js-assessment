if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    argsAsArray : function(fn, arr) {
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply
        return fn.apply(null, arr);
    },

    speak : function(fn, obj) {
        return fn.apply(obj);
    },

    functionFunction : function(str) {
        return function (str2) {
            return str + ', ' + str2;  
        };
    },

    makeClosures : function(arr, fn) {
        var closures = [];
        
        var makeClosure = function (arrValue) {
            return function () {
                return fn(arrValue);
            };
        };
        
        for(var i = 0; i < arr.length; i++) {
            closures.push(makeClosure(arr[i]));
        }
        
        return closures;
    },

    partial : function(fn, str1, str2) {
        return function (str3) {
            return fn(str1, str2, str3);
        };
    },

    useArguments : function() {
        // http://stackoverflow.com/questions/1959040/is-it-possible-to-send-a-variable-number-of-arguments-to-a-javascript-function
        var sum = 0;
        
        for(var i = 0; i < arguments.length; i++) {
            sum += arguments[i];
        }
        
        return sum;
    },

    callIt : function(fn) {
        var args = [];
        
        for(var i = 1; i < arguments.length; i++) {
            args.push(arguments[i]);
        }
        
        return fn.apply(null, args);
    },

    partialUsingArguments : function(fn) {        
        var args = [];
        
        for(var i = 1; i < arguments.length; i++) {
            args.push(arguments[i]);
        }
    
        return function () {        
            for(var i = 0; i < arguments.length; i++) {
                args.push(arguments[i]);
            }
        
            return fn.apply(null, args);
        };
    },

    curryIt : function(fn) {  
        // http://en.wikipedia.org/wiki/Currying
        return function (arg1) {
            return function (arg2) {
                return function (arg3) {
                    return fn(arg1, arg2, arg3);
                };
            };
        };
    }
  };
});
