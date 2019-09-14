let tacoCatInc = {
    gourmetShell: {
      'hard treat shell': {cost: 2, quantity: 100},
      'soft treat shell': {cost: 1.5, quantity: 100}
    },
  
    gourmetFishFilling: {
      'salmon': {cost: 5, quantity: 100},
      'tuna': {cost: 5.5, quantity: 100},
      'sardines': {cost: 1.5, quantity: 100}
    },
  
    gourmetVeggie: {
      'cat grass': {cost: 1, quantity: 100}
    },
  
    gourmetSeasoning: {
      'cat nip': {cost: 0.5, quantity: 100},
      'treat dust': {cost: 0.1, quantity: 100}
    },
  
    cash: 0,
    currentInventory: function(){
        let total = 0;
        let firstsetKeys = Object.keys(this).slice(0,4);
        console.log(firstsetKeys);
        for( let i =0; i< firstsetKeys.length; i++){
            let secondsetKeys = Object.keys(this[firstsetKeys[i]]);
            for(let j=0; j< secondsetKeys.length; j++){
                 let element = this[firstsetKeys[i]][secondsetKeys[j]];
                 total+= element.cost* element.quantity;
            }
        }
        
        return total; 
    },
    sale: function(order){
      let price = 0;
      
      for(let catagory in order){
          let item = order[catagory];
          price += this[catagory][item].cost;
          this[catagory][item]['quantity']--;
          
       }
      this.cash = price;
      return price;
    }
  };

  let order = {
    gourmetShell: 'hard treat shell',
    gourmetFishFilling: 'salmon'
  };


  console.log(tacoCatInc.sale(order));
  console.log(tacoCatInc.gourmetShell["hard treat shell"].quantity);
  tacoCatInc.currentInventory();