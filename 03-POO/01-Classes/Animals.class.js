class Animal{

    #_classification = 'mamifero'

    constructor(name, age){
        this._name = name
        this._age = age
    }

    eat(){
        return `${this._name} is eating \n`
    }

    sleep(){
        return `${this._name} is sleeping \n`
    }

    rave(){
        return `${this._name} is raving!! \n`
    }

    repeat(){
        return `${this._name} is reapeating at age of ${this._age} years old \n`
    }   

    get live(){
        return `${
            this.eat() +
            this.sleep() + 
            this.rave() + 
            this.repeat()
        }`
    }

    get getClassification(){
        return `${this._name} is a classified as '${this.#_classification}'`
    }
}

class Cat extends Animal {

    #_specie = 'Felis silvestris catus'

    constructor(name, age, mustacheColor){
        super(name, age)
        this._mustacheColor = mustacheColor
    }

    showMustache(){
        return `The cat ${this._name.toUpperCase()} has a ${this._mustacheColor} mustache`
    }

    get getSpecie(){
        return `The Cat called ${this._name} is a '${this.#_specie}'`
    }

}

const myCat = new Cat('Pelusa', 5, 'ligth silver')
console.log(`The Cat is called ${myCat._name}`)
console.log(myCat.eat())
console.log(myCat.showMustache())
console.log(myCat.getClassification)
console.log(myCat.getSpecie)

console.log('\n--------------------\n')

const myAnimal = new Animal('Adame', 55)
console.log(`The animal is called ${myAnimal._name}`)
console.log(myAnimal.getClassification)
console.log(myAnimal.live)