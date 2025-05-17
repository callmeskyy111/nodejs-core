import EventEmitter from "node:events";

const evtEmitter = new EventEmitter();

evtEmitter.on("start", (num1,num2) => {
  console.log(`This is event-interactivity ✅. arg1- ${num1}, arg2- ${num2}`);
});
evtEmitter.emit("start",6,10);
