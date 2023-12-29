const excel = require('exceljs');
const fs = require('fs');

async function updateExcelFile(filePath, newData) {
    const workbook = new excel.Workbook();
    await workbook.xlsx.readFile(filePath);

    // Assuming the first sheet is the one you want to update
    const worksheet = workbook.getWorksheet(1);

    // Append the new data to the worksheet
    worksheet.addRow(newData);

    // Save the changes back to the file
    await workbook.xlsx.writeFile(filePath);
}

async function createExcelFile(filePath, initialData) {
    const workbook = new excel.Workbook();
    const worksheet = workbook.addWorksheet('guests');

    // Add headers
    worksheet.addRow(['name', 'email', 'phone', 'plan']); // Replace with your actual column names

    // Add the initial data
    worksheet.addRow(initialData);

    // Save the workbook to the file
    await workbook.xlsx.writeFile(filePath);
}

async function handleExcelFile(filePath, newData) {
    try{
        if(fs.existsSync(filePath)) {
            await updateExcelFile(filePath, newData);
        }
        else {
            await createExcelFile(filePath, newData);
        }
    }
    catch (err) {
        throw "Error while handling the excel file: " + err;
    }
}

module.exports = handleExcelFile;