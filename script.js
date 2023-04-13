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
		console.log("The " + this.species + " makes a sound.")
	}
}
class Cat extends Animal{
	purr(){
		console.log("The Siamese makes a sound");
	}
}
class Dog extends Animal{
	bark(){
		console.log("The Golden Retriever makes a sound");
	}
}

// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;
