import child_process from "node:child_process";

console.log(`launcher script start (pid: ${process.pid})`);
child_process.execSync("bash script.sh", { stdio: "inherit" });
console.log(`launcher script done`);
