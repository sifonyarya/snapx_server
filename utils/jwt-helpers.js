const jwt = require('jsonwebtoken');

function jwtTokens({id, name, email, role_id}) {
    const users = {id, name, email};
    const accessToken = jwt.sign(users, process.env.ACCESS_TOKEN_SECRET,{expiresIn: '20m'});
    const refreshToken = jwt.sign(users, process.env.REFRESH_TOKEN_SECRET,{expiresIn: '50m'});
    const role = role_id
    const user_id = id
    return ({accessToken,refreshToken, role, user_id});
}

module.exports = {jwtTokens};