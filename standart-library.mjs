
import readline from "readline";
// import seblak from "os";

cost input = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

input.question(`What's your name?`, name => {
    console.log(`Hi ${name}!`);
    input.close();
})