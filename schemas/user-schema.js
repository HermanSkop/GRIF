const usersCollection = require('../database/db').usersCollection;
const isPromo = require('../schemas/promo-schema').isPromo;

async function getUsersByMail(email) {
    return await usersCollection.find({email: email}).toArray();
}
async function writeUser(user) {
    if (!user.promo || await isPromo(user.promo)) return await usersCollection.insertOne(user);
    else throw new Error('Promo code is not valid, user not created');
}

module.exports = {
    getUsersByMail,
    writeUser
}
