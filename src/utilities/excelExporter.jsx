import XLSX from 'xlsx'
import arrayConverter from './arrayConverter';

const generateDummyData = () => {
    const data = [];
    const columns = ['Name', 'Age', 'Gender', 'City', 'Country', 'Occupation'];

    for (let i = 1; i <= 30; i++) {
        const row = {};
        columns.forEach((column) => {
            row[column] = `${column} ${i}`;
        });
        data.push(row);
    }

    return data;
};
const excelExporter = () => {
    const dummyData = generateDummyData()

    const workSheet = XLSX.utils.aoa_to_sheet([
        ['Laporan Kehadiran Asisten'],
        ['Lab ICT Terpadu Universitas Budi Luhur'],
        [''],
        ['Periode', '', 'BBB'],
        ['Jumlah Hari', '', 'CCCCC'],
        ['']
    ])
    const workBook = XLSX.utils.book_new();

    workSheet['!merges'] = [
        { s: { r: 0, c: 0 }, e: { r: 0, c: 6 - 1 } },
        { s: { r: 1, c: 0 }, e: { r: 1, c: 6 - 1 } },
        { s: { r: 3, c: 0 }, e: { r: 3, c: 2 - 1 } },
        { s: { r: 3, c: 2 }, e: { r: 3, c: 6 - 1 } },
        { s: { r: 4, c: 0 }, e: { r: 4, c: 2 - 1 } },
        { s: { r: 4, c: 2 }, e: { r: 4, c: 6 - 1 } }
    ];
    XLSX.utils.sheet_add_aoa(workSheet, [['Name', 'Age', 'Gender', 'City', 'Country', 'Occupation'], ...arrayConverter(dummyData)], { origin: -1 })
    XLSX.utils.book_append_sheet(workBook, workSheet, 'Sheet-Test')

    XLSX.writeFile(workBook, 'example.xlsx')
}

export default excelExporter