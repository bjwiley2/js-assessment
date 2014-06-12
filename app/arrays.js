if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    indexOf : function(arr, item) {
		return arr.indexOf(item);
    },

    sum : function(arr) {
		var sum = 0;
		
		for(var i = 0; i < arr.length; i++) {
			sum += arr[i];
		}
		
		return sum;
    },

    remove : function(arr, item) {
		// I always have to lookup the splice parameters:
		// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
		var index = arr.indexOf(item);
		
		while (index > -1) {
			arr.splice(index, 1);
			index = arr.indexOf(item);
		}

		return arr;
    },

    removeWithoutCopy : function(arr, item) {
		// The same thing works here... maybe I did the remove wrong???
		var index = arr.indexOf(item);
		
		while (index > -1) {
			arr.splice(index, 1);
			index = arr.indexOf(item);
		}

		return arr;
    },

    append : function(arr, item) {
		arr.push(item);
		return arr;
    },

    truncate : function(arr) {
		var lastIndex = arr.length - 1;
		arr.splice(lastIndex, 1);
		return arr;
    },

    prepend : function(arr, item) {
		arr.splice(0, 0, item);
		return arr;
    },

    curtail : function(arr) {
		arr.splice(0, 1);
		return arr;
    },

    concat : function(arr1, arr2) {
		// I was going to splice each arr2 value on to the end 
		// of arr1, but I Googled and found that this is an array 
		// prototype function:
		// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat
		return arr1.concat(arr2);
    },

    insert : function(arr, item, index) {
		arr.splice(index, 0, item);
		return arr;
    },

    count : function(arr, item) {
		var count = 0;
	
		for(var i = 0; i < arr.length; i++) {
			if(arr[i] === item) {
				count++;
			}
		}
		
		return count;
    },

    duplicates : function(arr) {
		var dups = [];
		var singles = [];
		
		for(var i = 0; i < arr.length; i++) {
			var currentValue = arr[i];
			
			if(singles.indexOf(currentValue) > -1 && dups.indexOf(currentValue) === -1) {
				dups.push(currentValue);
			}
			else {
				singles.push(currentValue);
			}
		}
		
		return dups;
    },

    square : function(arr) {
		for(var i = 0; i < arr.length; i++) {
			arr[i] *= arr[i]; 
		}
		
		return arr;
    },

    findAllOccurrences : function(arr, target) {
		var occurences = [];
	
		for(var i = 0; i < arr.length; i++) {
			if(arr[i] === target) {
				occurences.push(i);
			} 
		}
		
		return occurences;
    }
  };
});
