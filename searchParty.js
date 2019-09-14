function searchParty(name, obj) {
        let result = [];
        for (let keys in obj) {
                let value = obj[keys]
                if (typeof value === "object") {
                        result.push(searchParty(name, value))
                }
                else if (Array.isArray(value)) {
                        for (let i = 0; i < value.length; i++) {
                                let element = value[i];
                                result.push(searchParty(name, element))
                        }
                }
                if (name === value) {
                        result.push(keys)
                }

        }
        return result;

}
let world = {
        'Fullstack': {
          '11th floor': 'Marge',
          '25th floor': 'Francis'
        },
        'Subway': ['Jackie', 'Grumio']
      };
      
      searchParty('Francis', world); // => ['Fullstack', '25th floor']
      searchParty('Franco', world); // => null