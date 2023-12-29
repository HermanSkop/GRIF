const handleExcelFile = require('../models/excelHandler');
const {join} = require("path");
/**
 * Not any request but rather request on participating in the forum.
 * @param {list} inputData - array of strings with the user's name, email, phone number and plan
 **/
async function handleRequest(inputData) {
    if (inputData.length !== 4 ) {
        throw "Invalid number of fields in the request";
    }
    for (let i = 0; i < inputData.length; i++)
        if (inputData[i] === "" || inputData[i] === undefined) throw "Empty field in the request";
    try {
        await handleExcelFile(join(__dirname, '../database/guests.xlsx'), inputData);
    }
    catch (err) {
        console.log(err);
        throw err;
    }
}
module.exports = handleRequest;