import jsPDF from "jspdf"
import autoTable from "jspdf-autotable";
import arrayConverter from "./arrayConverter";

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

const doc = new jsPDF({
    format: 'A4',
    orientation: 'portrait'
})

// const pageHeight = doc.internal.pageSize.height || doc.internal.pageSize.getHeight();
const pageWidth = doc.internal.pageSize.width || doc.internal.pageSize.getWidth();
const startY = 20
let currentY = startY


const dummyData = generateDummyData();

const createHeader = () => {

    doc.setFont('times', 'bold')
    doc.setFontSize(18);
    doc.text("Laporan Kehadiran Asisten", pageWidth / 2, currentY, { align: "center" });

    doc.setFont('times', 'normal')
    doc.setFontSize(14);

    currentY += 8 //18
    doc.text("Lab ICT Terpadu Universitas Budi Luhur", pageWidth / 2, currentY, {
        align: "center"
    });

    currentY += 7 //25
    doc.setLineWidth(0.5);
    doc.line(10, currentY, pageWidth - 10, currentY);
};

const createBodyText = () => {
    doc.setFontSize(12);
    const firstTextX = 15
    const secondTextX = 45
    currentY += 10 //35
    doc.setFont('times', 'bold')
    doc.text('Jumlah hari', firstTextX, currentY)
    doc.setFont('times', 'normal')
    doc.text(': hehe', secondTextX, currentY)

    currentY += 8 //43
    doc.setFont('times', 'bold')
    doc.text('Jumlah hari', firstTextX, currentY)
    doc.setFont('times', 'normal')
    doc.text(': hehe', secondTextX, currentY)
}

const createBodyTable = () => {
    currentY += 10//53
    autoTable(doc, {
        head: [['Name', 'Age', 'Gender', 'City', 'Country', 'Occupation']],
        body: arrayConverter(dummyData),
        startY: currentY,
        styles: {
            font: 'times',
            lineWidth: 0.5,
            lineColor: 'black',
            textColor: 'black',
            fontSize: 12,
            halign: 'center'
        },
        theme: 'grid',
        headStyles: {
            fillColor: '#FFFFFF',
            textColor: 'black',
            lineWidth: 0.5,
            lineColor: 'black',
            halign: 'center'

        }
    })
}

const pdfExporter = () => {
    currentY = startY
    createHeader()
    createBodyText()
    createBodyTable()
    doc.save('example.pdf');
}

export default pdfExporter