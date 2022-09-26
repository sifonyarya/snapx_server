const bycrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const {jwtTokens} = require('../utils/jwt-helpers');
const pool = require('../db');
const { query } = require('express');

class AuthController {
    async AuthUser(req, res, next) {
        try {
            const {user_email, user_password } = req.body;
            const users = await pool.query('SELECT * FROM users WHERE email = $1',[user_email]);
            if(users.rows.length === 0) return res.status(401).json({error: "Email не найден"});
            const validPassword = await bycrypt.compare(user_password,users.rows[0].password);
            if(!validPassword) return res.status(401).json({error: "Пароль не найден"});
            const role = await pool.query('SELECT role_id FROM users WHERE email = $1',[user_email]);
            const id = await pool.query('SELECT id FROM users WHERE email = $1', [user_email]);
            let role_id = role.rows[0];
            let id_user = id.rows[0];
            let tokens = jwtTokens(users.rows[0]);
            res.cookie('refresh_token', tokens.refreshToken);
            res.cookie('role_id', role_id.role_id);
            res.cookie('user_id', id_user.id);
             res.json(tokens);
               } catch (error) {
                 res.status(401).json({error: error.message});
               }
             }
    async AuthRegister(req, res, next) {
        try {
            const hashedPassword = await bycrypt.hash(req.body.user_password,10);
            const Role = 3;
            const Gender = 2;
            const newUser = await pool.query (
                'INSERT INTO users (email, role_id, gender_id, password) VALUES ($1, $2, $3, $4) RETURNING *',
                [req.body.user_email, Role, Gender, hashedPassword]);
             res.json({users:newUser.rows[0]});
        } catch (error) {
            res.status(500).json({error: error.message });
        }
    }

    async AuthLogout(req, res, next) {
        try {
            res.clearCookie('refresh_token');
            return res.status(200).json({message:'Refresh token deleted.'});
          } catch (error) {
            res.status(401).json({error: error.message});
          }
    }
    async AuthActivate(req, res, next) {
        try {
            
        } catch (error) {
            
        }
    }
    async AuthRefresh(req, res, next) {
        try {
            const refreshToken = req.cookies.refresh_token;
            console.log(req.cookies);
            if (refreshToken === null) return res.sendStatus(401);
            jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (error, users) => {
              if (error) return res.status(403).json({error:error.message});
              let tokens = jwtTokens(users);
              res.cookie('refresh_token', tokens.refreshToken, {...(process.env.COOKIE_DOMAIN && {domain: process.env.COOKIE_DOMAIN}) , httpOnly: true,sameSite: 'none', secure: true});
              return res.json(tokens);
            });
          } catch (error) {
            res.status(401).json({error: error.message});
          }
    }
}
module.exports = new AuthController();