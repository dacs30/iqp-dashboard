import React from 'react'
import '../App.css';
import { Typography, Card, CardMedia, CardContent, Grid, Link } from '@mui/material'
import { Bar } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';


const labels = ['Black', 'White'];

export const options = {
    // responsive: true,
    scales: {
        y: {
            ticks: {
                format: 'percentage',
                callback: function (value, index, values) {
                    return value + '%';
                }
            }
        }
    },
    plugins: {
        legend: {
            position: 'top',
        },
        title: {
            display: true,
            text: 'Ethinicty distribution per dataset',
        },
    },
    maintainAspectRatio: false,
};

export const data = {
    labels,
    datasets: [
        {
            label: 'Race Specific Algorithms',
            data: [88, 89],
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
            hidden: false,
        },
        {
            label: 'Non-Race Specific',
            data: [81, 80],
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
            hidden: false,
        },
        // {
        //     type: 'line',
        //     label: 'Standard Deviation',
        //     data: [2.5, 2.5, 2.5, 2.5, 2.5],
        // }
    ],
};

function HowBigIsTheProblem() {
    return (
        <div className='section' data-aos='zoom-in' data-aos-delay='300'>
            <div className='card'>
                <Grid container spacing={4}>
                    <Grid style={{ textAlign: 'center' }} item xs={12} md={12}>
                        <Typography variant="h4" component="div" gutterBottom>
                            How big is the problem?
                        </Typography>
                    </Grid>
                    <Grid style={{ textAlign: 'justify' }} item xs={12} md={12}>
                        <Typography variant="h6" component="div" gutterBottom>
                            When using machine learning models to predict cardiovascular diseases,
                            data such as ethinicity, age, and gender, play a huge role in creating higher
                            accuracy models. The following graph shows the difference in accuracym between
                            models that have a balanced ethinicity as a feature and models that don't.
                        </Typography>
                    </Grid>
                    <Grid style={{ textAlign: 'center' }} item xs={12} md={12}>
                        <div className='chartContainer'>
                            <Bar
                                data={data}
                                options={options}
                                plugins={[ChartDataLabels]}
                            />
                        </div>
                    </Grid>
                    <Grid style={{ textAlign: 'justify' }} item xs={12} md={12}>
                        <Typography variant="caption" component="div" gutterBottom>
                            <Link href="https://www.ahajournals.org/doi/full/10.1161/CIRCULATIONAHA.120.053134?rfr_dat=cr_pub++0pubmed&url_ver=Z39.88-2003&rfr_id=ori%3Arid%3Acrossref.org"
                                target="_blank" rel="noopener">
                                Data Source
                            </Link>
                        </Typography>
                    </Grid>
                    <Grid style={{ textAlign: 'justify' }} item xs={12} md={12}>
                        <Typography variant="h6" component="div" gutterBottom>
                            It is noticible how ethinicity can increase results. It is also more alarming
                            to think of that a huge portion of current in use models were trained using
                            datasets that not even have ethinicity as a feature.
                        </Typography>
                        {/* <Typography variant="h6" component="div" gutterBottom>
                            It is noticible how ethinicity can increase results. However, it is important to
                            mention that, at the same time that it is beneficial to have good, distributed, data
                            that contains ethinicty, there are also studies that bring new mathematical approaches
                            that eliminate the need for ethinicty as a feature. This is the case of the following
                        </Typography> */}
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}

export default HowBigIsTheProblem