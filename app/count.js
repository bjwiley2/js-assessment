if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function () {
  return {
    count : function (start, end) {
        var current = start;
        
        var iterate = function () {
            if(current <= end) {
                console.log(current++);
                setTimeout(iterate, 100);
            }
        };   
        
        iterate();
    
        return {
            cancel: function () {
                current = end + 1;
            }
        };    
    }
  };
});
