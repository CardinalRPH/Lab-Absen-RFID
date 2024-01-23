/* eslint-disable react/prop-types */
import { Box, Card, CardContent, Skeleton, Typography } from "@mui/material"
import moment from "moment"
import { useEffect, useState } from "react"

const CurrentDateCard = ({ serverDate, language, setCurrTime }) => {
    const [time, setTime] = useState(new Date(serverDate))

    const currentTime = new Date()
    const diffDate = serverDate?.getTime() - currentTime.getTime()



    const hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();

    const days = time.getDate()
    const months = time.getMonth() + 1
    const years = time.getFullYear()

    const hoursFormated = hours < 10 ? `0${hours}` : hours
    const minutesFormated = minutes < 10 ? `0${minutes}` : minutes
    const secondsFormated = seconds < 10 ? `0${seconds}` : seconds

    const daysFormated = days < 10 ? `0${days}` : days
    const monthsFormated = months < 10 ? `0${months}` : months

    useEffect(() => {
        const intervalId = setInterval(() => {
            const now = new Date();
            const nextUpdate = now.getTime() + diffDate
            setTime(new Date(nextUpdate));
            setCurrTime(moment(new Date(nextUpdate)))
        }, 1000);
        return () => clearInterval(intervalId);
    }, [diffDate, setCurrTime]);



    return (
        <Card sx={{ my: 2 }}>
            <CardContent>
                <Typography>{language?.dateNow}</Typography>
                <Box sx={{ my: 2, display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                    <Typography variant="h4">
                        {serverDate ? `${hoursFormated}:${minutesFormated}:${secondsFormated}` : <Skeleton sx={{ minWidth: 200 }} />}
                    </Typography>
                    <Typography>
                        {serverDate ? `${daysFormated}/${monthsFormated}/${years}` : <Skeleton sx={{ minWidth: 100 }} />}
                    </Typography>
                </Box>

            </CardContent>
        </Card>
    )
}

export default CurrentDateCard