const xlsx = require('xlsx');
const path = require('path');


function parseExcel(filePath){ //return file 
        // const workbook = xlsx.readFile(path.resolve('../../uploads/examples.xlsx'));
        const workbook = xlsx.readFile(filePath);
        let worksheets={}
        //workbook
        worksheets[workbook.SheetNames]=xlsx.utils.sheet_to_json(workbook.Sheets[workbook.SheetNames]);

        const emails=[]; //firct to the database
        worksheets.Sheet1.forEach(element => { //ONLY FOR EMAILS
                  emails.push(element.emails)
        });
        return emails;
}

module.exports = parseExcel //exports sheetss