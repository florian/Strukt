(function() {
  describe('Struct', function() {
    it('should be in the global scope', function() {
      return expect(window).to.have.property('Struct');
    });
    it('should be a function', function() {
      return expect(Struct).to.be.a('function');
    });
    it('should return a function', function() {
      return expect(new Struct).to.be.a('function');
    });
    return describe('instance', function() {
      it('should return an object', function() {
        return expect(new (new Struct)).to.be.an('object');
      });
      it('should set the specified properties', function() {
        var Point, p;
        Point = new Struct('x', 'y');
        p = new Point(20, 30);
        expect(p.x).to.equal(20);
        return expect(p.y).to.equal(30);
      });
      it('should call the constructor', function() {
        var Person, called;
        called = false;
        Person = new Struct(function() {
          return called = true;
        });
        new Person;
        return expect(called).to.be["true"];
      });
      return it('should be able to access struct properties', function() {
        var Person, john, msg;
        msg = '';
        Person = new Struct('forename', 'surname', function() {
          return msg = "Welcome " + this.forename + " " + this.surname;
        });
        john = new Person('John', 'Doe');
        return expect(msg).to.equal('Welcome John Doe');
      });
    });
  });

  describe('Struct.Explicit', function() {
    it('should be a function', function() {
      return expect(Struct.Explicit).to.be.a('function');
    });
    it('should return a function', function() {
      return expect(new Struct.Explicit).to.be.a('function');
    });
    return describe('instance', function() {
      it('should return an object', function() {
        return expect(new (new Struct.Explicit)).to.be.an('object');
      });
      it('should set the specified properties', function() {
        var Point, p;
        Point = new Struct.Explicit('x', 'y');
        p = new Point({
          x: 2,
          y: 40
        });
        expect(p.x).to.equal(2);
        return expect(p.y).to.equal(40);
      });
      it('should call the constructor', function() {
        var Person, called;
        called = false;
        Person = new Struct.Explicit(function() {
          return called = true;
        });
        new Person;
        return expect(called).to.be["true"];
      });
      return it('should be able to access struct properties', function() {
        var Person, john, msg;
        msg = '';
        Person = new Struct.Explicit('forename', 'surname', function() {
          return msg = "Welcome " + this.forename + " " + this.surname;
        });
        john = new Person({
          forename: 'John',
          surname: 'Doe'
        });
        return expect(msg).to.equal('Welcome John Doe');
      });
    });
  });

}).call(this);
