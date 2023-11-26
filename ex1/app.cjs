const fs = require('fs/promises');

async function test() {

    const data = await fs.readFile("./data.json", "utf-8");

    console.log(data);
}

test()