export const attendancePost = (req, res) => {
    //in here when add new attendance
}
export const attendancePut = (req, res) => {
    //in here when assistant homeward
}
export const attendanceDelete = (req, res) => {
    //in here when delete attendance
}
export const attendanceGet = (req, res) => {
//     SELECT * FROM asisten INNER JOIN presensi ON asisten.nim = presensi.nim WHERE presensi.tanggal_presensi = '2024-01-12' AND asisten.status='aktif';
// SELECT * FROM asisten LEFT JOIN presensi ON asisten.nim = presensi.nim AND presensi.tanggal_presensi = '2024-01-12' WHERE asisten.status = 'aktif' AND presensi.nim IS NULL;
    //in here when get all attendance
    //inlcude assistant and calas
}
export const attendanceGetAssistant = (req, res) => {
    //in here when get attendance assistant
}
export const attendanceGetCalas = (req, res) => {
    //in here when get all attendance calas
}