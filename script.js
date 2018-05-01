

// let numberOfPeople = prompt("How many people are in your group?");
// if (numberOfPeople > 7) {
//   console.log("You have enough people to get a discount!");
// } else {
//   console.log("Sorry, you need more people in your group!");
// }

//------------------------------------ second exercise -----------------------------//

// let points = prompt("How many points did this person score?");
// let totalPoints = 10;
// let didTheyPass;

// if (points > 6) {
//   didTheyPass = "passing grade";
// } else {
//   didTheyPass = "not a passing grade";
// }
  
// console.log(`Their Score: ${(points / totalPoints) * 100}%. this is a ${didTheyPass}.`);

//------------------------------------- third exercise --------------------------- //

// let name1 = prompt("What is the first person's name?");
// let name2 = prompt("What is the second person's name?");
// let longestName;

// if (name1.length > name2.length) {
//   longestName = name1;
// } else if (name1.length < name2.length) {
//   longestName = name2;
// } else {
//   longestName = "Neither name";
// }
// console.log(`${longestName} is the longest name.`);

// for (let i = 0; i <= 20; i += 2) {
//   console.log(i);
// }

// let age = 10;
// while (age <= 18) {
//   if (age < 18) {
//     console.log("You are " + age + " years old.");
//   } else {
//     console.log("You are legally an adult!")
//   }
//   age++;
// }

// let x = 0;
// while (x <= 50) {
//   if (x === 0) {
//     console.log(x);  
//   } else if (x % 3 === 0 && x % 5 === 0) {
//     console.log("FizzBuzz");
//   } else if (x % 3 === 0) {
//     console.log("Fizz");
//   } else if (x % 5 === 0) {
//     console.log("Buzz");
//   } else {
//     console.log(x);
//   }
//   x++;
// }


// for (let y = 1; y <= 10; y++) {
//   for (let z = 1; z <= 10; z++) {
//     console.log(`${y} x ${z} = ${y * z}`);
//   }
// }

// for (let i = 0; i <= 100; i++) {
//   if (i < 60) {
//     console.log("F");
//   } else if (i >= 60 && i < 70) {
//     console.log("D");
//   } else if (i >= 70 && i < 80) {
//     console.log("C");
//   } else if (i >= 80 && i < 90) {
//     console.log("B");
//   } else if (i >= 90 && i < 100) {
//     console.log("A");
//   } 
// }
{
  function startGame() {
    let answer = prompt("Do you want to play?");
    return answer.toLowerCase();
  };
  
  function getInitWarrior() {
    let player = {
      name: "",
      health: 40,
      damage: "",
      wins: 0
    }
    return player;
  }
  
  function getInitGrant() {
    let enemy = {
      health: 10,
      damage: "",
      wins: 0
    }
    return enemy;
  }
  
  function getDamage() {
    return Math.ceil(Math.random() * 5);
  };

  function continueFight() {
    let answer = prompt("Do you wish to attack or run?");
    if (answer.toLowerCase() === "attack") {
      return true;
    } else if (answer.toLowerCase() === "run") {
      endTheMatch();
    }
  }
  
  function endTheMatch() {
    console.log("You ran away from the mighty Job Wizard, Grant. Pray he doesn't find and fire you.")
  }

  function startCombat(warrior, grant) {
    while (warrior.wins < 3) {
      if (!continueFight()) {
        break;
      }

      // Compute damage against Grant
      warrior.damage = getDamage();
      grant.health -= warrior.damage;
      console.log(`${warrior.name} hits Grant for ${warrior.damage}. Grant has ${grant.health} left!`);
  
      // Test to see if we have defeated Grant or have been defeated
      if (warrior.wins === 2 && grant.health <= 0) {
        console.log(`${warrior.name}, you are victorious over the evil Job Wizard Grant! Congratulations, you are employed!`);
        break;
      } else if (warrior.wins < 2 && grant.health <= 0) {
        console.log ("You have defeated Grant... but he was just an illusion of interviews!");
        grant.health = 10;
        warrior.wins++;
      }
  
      // Compute damage against us
      grant.damage = getDamage();
      warrior.health -= grant.damage;
      console.log(`Grant hits ${warrior.name} for ${grant.damage}. ${warrior.name} has ${warrior.health} left.`);
  
      // See if Grant beat us
      if (warrior.health <= 0) {
        console.log(`The evil Job Wizard Grant is victorious. Sorry, ${warrior.name}, you are unemployed.`);
        break;
      } 
    }
  };
  
  if (startGame() === "yes") {
  
    let warrior = getInitWarrior();
    warrior.name = prompt("What is your name, job warrior?");
    let grant = getInitGrant();
    startCombat(warrior, grant);
  
  } else {
    console.log("Maybe you will find a job next time.")
  }
  
}





