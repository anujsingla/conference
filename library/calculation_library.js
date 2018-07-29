// calculation library
// we have used various feature in this library
// 1. IIFE
// 2. prototype inheritance
// 3. global object
// 4. code safe
(function(global) {

    var Calculation = function() {
        return new Calculation.init();
    };

    Calculation.prototype = {
        addTwoNumber: function(a, b) {
            console.log('addTwoNumber');
            if (!isNaN(a) && !isNaN(b)) {
                return a+b;
            }
        },
        multipleTwoNumber: function(a, b) {
            console.log('multipleTwoNumber');
            if (!isNaN(a) && !isNaN(b)) {
                return a*b;
            }
        },
        divideTwoNumber: function(a, b) {
            console.log('divideTwoNumber');
            if (!isNaN(a) && !isNaN(b)) {
                return a/b;
            }
        },
        subtractTwoNumber: function(a, b) {
            console.log('subtractTwoNumber');
            if (!isNaN(a) && !isNaN(b)) {
                return a-b;
            }
        },
    }

    Calculation.init = function() {
        console.log('Calculation library is initialized');
    }
    Calculation.init.prototype = Calculation.prototype;

    global.Calculation = Calculation;

})(window);