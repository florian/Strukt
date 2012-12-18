(function() {
  var Struct,
    __slice = [].slice;

  Struct = function() {
    var constructor, properties;
    properties = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
    if (typeof properties.slice(-1)[0] === 'function') {
      constructor = properties.pop();
    }
    return function() {
      var i, property, values, _i, _len;
      values = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
      for (i = _i = 0, _len = properties.length; _i < _len; i = ++_i) {
        property = properties[i];
        this[property] = values[i];
      }
      return constructor != null ? constructor.call(this) : void 0;
    };
  };

  Struct.Explicit = function() {
    var constructor, properties;
    properties = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
    if (typeof properties.slice(-1)[0] === 'function') {
      constructor = properties.pop();
    }
    return function(values) {
      var property, _i, _len;
      for (_i = 0, _len = properties.length; _i < _len; _i++) {
        property = properties[_i];
        this[property] = values[property];
      }
      return constructor != null ? constructor.call(this) : void 0;
    };
  };

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
