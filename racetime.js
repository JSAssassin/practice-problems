let raceNumber = Math.floor(Math.random() * 1000);
let runnerRegisteredEarly = true;
const runnerAge = 21;
if (runnerAge > 18 && runnerRegisteredEarly) {
  raceNumber += 1000;
}
if (runnerAge > 18 && runnerRegisteredEarly ) {
    console.log(`Your race number is  ${raceNumber}. Race will begin at 9:30 am`);
}
else if (runnerAge > 18 && !runnerRegisteredEarly) {
    console.log(`Your race number is ${raceNumber}. Your race will begin at 11:00 am`);
}
else if (runnerAge < 18) {
    console.log(`Your race number is ${raceNumber}. Your race will begin at 12:30 pm`);
}
else {
  console.log("Go see the registration desk");
}
