export default () => {
    const curDateTime = new Date()

    const year = curDateTime.getFullYear()
    const month = String(curDateTime.getMonth() + 1).padStart(2, "0");
    const day = String(curDateTime.getDate()).padStart(2, "0");

    const hours = String(curDateTime.getHours()).padStart(2, "0");
    const minutes = String(curDateTime.getMinutes()).padStart(2, "0");
    const seconds = String(curDateTime.getSeconds()).padStart(2, "0");

    const formattedDate = `${year}-${month}-${day}`;
    const formattedTime = `${hours}:${minutes}:${seconds}`;

    return { formattedDate, formattedTime }
}