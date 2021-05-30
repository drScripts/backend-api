const { EventEmitter } = require("events");
const myEmmiter = new EventEmitter();

const makeCofee = ({ name }) => {
  console.log(`Kopi ${name} telah dibuat!`);
};

myEmmiter.on("cofee-order", makeCofee);

myEmmiter.emit("cofee-order", { name: "Luwak" });
