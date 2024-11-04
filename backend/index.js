const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(cors());

app.use(bodyParser.json());

//get all keys
app.get(
    '/api',
    (req, res) => {
        const ret_val = {
            "value": "Chetan J"
        }
        res.status(200).json({"ret": ret_val}); 
    }
);

app.listen(
    7000,
    () => {
        console.log('Listening on port 7000');
    }
);