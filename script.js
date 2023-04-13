//complete this code
//class Animal {}

//class Dog extends Animal {}

//class Cat extends Animal {}
class Animal{
	constructor(species){
		this.species = species ;
	}
	get species(){
		return this.species;
	}
	makeSound(){
		console.log("The "+this.species+" make sound.")
	}
}
class Cat extends Animal{
	purr(){
		console.log("purr");
	}
}
class Dog extends Animal{
	bark(){
		console.log("woof");
	}
}

// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;
