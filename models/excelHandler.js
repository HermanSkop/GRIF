const excel = require('exceljs');
const fs = require('fs');

async function updateExcelFile(filePath, newData) {
    const workbook = new excel.Workbook();
    await workbook.xlsx.readFile(filePath);
    const worksheet = workbook.getWorksheet(1);

    worksheet.addRow(newData);

    await workbook.xlsx.writeFile(filePath);
}

async function createGuestsFile(filePath, initialData) {
    const workbook = new excel.Workbook();
    const worksheet = workbook.addWorksheet('main');

    worksheet.addRow(initialData);

    await workbook.xlsx.writeFile(filePath);
}

/**
 * Reads the Excel file and returns the data in an array of objects
 * @param filePath - path to the Excel file
 * @returns {Promise<[]|*[]>} - {promoCode: discount}
 */
async function readPromoFromExcelFile(filePath) {
    try {
        if (!fs.existsSync(filePath)) return []

        const workbook = new excel.Workbook();
        await workbook.xlsx.readFile(filePath);
        const worksheet = workbook.getWorksheet(1);
        const rows = {};

        worksheet.eachRow((row, rowNumber) => {
            rows[row.getCell(1).value] = row.getCell(2).value;
        });
        return rows;
    }
    catch (err) {
        console.log(err);
    }
}

async function writeToExcelFile(filePath, newData) {
    try{
        if(fs.existsSync(filePath)) await updateExcelFile(filePath, newData);
        else await createGuestsFile(filePath, newData);
    }
    catch (err) {
        throw "Error while writing to the excel file: " + err;
    }
}

module.exports.writeToExcelFile = writeToExcelFile;
module.exports.readPromoFromExcelFile = readPromoFromExcelFile;