const express = require('express');
const app = express();

// Track whether the service has fully initialized
let isReady = false;

app.get('/health', (req, res) => {
  if (isReady) {
    res.status(200).send('OK');
  } else {
    res.status(503).send('Service is initializing');
  }
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Health check server running on port ${PORT}`);
});

// Export a function to set readiness
module.exports = {
  setReady: () => {
    isReady = true;
    console.log('✅ Service is now healthy');
  },
};
