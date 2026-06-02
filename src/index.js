const express = require('express');
const {serverConfig, loggingConfig } = require('./config');
const app = express();
const apiRoutes = require('./routes');

app.use('/api', apiRoutes);

app.listen(serverConfig.PORT, () => {
  console.log(`Server is running on port ${serverConfig.PORT}`);
});