(function() {
  var Struct;

  Struct = function() {};

  if (typeof define === 'function' && define.amd) {
    define(function() {
      return Struct;
    });
  } else if (typeof exports !== 'undefined') {
    module.exports = Struct;
  } else {
    window.Struct = Struct;
  }

}).call(this);
