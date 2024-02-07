export const calDateDiff = (isoDate1, isodate2) => {
    const date1 = new Date('2024-02-06');
    const date2 = new Date('2024-02-10');

    const diffInDays = Math.ceil((date2 - date1) / (1000 * 60 * 60 * 24));

    return diffInDays

}

export const isoDateFormater = (isoDate)=> {
    const currentDate = new Date(isoDate);
    const formattedDate = currentDate.toISOString().slice(0, 10);

    return formattedDate
}