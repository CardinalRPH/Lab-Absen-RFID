const dateFormater = (isoTimeString, region = "id-ID") => {
    const dateObject = new Date(isoTimeString);

    const options = { year: "numeric", month: "long", day: "numeric" };
    const formattedDate = new Intl.DateTimeFormat(region, options).format(dateObject);
    return formattedDate
}

export default dateFormater