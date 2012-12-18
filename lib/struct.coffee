Struct = ->

# CommonJS, AMD, casual
if typeof define is 'function' and define.amd
	define -> Struct
else if typeof exports != 'undefined'
	module.exports = Struct
else
	window.Struct = Struct