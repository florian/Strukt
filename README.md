# Structs for JavaScript inspired by Ruby [![Build Status](https://travis-ci.org/florian/Strukt.png?branch=master)](https://travis-ci.org/florian/Strukt)

[Ruby Structs](http://www.ruby-doc.org/core-1.9.3/Struct.html) are an awesome way to add several attributes to a class. Inspired by these, *Strukt* provides a similiar minimalistic API for node and the browser. It allows you to quickly create constructor functions with less code.

## Installation

### Node

```sh
$ npm install strukt
```

```js
var Strukt = require('strukt');
```

### Browser

Grab [lib/strukt.js](https://github.com/florian/Strukt/tree/master/lib) and include it in your HTML document. If an AMD or CommonJS loader is present it will be used, otherwise `Strukt` is assigned to `window.Strukt`.

- - -

In case you are using [component](https://github.com/component/component) (you should, it's awesome!):

```sh
$ component install florian/Strukt
```

```js
var Strukt = require('strukt');
```

- - -

## Basic structs

Simple. Pass the parameters you want to `Struct`, a new constructor function will be returned.

```js
var Point = new Struct('x', 'y');
var p = new Point(42, 1337);
p.x; // 42
p.y; // 1337
```

Prefer CoffeeScript?

```coffeescript
class Point extends new Struct 'x', 'y'
  # More class logic

p = new Point 42, 1337
p.x # 42
p.y # 1337
```

## Explicit structs

> Explicit is better than implicit. [The Zen of Python](http://www.python.org/dev/peps/pep-0020/)

Explicits structs are pretty much the same thing, but you pass an object to the returned constructor.

```js
var Person = new Struct.Explicit('forename', 'surname');

var john = new Person({
	forename: 'John',
	surname: 'Doe'
});

john.forename; // 'John'
john.surname; // 'Doe'
```

## Constructor functions

Maybe you'd like to add a constructor function to your Struct. If the last argument of `Struct` or `Struct.Explicit` is a function it'll be used as a constructor function.

```js
var Person = new Struct.Explicit('forename', 'surname', function () {
	alert('Welcome ' + this.forename + " " + this.surname);
});
new Person({
	forename: 'John',
	surname: 'Doe'
}); // Will alert 'Welcome John Doe'
```

## Adding properties to the prototype

`Struct` and `Struct.Explicit` return functions, so you can just add properties to the prototype as always.

```js
var Point = new Struct("x", "y");

Point.prototype.equals = function (pt) {
	return this.x == pt.x && this.y == pt.y;
}
```

- - -

## Test suite

Visit *spec/index.html* in your browser to run the test suite.

Alternatively you can install [testacular](http://vojtajina.github.com/testacular/) and enjoy the awesomeness

```sh
$ testacular start
```

It will launch several browsers and run the tests again if a a spec or the library code changes.
