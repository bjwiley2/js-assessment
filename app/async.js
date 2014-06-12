if (typeof define !== 'function') { var define = require('amdefine')(module); }

define([ 'jquery' ], function($) {
  return {
    async : function(value) {
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
        return new Promise(
            function (resolve) {
                resolve(value);
            }
        );
    },

    manipulateRemoteData : function(url) {
        // http://www.w3schools.com/ajax/tryit.asp?filename=tryajax_first
        return new Promise(
            function (resolve) {
                var xmlhttp = new XMLHttpRequest();
                
                xmlhttp.onreadystatechange = function () {
                    if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
                        var jsonString = xmlhttp.responseText;
                        var dataObject = JSON.parse(jsonString);
                        var people = dataObject.people;
                        var names = [];
                        
                        for(var i = 0; i < people.length; i++) {
                            names.push(people[i].name);
                        }
                        
                        resolve(names.sort());
                    }
                };

                xmlhttp.open("GET", url);
                xmlhttp.send();
            }
        );
    }
  };
});
