import fs from "fs/promises";

console.log(fs);

const data = await fs.readFile("./data.json", "utf-8");

console.log(data);