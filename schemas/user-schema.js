const userCollection = require('../database/db').userCollection;
const isPromo = require('../schemas/promo-schema').isPromo;

async function getUsersByMail(email) {
    return await userCollection.find({email: email}).toArray();
}
async function getUser(username) {
    const user = await userCollection.findOne({username: username});
    return user?user:undefined;
}
async function insertUser(username, password, role) {
    return await userCollection.insertOne({
        username: username,
        password: password,
        role: role
    });
}
async function isCorrectUser(username, password, role){
    const user = await userCollection.findOne({username: username});
    return user && user.password === password && user.role === role;
}
module.exports = {
    getUser,
    insertUser: insertUser,
    isCorrectUser
}
