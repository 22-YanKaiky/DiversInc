const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

require("dotenv").config();

const app = express();
const port = process.env.PORT

app.use(cors());
app.use(express.json());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.listen(port, () => console.log(`server port ${port}`));
