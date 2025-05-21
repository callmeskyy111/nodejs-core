#!/usr/bin/env node

//⬆️ shebang line - Tells the system to use nodejs to run this script

//Get command-line args
// const args = process.argv.slice(2);
// console.log("Arguments: ", args);

// if (args.length === 0) {
//   console.log("🔴 Use proper command: cli-tool <arg-name>");
// } else {
//   console.log(`Hello, ${args[0]}!.. Welcome to the CLI-TOOL ✅`);
// }

//! 💡 Interactive CLI-Tool
import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// ask something..
rl.question("What's your fav. color??..\n", (color) => {
  console.log(`${color} is a beautiful color! 🎨`);
  rl.close();
});
