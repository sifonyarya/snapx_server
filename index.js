require("dotenv").config();
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const roleRouter = require('./models/role.routes');
const genderRouter = require('./models/gender.routes');
const authRouter = require('./models/auth.routes');
const userRouter = require('./models/user.routes');
const settingsRouter = require('./models/settings.routes');
const questionsRouter = require('./models/questions.routes');
const categoryRouter = require('./models/category.routes.js');
const postRouter = require('./models/post.routes.js');
const supportRouter = require('./models/support.routes.js');

const app = express();
const corsOption = {
    origin:'http://localhost:3000', 
    credentials:true, 
}
app.use(cors(corsOption));
const PORT = process.env.PORT || 5005


app.use(express.json())
app.use(cookieParser());
app.use('/api', alert('dexdex'))

app.listen(PORT, () => console.log(`Сервер запущен на порту ${PORT}`))