if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    listFiles: function(data, dirName) {
        var names = [];
        var inTargetSubDir = false;
        
        var readData = function (directory) {
            for(var key in directory.files) {
                var item = directory.files[key];
                
                if (typeof item === 'object' && item.dir === dirName) {
                    inTargetSubDir = true;
                    readData(item);
                    inTargetSubDir = false;
                }                
                else if(typeof item === 'object') {
                    readData(item);
                }
                else if(!dirName || inTargetSubDir) {
                    names.push(item);
                }
            }
            
            return names;
        };
        
        return readData(data, false);
    },

    permute: function(arr) {
        // http://en.wikipedia.org/wiki/Heap's_algorithm
        var perms = [];        
        
        var swap = function (data, index1, index2) {
            var temp = data[index1];
            data[index1] = data[index2];
            data[index2] = temp;
        };
        
        var generate = function (n, data) {
            if(n === 1) {
                perms.push(data.slice(0));
            }
            else {
                for(var i = 0; i < n; i++) {
                    generate(n - 1, data);
                    swap(data, n - 1, n % 2 === 1 ? 0 : i);
                } 
            }
        };
        
        generate(arr.length, arr);
        return perms;
    }
  };
});
