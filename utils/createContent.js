const fs = require('fs')
const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

rl.question("title: ", title => {
  fs.writeFile(`../contents/${title.toLowerCase().split(" ").join("-")}.md`, `---\ntitle: "${title}"\ndate: "${new Date()}"\n---`, function (err) {
    if (err) {
      return console.log(err);
    }
    console.log('File is created successfully.');
    rl.close();
  });
  // console.log(`${title.toLowerCase().split(" ").join("-")}.md`)
})

rl.on("close", function () {
  console.log("\nBYE BYE !!!");
  process.exit(0);
});