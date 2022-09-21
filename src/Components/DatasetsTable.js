import React from 'react'
import '../App.css';
import { Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography, Link } from '@mui/material'

function createData(name, datePublished, citations, ethinicity, gender, link) {
    return { name, datePublished, citations, ethinicity, gender, link };
}

const rows = [
    createData('NHANES 2011-2016', "2011-2016", 2, "Y", "Y", "https://wwwn.cdc.gov/nchs/nhanes/search/datapage.aspx?Component=Questionnaire&CycleBeginYear=2015"),
    createData('NHANES 2018', 2018, 1, "Y", "Y", "https://wwwn.cdc.gov/nchs/nhanes/search/datapage.aspx?Component=Questionnaire&CycleBeginYear=2018"),
    createData('CDC', 2020, 1, "Y", "Y", "https://wwwn.cdc.gov/Nchs/Nhanes/2017-2018/DEMO_J.htm"),
    createData('Heart and Disease Data Set', 1988, 5, "N", "Y", "https://archive.ics.uci.edu/ml/datasets/Heart+Disease"),
];

function DatasetsTable() {
    return (
        <div style={{ backgroundColor: 'GrayText' }} className='section'>
            <div data-aos='zoom-in' className='card' id='table-papers'>
                <Grid container spacing={4}>
                    <Grid style={{ textAlign: 'center' }} item xs={12} md={12}>
                        <Typography variant="h4" component="div" gutterBottom>
                            Datasets
                        </Typography>
                    </Grid>
                    <Grid style={{ textAlign: 'justify' }} item xs={12} md={12}>
                        <Typography variant="h6" component="div" gutterBottom>
                            During our research, the following datasets were used found as the most popular
                            datasets for machine learning models for cardiovascular diseases.
                        </Typography>
                    </Grid>
                    <Grid style={{ textAlign: 'center' }} item xs={12} md={12}>
                        <TableContainer elevation={0} component={Paper}>
                            <Table sx={{ minWidth: 650, maxWidth: 900 }} aria-label="simple table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Name</TableCell>
                                        <TableCell align="right">Date published</TableCell>
                                        <TableCell align="right">Citations found</TableCell>
                                        <TableCell align="right">Have ethinicity</TableCell>
                                        <TableCell align="right">Have gender</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {rows.map((row, index) => (
                                        <TableRow
                                            key={row.name}
                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                        >
                                            <TableCell component="th" scope="row">
                                                <Link href={row.link} target="_blank" rel="noopener">
                                                    {row.name}
                                                </Link>
                                            </TableCell>
                                            <TableCell align="right">{row.datePublished}</TableCell>
                                            <TableCell align="right">{row.citations}</TableCell>
                                            <TableCell align="right">{row.ethinicity}</TableCell>
                                            <TableCell align="right">{row.gender}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Grid>
                    <Grid style={{ textAlign: 'justify' }} item xs={12} md={12}>
                        <Typography variant="body" component="div" gutterBottom>
                            *Note: The link to the dataset is provided in the name of the dataset.
                            **Note: The number of citations found is the number of times the dataset was used in a paper analysed.
                        </Typography>
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}

export default DatasetsTable