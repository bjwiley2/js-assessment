if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    valueAtBit: function(num, bit) {
        // http://stackoverflow.com/questions/9939760/how-do-i-convert-an-integer-to-binary-in-javascript
        var binary = num.toString(2);
        var bitAsString = binary[binary.length - bit];
        return parseInt(bitAsString);
    },

    base10: function(str) {
        return parseInt(str, 2);
    },

    convertToBinary: function(num) {
        var binaryString = num.toString(2);
    
        while(binaryString.length < 8) {
            binaryString = '0' + binaryString;
        }
    
        return binaryString;
    },

    multiply: function(a, b) {
        var length = a.toString().length;
        
        if(b.toString().length > length) {
            length = b.toString().length;
        }
        
        // Account for the leading zero and decimal
        length -= 2;
    
        return (a * b).toPrecision(length) * 1;
    }
  };
});

