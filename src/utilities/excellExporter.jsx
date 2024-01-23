import { Workbook } from 'exceljs'
import arrayConverter from './arrayConverter';
const columns = ['Name', 'Age', 'Gender', 'City', 'Country', 'Occupation'];

const generateDummyData = () => {
    const data = [];

    for (let i = 1; i <= 30; i++) {
        const row = {};
        columns.forEach((column) => {
            row[column] = `${column} ${i}`;
        });
        data.push(row);
    }

    return data;
};

const excellExporter = () => {
    const dummyData = arrayConverter(generateDummyData())

    const _workBook = new Workbook()
    const sheet = _workBook.addWorksheet('sheet ex')

    sheet.getCell('A1').value = 'Teks di A1';
    sheet.mergeCells('A1:F1')
    sheet.getCell('A1').alignment = { horizontal: 'center', vertical: 'middle' }
    sheet.getCell('A1').font = { size: 18, name: 'times', bold: true }

    sheet.getCell('A2').value = 'Teks di A2';
    sheet.mergeCells('A2:F2')
    sheet.getCell('A2').alignment = { horizontal: 'center', vertical: 'middle' }
    sheet.getCell('A2').font = { size: 14, name: 'times', bold: true }

    sheet.getCell('A3').value = 'Teks di A3L';
    sheet.mergeCells('A3:B3')
    sheet.getCell('A3').alignment = { horizontal: 'left', vertical: 'middle' }
    sheet.getCell('A3').font = { size: 12, name: 'times' }

    sheet.getCell('C3').value = ': Teks di C3R';
    sheet.mergeCells('C3:F3')
    sheet.getCell('C3').alignment = { horizontal: 'left', vertical: 'middle' }
    sheet.getCell('C3').font = { size: 12, name: 'times' }

    sheet.getCell('A4').value = 'Teks di A4L';
    sheet.mergeCells('A4:B4')
    sheet.getCell('A4').alignment = { horizontal: 'left', vertical: 'middle' }
    sheet.getCell('A4').font = { size: 12, name: 'times' }

    sheet.getCell('C4').value = ': Teks di C3R';
    sheet.mergeCells('C4:F4')
    sheet.getCell('C4').alignment = { horizontal: 'left', vertical: 'middle' }
    sheet.getCell('C4').font = { size: 12, name: 'times' }

    sheet.getColumn(1).width = 15
    sheet.getColumn(2).width = 15
    sheet.getColumn(3).width = 15
    sheet.getColumn(4).width = 15
    sheet.getColumn(5).width = 15
    sheet.getColumn(6).width = 15


    const headers = ['Name', 'Age', 'Gender', 'City', 'Country', 'Occupation'];
    headers.forEach((header, index) => {
        const cell = sheet.getCell(6, index + 1);
        cell.value = header;

        cell.font = { bold: true, size: 12, name: 'times' };

        cell.border = {
            top: { style: 'thin' },
            left: { style: 'thin' },
            bottom: { style: 'thin' },
            right: { style: 'thin' },
        };
    });

    dummyData.forEach((row, rowIndex) => {
        row.forEach((value, columnIndex) => {
            const cell = sheet.getCell(rowIndex + 7, columnIndex + 1);

            cell.font = { bold: false, size: 12, name: 'times' };

            cell.border = {
                top: { style: 'thin' },
                left: { style: 'thin' },
                bottom: { style: 'thin' },
                right: { style: 'thin' },
            };

            cell.value = value;
        });
    });


    _workBook.xlsx.writeBuffer().then(data => {
        const blob = new Blob([data], {
            type: "application/vnd.opexmlformats-officedocument.spreadsheet.sheet"
        })
        const url = window.URL.createObjectURL(blob)
        const anchor = document.createElement('a')
        anchor.href = url
        anchor.download = 'download.xlsx'
        anchor.click()
        window.URL.revokeObjectURL(url);
    })

}

export default excellExporter