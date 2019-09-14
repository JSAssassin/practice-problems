function lastFridayNight(anArray) {
    let sum = 0;
    for (let i = 0; i < anArray.length; i++) {
        sum += anArray[i].amount;
    }
    return sum;
}

//Other Solution

function lastFridayNight2(anArray) {
    let totalAmount = 0;
    for (let i = 0; i < anArray.length; i++) {
        totalAmount += anArray[i]['amount'];
    }

    return totalAmount;
}

let transactions = [
    {
        name: "Tons of glitter",
        amount: 70
    },
    {
        name: "Porcelain Pink Flamingos",
        amount: 92
    },
    {
        name: "Chandelier replacement",
        amount: 10000,
    },
    {
        name: "Dinner at TGIF x6",
        amount: 350
    }
];
console.log(lastFridayNight(transactions));