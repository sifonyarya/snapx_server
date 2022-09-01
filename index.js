require("dotenv").config();
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const settingsRouter = require('./routes/settings.routes');
const authRouter = require('./routes/auth.routes');

const app = express();
const corsOption = {
    origin:'', 
    credentials:true, 
}
app.use(cors(corsOption));
const PORT = process.env.PORT || 5005

app.use(express.json())
app.use(cookieParser());
app.use('/api', settingsRouter)
app.use('/api/auth', authRouter)

app.listen(PORT, () => console.log(`Сервер запущен на порту ${PORT}`))