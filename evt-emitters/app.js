import EventEmitter from "node:events";

function createServer() {
  const evtEmitter = new EventEmitter();

  //connect user
  function connect(user) {
    console.log(`${user} connected ✅`);
    evtEmitter.emit("userConnected", user);
  }

  //disconnect user
  function disconnect(user) {
    console.log(`${user} disconnected ☑️`);
    evtEmitter.emit("userDisConnected", user);
  }
  return {
    connect,
    disconnect,
    on: evtEmitter.on.bind(evtEmitter),
    emit: evtEmitter.emit.bind(evtEmitter),
  };
}

//Create a chat-server
const chatServer = createServer();

chatServer.on("userConnected", (user) => {
  console.log(`Welcome, ${user} :)`);
});

chatServer.on("userDisConnected", (user) => {
  console.log(`Goodbye, ${user} :(`);
});

chatServer.connect("Skyy");
chatServer.disconnect("Skyy");
