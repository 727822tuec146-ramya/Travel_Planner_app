require("dotenv").config();
const { customErrorHandler }  = require('./middlewares/errorHandlers');
const express                 = require('express');
const mongoose                = require('mongoose');
const authRoutes              = require('./routes/auth');
const config                  = require('./config');
const app                     = express();
const bodyParser              = require('body-parser');
const cors                    = require('cors');
const port                    = process.env.PORT || 3000;
const path                    = require('path');

app.use(cors());
app.use(bodyParser.json());
app.use((req, res, next) => {
  const ipAddress = req.headers['x-forwarded-for'] || req.headers['x-real-ip'] || req.connection.remoteAddress;
  req.clientIpAddress = ipAddress;
  next();
});

mongoose.connect(config.mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('MongoDB connected')).catch(err => console.log(err));

app.use('/api/v1', authRoutes);

/***************** Middleware after routing **************/
app.use(customErrorHandler);
/***************** Middleware after routing **************/

app.listen(port, () => console.log(`Server running on port ${port}`));
