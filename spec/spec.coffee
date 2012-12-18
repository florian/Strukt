describe 'Struct', ->
	it 'should be in the global scope', ->
		expect(window).to.have.property('Struct')

	it 'should be a function', ->
		expect(Struct).to.be.a('function')

	it 'should return a function', ->
		expect(new Struct).to.be.a('function')

	describe 'instance', ->
		it 'should return an object', ->
			expect(new (new Struct)).to.be.an('object')

		it 'should set the specified properties', ->
			Point = new Struct 'x', 'y'
			p = new Point(20, 30)
			expect(p.x).to.equal(20)
			expect(p.y).to.equal(30)

		it 'should call the constructor', ->
			called = false
			Person = new Struct ->
				called = true

			new Person
			expect(called).to.be.true

		it 'should be able to access struct properties', ->
			msg = ''
			Person = new Struct 'forename', 'surname', ->
				msg = "Welcome #{@forename} #{@surname}"

			john = new Person 'John', 'Doe'
			expect(msg).to.equal('Welcome John Doe')