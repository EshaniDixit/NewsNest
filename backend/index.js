const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const config = require('./config/appconfig');

const app = express();
const port = process.env.DEV_APP_PORT

app.set('config', config);
app.use(bodyParser.json());

app.use(cors());

app.use(require('./routes'));

app.get('/', (req, res) => {
    res.send('Welcome to my server!');
})

app.listen(port, () => { 
    console.log(`Server is running on port ${port}`);
})
