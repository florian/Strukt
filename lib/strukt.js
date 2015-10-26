// Copyright (c) 2012 Florian Hartmann, https://github.com/florian/strukt
(function() {
  var Struct,
    slice = [].slice;

  Struct = function() {
    var constructor, properties;
    properties = 1 <= arguments.length ? slice.call(arguments, 0) : [];
    if (typeof properties.slice(-1)[0] === 'function') {
      constructor = properties.pop();
    }
    return function() {
      var i, j, len, property, values;
      values = 1 <= arguments.length ? slice.call(arguments, 0) : [];
      for (i = j = 0, len = properties.length; j < len; i = ++j) {
        property = properties[i];
        this[property] = values[i];
      }
      return constructor != null ? constructor.call(this) : void 0;
    };
  };

  Struct.Explicit = function() {
    var constructor, properties;
    properties = 1 <= arguments.length ? slice.call(arguments, 0) : [];
    if (typeof properties.slice(-1)[0] === 'function') {
      constructor = properties.pop();
    }
    return function(values) {
      var j, len, property;
      for (j = 0, len = properties.length; j < len; j++) {
        property = properties[j];
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
