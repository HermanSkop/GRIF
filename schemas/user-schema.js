const userCollection = require('../database/db').userCollection;
const isPromo = require('../schemas/promo-schema').isPromo;

async function getUsersByMail(email) {
    return await userCollection.find({email: email}).toArray();
}
async function getUser(id) {
    const user = await userCollection.findOne({_id: id});
    return user?user:undefined;
}
async function getUserByUsername(username) {
    const user = await userCollection.findOne({username: username});
    return user?user:undefined;
}
async function insertUser(username, password, role) {
    await userCollection.insertOne({
        username: username,
        password: password,
        role: role
    });
    return await getUserByUsername(username);
}
async function isCorrectUser(username, password, role){
    const user = await userCollection.findOne({
        username: username,
        password: password,
        role: role
    });
    return !!user;
}
module.exports = {
    getUser,
    insertUser,
    getUserByUsername,
    isCorrectUser
}
