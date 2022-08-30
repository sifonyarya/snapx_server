require("dotenv").config();
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');

const app = express();
const corsOption = {
    origin:'http://localhost:3000', 
    credentials:true, 
}
app.use(cors(corsOption));
const PORT = process.env.PORT || 5005
app.get('/', (req, res) => {
    res.send({ message: 'Hello WWW!' });
});

app.use(express.json())
app.use(cookieParser());

app.listen(PORT, () => console.log(`Сервер запущен на порту ${PORT}`))