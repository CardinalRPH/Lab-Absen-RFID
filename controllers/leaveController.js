export const leavePost = (req, res) => {
    //in here when add new leave assistant
    const { nim, info, dateS, dateE } = req.body

    if (!nim, !info, !dateS) {
        res.status(400).json({
            error: 'Bad Request: some key not appears'
        })
        return
    }
}
export const leavePut = (req, res) => {
    //in here when edit leave assistant
}
export const leaveDelete = (req, res) => {
    //in here when delete leave assistant
}
export const leaveGet = (req, res) => {
    //in here when get all leave assistant
}