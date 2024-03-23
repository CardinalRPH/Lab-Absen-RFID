const exportDataArrange = (data = []) => {
    const reArrange = data.map((item, index) => {
        return {
            no: index + 1,
            nim: item.nim,
            nama: item.nama,
            jumlah_hadir: item.jumlah_hadir,
            jumlah_presensi_lembur: item.jumlah_presensi_lembur,
            jumlah_izin: item.jumlah_izin,
            jumlah_keterlambatan: item.jumlah_keterlambatan
        }
    })
    return reArrange
}

export default exportDataArrange