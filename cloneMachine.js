function cloneMachine (obj) {
    let clone = Object.create(obj);
    clone.name = obj.name + 'Clone';
    clone.species = obj.species;
    clone.offspring = [];
    obj.offspring.push(clone.name);
    
    return clone;
  }