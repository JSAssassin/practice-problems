let me2 = {
    name : "Watson",
    getGreeting : function(you) {
      if ("name" in you) {
        return "Hi " + you.name + ',' +' my name is ' + this.name + '.';
      }
    }
  }