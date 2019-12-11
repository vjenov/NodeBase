function Initializer(){
	this.animal = function(){
		Animal.prototype.setName = function(name){_name = name}
		Animal.prototype.getName = function(){return _name}
	}
	this.human = function(){
		Human.prototype = new Animal()//-->전역으로 먹게 함
		Human.prototype.test = function(){return _name}
	}
	this.superhero = function(){
		SuperHero.prototype = new Human()
		SuperHero.prototype.test = function(){return _name}
	}
}