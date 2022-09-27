const express = require('express');
const cors = require('cors');
const path = require('path');

const pkgJSON = require('./package.json');
console.log(`APP: ${pkgJSON.name} v${pkgJSON.version}`);

const app = express();

// Init middleware
app.use(express.json({ extended: false }));
app.use(cors());

// http redirect
app.use((req, res, next) => {
  if (process.env.NODE_ENV === 'production') {
    if (req.headers['x-forwarded-proto'] !== 'https') {
      return res.redirect('https://' + req.headers.host + req.url);
    } else {
      return next();
    }
  } else {
    return next();
  }
});

// Define Routes
// app.use('/api/payments', require('./routes/api/payments'));

// Serve static assets in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static(path.join(__dirname, 'client/build')));
  // All routes to build file
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

// Set port for heroku or local
const PORT = process.env.PORT || 5000;

// Start server
app.listen(PORT, (error) => {
  if (error) throw error;
  console.log(`SERVER: Listening on port ${PORT}`);
});
