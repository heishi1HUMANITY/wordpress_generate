const express = require('express');
const app = express();
const { exec } = require('child_process')

app.post('/build', (req, res) => {
  console.log('build start');
  res.end();
  exec('npm run generate', (err, stdout, stderr) => {
    if (err) {
      console.log(`stderr: ${stderr}`);
      return;
    }
    console.log(`stdout: ${stdout}`);
  });
});

app.listen(80, () => console.log('server is working at :80'));