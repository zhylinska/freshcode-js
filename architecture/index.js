class Animals {   //abstract class
    makeSound() {
    }
}
class Dog extends Animals {   //concrete class
    makeSounds() {
            console.log('wowh-wowh')
    }
}
class Cat extends Animals {   //concrete class
    makeSounds() {
        console.log('meow-meow')
    }
}
class AnimalFactory {
    createAnimal(type) {
        switch(type) {
            case 'dog':
                return new Dog();
            case 'cat':
                return new Cat();
            default: throw TypeError('error');
        }
    }
}
const  factory = new AnimalFactory();

factory.createAnimal('dog');
const dog = factory.createAnimal('dog');
dog.makeSounds();
factory.createAnimal('cat');
const cat = factory.createAnimal('cat');
cat.makeSounds();