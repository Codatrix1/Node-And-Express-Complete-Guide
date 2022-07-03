// If want custom extend from class
// otherwise just for emitting and handling events create instance
const EventEmitter = require("events");

const customEmitter = new EventEmitter();

// on and emit emthods
// keep track of the order
// additional arguments
// built in modules utilize it

// ON: Subscribe to the event
customEmitter.on("incomingData", (name, id) => {
  console.log(`Data Received from User: ${name} with ID: ${id}`);
});

customEmitter.on("incomingData", () => {
  console.log(`Some other logic here`);
});

// EMIT
customEmitter.emit("incomingData", "John", "88");
