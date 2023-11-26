
async function test (){
    const myModule = await import("./module.mjs")
    console.log(myModule.default.next());
}

test();
