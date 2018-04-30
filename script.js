

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


let answer = prompt("Do you want to play?");

if (answer === "yes") {
  const WARRIOR_NAME = prompt("What is your name, Warrior?");
  let yourHealth = 40;
  let grantHealth = 10;
  let yourWins = 0;
  let yourDamage = 0;
  let grantDamage = 0;


  function damage() {
    return Math.ceil(Math.random() * 2);
  }

  while (yourWins < 3) {

    // Compute damage against Grant
    yourDamage = damage();
    grantHealth -= yourDamage;
    console.log(`${WARRIOR_NAME} hits Grant for ${yourDamage}. Grant has ${grantHealth} left!`);

    // Test to see if we have defeated Grant or have been defeated
    if (yourWins === 2 && grantHealth <= 0) {
      console.log(`${WARRIOR_NAME}, you are victorious over the evil wizard Grant! Congratulations!`);
      break;
    } else if (yourWins < 2 && grantHealth <= 0) {
      console.log ("You have defeated Grant... but it was just an illusion!");
      grantHealth = 10;
      yourWins++;
    }

    // Compute damage against us
    grantDamage = damage();
    yourHealth -= grantDamage;
    console.log(`Grant hits you for ${grantDamage}. You have ${yourHealth} left.`);

    // See if Grant beat us
    if (yourHealth <= 0) {
      console.log(`The evil wizard Grant is victorious. Sorry, ${WARRIOR_NAME}.`);
      break;
    } 
  }

} else {
  console.log("Maybe you will fight next time.")
}




