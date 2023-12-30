const writeToExcelFile = require('../models/excelHandler').writeToExcelFile;
const {join} = require("path");

/**
 * Not any request but rather request on participating in the forum.
 * @param {list} inputData - array of strings with the user's name, email, phone number and plan
 **/
async function handleRequest(inputData) {
    try {
        if (inputData.length !== 5) {
            throw 'Invalid number of fields in the request';
        }

        if (!isValidName(inputData[0])) throw 'Invalid name';
        if (!isValidEmail(inputData[1])) throw 'Invalid email';
        if (!isValidPhone(inputData[2])) throw 'Invalid phone number';
        if (!isValidPlan(inputData[3])) throw 'Invalid plan';
        if (!isValidPromo(inputData[4])) throw 'Invalid promo code';
        await writeToExcelFile(join(__dirname, '../database/guests.xlsx'), inputData);
    } catch (err) {
        console.log(err);
        throw err;
    }
}

function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function isValidPhone(phone) {
    return /^\d{8,10}$/.test(phone);
}

function isValidName(name) {
    return /^[a-zA-Z ]+$/.test(name);
}

function isValidPlan(plan) {
    // TODO: validate plan according to the plans in the database, once database is ready
    return /^[a-zA-Z]{6}$/.test(plan);
}
function isValidPromo(promo) {
    return /^[a-zA-Z\d]{6}$/.test(promo) || promo === '' || promo === undefined;
}

module.exports = handleRequest;