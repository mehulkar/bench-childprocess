import child_process from "node:child_process";

child_process.execSync("bash script.sh", { stdio: "inherit" });
