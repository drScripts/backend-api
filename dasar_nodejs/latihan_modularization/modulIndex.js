const Tiger = require("./Tiger.js");
const Wolf = require("./Wolf.js");

const fighting = (a, b) => {
  if (a.strength > b.strength) {
    a.growl();
    return;
  }

  if (b.strength > a.strength) {
    b.howl();
    return;
  }

  console.log("Tiger and Wolf have same strength");
};

const tiger = new Tiger();
const wolf = new Wolf();

fighting(tiger, wolf);
