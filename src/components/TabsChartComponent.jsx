/* eslint-disable react/prop-types */
import { Box, CircularProgress, Tab, Tabs, Typography } from "@mui/material"
import { BarChart, PieChart } from "@mui/x-charts";
import { useState } from "react";

const CustomTabPanel = (props) => {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3, alignItems: 'center', display: 'flex', flexDirection: 'column' }}>
                    {children}
                </Box>
            )}
        </div>
    );
}


function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const barChartSetting = {
    yAxis: [
        {
            label: 'Asisten',
        },
    ],
    width: 400,
    height: 300,
};
const valueFormatter = (value) => `${value} Asisten`;

const renderLoading = () => {
    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', minHeight: 300 }}>
            <CircularProgress size={80} />
        </Box>
    )
}



const TabsChartComponent = ({ data, loading }) => {

    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <Box sx={{ width: '100%' }}>
            {loading ? renderLoading() : (
                <>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <Tabs centered value={value} onChange={handleChange} aria-label="basic tabs example">
                            <Tab label="Fakultas & Jurusan" {...a11yProps(0)} />
                            <Tab label="Jenis Kelamin" {...a11yProps(1)} />
                            <Tab label="Tahun Masuk" {...a11yProps(2)} />
                            <Tab label="Jabatan" {...a11yProps(3)} />
                        </Tabs>
                    </Box>
                    <CustomTabPanel value={value} index={0}>
                        <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
                            <BarChart
                                dataset={data.fakultas.fti.data}
                                xAxis={[{ scaleType: 'band', dataKey: 'name' }]}
                                series={[
                                    { dataKey: 'teknik_informatika', label: 'Teknik \nInformatika', valueFormatter },
                                    { dataKey: 'sistem_informasi', label: 'Sistem \nInformasi', valueFormatter },
                                    { dataKey: 'sistem_komputer', label: 'Sistem \nKomputer', valueFormatter },
                                ]}
                                slotProps={{
                                    legend: {
                                        direction: 'column',
                                        position: { vertical: 'middle', horizontal: 'right' },
                                    },
                                }}
                                margin={{
                                    left: 40,
                                    right: 155,
                                    top: 80,
                                    bottom: 80,
                                }}
                                {...barChartSetting}
                            />
                            <BarChart
                                dataset={data.fakultas.fe.data}
                                xAxis={[{ scaleType: 'band', dataKey: 'name' }]}
                                series={[
                                    { dataKey: 'managemen', label: 'Managemen', valueFormatter },
                                    { dataKey: 'akuntansi', label: 'Akuntansi', valueFormatter },
                                ]}
                                slotProps={{
                                    legend: {
                                        direction: 'column',
                                        position: { vertical: 'middle', horizontal: 'right' },
                                    },
                                }}
                                margin={{
                                    left: 40,
                                    right: 155,
                                    top: 80,
                                    bottom: 80,
                                }}
                                {...barChartSetting}
                            />
                            <BarChart
                                dataset={data.fakultas.ft.data}
                                xAxis={[{ scaleType: 'band', dataKey: 'name' }]}
                                series={[
                                    { dataKey: 'arsitektur', label: 'Arsitektur', valueFormatter },
                                    { dataKey: 'teknik_lektro', label: 'Teknik \nElektro', valueFormatter },
                                ]}
                                slotProps={{
                                    legend: {
                                        direction: 'column',
                                        position: { vertical: 'middle', horizontal: 'right' },
                                    },
                                }}
                                margin={{
                                    left: 40,
                                    right: 155,
                                    top: 80,
                                    bottom: 80,
                                }}
                                {...barChartSetting}
                            />
                            <BarChart
                                dataset={data.fakultas.fisip.data}
                                xAxis={[{ scaleType: 'band', dataKey: 'name' }]}
                                series={[
                                    { dataKey: 'hubungan_internasional', label: 'Hubungan \nInternasional', valueFormatter },
                                    { dataKey: 'kriminologi', label: 'Kriminologi', valueFormatter },
                                ]}
                                slotProps={{
                                    legend: {
                                        direction: 'column',
                                        position: { vertical: 'middle', horizontal: 'right' },
                                    },
                                }}
                                margin={{
                                    left: 40,
                                    right: 155,
                                    top: 80,
                                    bottom: 80,
                                }}
                                {...barChartSetting}
                            />
                        </Box>

                    </CustomTabPanel>
                    <CustomTabPanel value={value} index={1}>
                        <PieChart
                            series={[{
                                ...data.jenis_kelamin,
                                innerRadius: 30,
                                outerRadius: 100,
                                paddingAngle: 2,
                                cornerRadius: 5,
                                startAngle: -90,
                                endAngle: 180,
                                cx: 150,
                                cy: 150,

                            }]}
                            width={400}
                            height={300}
                            slotProps={{
                                legend: {
                                    direction: 'row',
                                    position: { vertical: 'bottom', horizontal: 'middle' },
                                },
                            }}
                            margin={{
                                left: 50,
                                right: 50,
                                top: 0,
                                bottom: 50,
                            }}
                        />
                        <Typography sx={{ margin: 2 }}>{`Total ${data.jenis_kelamin.total} Asisten`}</Typography>
                    </CustomTabPanel>
                    <CustomTabPanel value={value} index={2}>
                        <PieChart
                            series={[{
                                ...data.tahun_masuk,
                                innerRadius: 30,
                                outerRadius: 100,
                                paddingAngle: 2,
                                cornerRadius: 5,
                                startAngle: -90,
                                endAngle: 180,
                                cx: 150,
                                cy: 150,

                            }]}
                            width={400}
                            height={300}
                            slotProps={{
                                legend: {
                                    direction: 'row',
                                    position: { vertical: 'bottom', horizontal: 'middle' },
                                    padding: 0,
                                },
                            }}
                            margin={{
                                left: 50,
                                right: 50,
                                top: 0,
                                bottom: 50,
                            }}
                        />
                        <Typography sx={{ margin: 2 }}>{`Total ${data.tahun_masuk.total} Asisten`}</Typography>
                    </CustomTabPanel>
                    <CustomTabPanel value={value} index={3}>
                        <PieChart
                            series={[{
                                ...data.jabatan,
                                innerRadius: 30,
                                outerRadius: 100,
                                paddingAngle: 2,
                                cornerRadius: 5,
                                startAngle: -90,
                                endAngle: 180,
                                cx: 150,
                                cy: 150,

                            }]}
                            width={400}
                            height={300}
                            slotProps={{
                                legend: {
                                    direction: 'row',
                                    position: { vertical: 'bottom', horizontal: 'middle' },
                                    padding: 0,
                                },
                            }}
                            margin={{
                                left: 50,
                                right: 50,
                                top: 0,
                                bottom: 50,
                            }}

                        />
                        <Typography sx={{ margin: 2 }}>{`Total ${data.jabatan.total} Asisten`}</Typography>
                    </CustomTabPanel>
                </>
            )}

        </Box>
    );
}

export default TabsChartComponent