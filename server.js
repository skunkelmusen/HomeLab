const { Console } = require("console");
const { exec } = require("child_process");
const express = require("express");
const app = express();

app.get('/', (req, res) => {
exec("ls", (error, stdout, stderr) => {
    if (error) {
        //console.log(`error: ${error.message}`);
        return;
    }
    if (stderr) {
        //console.log(`stderr: ${stderr}`);
        return;
    }
    res.send(`${stdout}`)
    //console.log(`stdout: ${stdout}`);
});
})
app.listen(3000, function() {
  console.log("Running. Port 3000.");
});

console.log('Node server running. Port 3000');
