let animals = {
    dog: {
        name: "Mowu"
    },

    cat: {
        name: "Ori"
    },

    hamster: {
        name: "hamster"
    }
}

console.log(animals.dog.name);

let variable = 'dog'
console.log(animals.variable.name);
console.log(animals[variable].name);