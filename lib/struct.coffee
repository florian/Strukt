Struct = (properties...) ->
	constructor = properties.pop() if typeof properties[-1..][0] is 'function'
	(values...) ->
		@[property] = values[i] for property, i in properties
		constructor?.call(@)

Struct.Explicit = (properties...) ->
	constructor = properties.pop() if typeof properties[-1..][0] is 'function'
	(values) ->
		@[property] = values[property] for property in properties
		constructor?.call(@)

# CommonJS, AMD, casual
if typeof define is 'function' and define.amd
	define -> Struct
else if typeof exports != 'undefined'
	module.exports = Struct
else
	window.Struct = Struct