const express = require('express');
const app = express();
app.use('*', (req,res) => {
  res.send(`env ${process.env.HOST}`);
})
app.listen(3000);