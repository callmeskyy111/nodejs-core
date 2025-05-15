import os from "os";
//console.log(os)

console.log("CPU Arch:", os.arch()); //CPU Arch: x64
console.log("Logical CPU: ", os.cpus()); //long..info..
console.log("Total MEM. (RAM): ", os.totalmem() / (1024 * 1024 * 1204), "GB"); //6.588620613579734 GB
