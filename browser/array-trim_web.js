(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
arrayTrim = require('../src/array-trim.js');

},{"../src/array-trim.js":3}],2:[function(require,module,exports){
/**
 * Tells you if the value is empty. Empty values are '', undefined, null, [],
 *  {}, and objects with no enumerable properties.
 * @param {Mixed} item The item to check.
 */
function isEmpty (item) {
    var out = false;
    switch (item) {
        case '' :
        case null :
        case undefined :
            out = true;
        default:
            break;
    }
    try {
        if (Object.keys(item).length === 0) {
            out = true;
        }
    } catch (ignore) {
        // not an object.
    }
    return out;
}
module.exports = isEmpty;
},{}],3:[function(require,module,exports){
/*jslint
    indent: 4,
    maxerr: 50,
    white: true,
    node: true,
    browser: true,
    devel: true,
    plusplus: true,
    regexp: true
*/
/*global atropa */
// end header

/**
 * Removes empty items from an array. Empty values are '', undefined, null, [],
 *  {}, and objects with no enumerable properties.
 * @param {Array} arr The array to trim.
 * @returns {Array} arr The array with empty values removed.
 */
function arrayTrim (arr) {
    var out;
    var empty = require('atropa-is-empty');
    out = arr.filter(function (item) {
        return !empty(item);
    });
    return out;
}
module.exports = arrayTrim;
},{"atropa-is-empty":2}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJkZXYvYnJvd3Nlck1haW4uanMiLCJub2RlX21vZHVsZXMvYXRyb3BhLWlzLWVtcHR5L3NyYy9pcy1lbXB0eS5qcyIsInNyYy9hcnJheS10cmltLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTs7QUNEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN4QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCJhcnJheVRyaW0gPSByZXF1aXJlKCcuLi9zcmMvYXJyYXktdHJpbS5qcycpO1xyXG4iLCIvKipcclxuICogVGVsbHMgeW91IGlmIHRoZSB2YWx1ZSBpcyBlbXB0eS4gRW1wdHkgdmFsdWVzIGFyZSAnJywgdW5kZWZpbmVkLCBudWxsLCBbXSxcclxuICogIHt9LCBhbmQgb2JqZWN0cyB3aXRoIG5vIGVudW1lcmFibGUgcHJvcGVydGllcy5cclxuICogQHBhcmFtIHtNaXhlZH0gaXRlbSBUaGUgaXRlbSB0byBjaGVjay5cclxuICovXHJcbmZ1bmN0aW9uIGlzRW1wdHkgKGl0ZW0pIHtcclxuICAgIHZhciBvdXQgPSBmYWxzZTtcclxuICAgIHN3aXRjaCAoaXRlbSkge1xyXG4gICAgICAgIGNhc2UgJycgOlxyXG4gICAgICAgIGNhc2UgbnVsbCA6XHJcbiAgICAgICAgY2FzZSB1bmRlZmluZWQgOlxyXG4gICAgICAgICAgICBvdXQgPSB0cnVlO1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gICAgdHJ5IHtcclxuICAgICAgICBpZiAoT2JqZWN0LmtleXMoaXRlbSkubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgIG91dCA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgfSBjYXRjaCAoaWdub3JlKSB7XHJcbiAgICAgICAgLy8gbm90IGFuIG9iamVjdC5cclxuICAgIH1cclxuICAgIHJldHVybiBvdXQ7XHJcbn1cclxubW9kdWxlLmV4cG9ydHMgPSBpc0VtcHR5OyIsIi8qanNsaW50XHJcbiAgICBpbmRlbnQ6IDQsXHJcbiAgICBtYXhlcnI6IDUwLFxyXG4gICAgd2hpdGU6IHRydWUsXHJcbiAgICBub2RlOiB0cnVlLFxyXG4gICAgYnJvd3NlcjogdHJ1ZSxcclxuICAgIGRldmVsOiB0cnVlLFxyXG4gICAgcGx1c3BsdXM6IHRydWUsXHJcbiAgICByZWdleHA6IHRydWVcclxuKi9cclxuLypnbG9iYWwgYXRyb3BhICovXHJcbi8vIGVuZCBoZWFkZXJcclxuXHJcbi8qKlxyXG4gKiBSZW1vdmVzIGVtcHR5IGl0ZW1zIGZyb20gYW4gYXJyYXkuIEVtcHR5IHZhbHVlcyBhcmUgJycsIHVuZGVmaW5lZCwgbnVsbCwgW10sXHJcbiAqICB7fSwgYW5kIG9iamVjdHMgd2l0aCBubyBlbnVtZXJhYmxlIHByb3BlcnRpZXMuXHJcbiAqIEBwYXJhbSB7QXJyYXl9IGFyciBUaGUgYXJyYXkgdG8gdHJpbS5cclxuICogQHJldHVybnMge0FycmF5fSBhcnIgVGhlIGFycmF5IHdpdGggZW1wdHkgdmFsdWVzIHJlbW92ZWQuXHJcbiAqL1xyXG5mdW5jdGlvbiBhcnJheVRyaW0gKGFycikge1xyXG4gICAgdmFyIG91dDtcclxuICAgIHZhciBlbXB0eSA9IHJlcXVpcmUoJ2F0cm9wYS1pcy1lbXB0eScpO1xyXG4gICAgb3V0ID0gYXJyLmZpbHRlcihmdW5jdGlvbiAoaXRlbSkge1xyXG4gICAgICAgIHJldHVybiAhZW1wdHkoaXRlbSk7XHJcbiAgICB9KTtcclxuICAgIHJldHVybiBvdXQ7XHJcbn1cclxubW9kdWxlLmV4cG9ydHMgPSBhcnJheVRyaW07Il19
