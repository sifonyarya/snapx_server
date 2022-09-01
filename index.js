require("dotenv").config();
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const settingsRouter = require('./routes/settings.routes');
const authRouter = require('./routes/auth.routes');
const roleRouter = require('./routes/role.routes');
const genderRouter = require('./routes/gender.routes');

const app = express();
const corsOption = {
    origin:'https://snapx-sifonyarya.vercel.app/', 
    credentials:true, 
}
app.use(cors(corsOption));
const PORT = process.env.PORT || 5005

app.use(express.json())
app.use(cookieParser());
app.use('/api', roleRouter)
app.use('/api', genderRouter)
app.use('/api', settingsRouter)
app.use('/api/auth', authRouter)

app.listen(PORT, () => console.log(`Сервер запущен на порту ${PORT}`))