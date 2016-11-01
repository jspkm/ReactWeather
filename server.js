const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(function (req, res, next) {
  if (req.headers['x-forwarded-proto'] === 'https') {
    res.redirect('http://' + req.hostname + req.urk);
  } else {
    next();
  }
});
app.use(express.static('public'));

app.listen(PORT, () => console.log('server up on port ' + PORT));
