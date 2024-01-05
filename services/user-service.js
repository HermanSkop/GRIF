const { getUser, insertUser } = require('../schemas/user-schema');
async function login(username, password){
    const user = await getUser(username);
    if (!user || user.password !== password) throw new Error('invalid_password_or_username');
    return user;
}
async function register(username, password){
    if(!username || !password) throw new Error('invalid_password_or_username');
    if(!isValidPassword(password)) throw {title: 'invalid_password', message: 'invalid_password_text'};
    if(!isValidUsername(username)) throw {title: 'invalid_username', message: 'invalid_username_text'};
    if(await getUser(username)) throw new Error('user_already_exists');
    return await insertUser(username, password, 'customer');
}

function isValidPassword(password){
    // TODO: add length equal to 8-10 after testing
    return password.length >= 1 && password.length <= 20 ;
}
function isValidUsername(username){
    return username.length >= 3 && username.length <= 20 && /^[a-zA-Z0-9_]+$/.test(username);
}

module.exports = {
    login,
    register
}