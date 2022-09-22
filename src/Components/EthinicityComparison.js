import { React } from 'react';
import '../App.css';
import { Bar } from 'react-chartjs-2';
import Chart from 'chart.js/auto'
import { Grid, Typography } from '@mui/material'

export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top',
        },
        title: {
            display: true,
            text: 'Ethinicty distribution per dataset',
        },
    },
};

const labels = ['Caucasians', 'Hispanics', 'African American', 'Asians', 'Other'];

export const data = {
    labels,
    datasets: [
        {
            label: 'NHANES 2011-2016',
            data: [32.5, 28, 23.8, 11.2, 4.5],
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },
        {
            label: 'NHANES 2018',
            data: [33.7, 23.8, 23.1, 12.5, 7],
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
        },
        {
            label: 'CDC 2020',
            data: [25, 25, 25, 25],
            backgroundColor: 'rgba(75, 192, 192, 0.5)',
        },
    ],
};

function EthinicityComparison() {

    return (
        <div className='section' style={{ backgroundColor: 'rgb(52, 58, 64)' }}>
            <div data-aos='zoom-in' className='card'>
                <Grid container spacing={4}>
                    <Grid style={{ textAlign: 'center' }} item xs={12} md={12}>
                        <Typography variant="h4" component="div" gutterBottom>
                            Ethinicity distribution
                        </Typography>
                    </Grid>
                    <Grid style={{ textAlign: 'justify' }} item xs={12} md={12}>
                        <Typography variant="h6" component="div" gutterBottom>
                            We took each dataset that contained ethinicity as one of each features and compared it's
                            percentages. The following bar graph is the result of the comparison.
                        </Typography>
                    </Grid>
                    <Grid style={{ textAlign: 'center' }} item xs={12} md={12}>
                        <Bar
                            data={data}
                            options={options}
                        />
                    </Grid>
                    <Grid style={{ textAlign: 'justify' }} item xs={12} md={12}>
                        <Typography variant="body" component="div" gutterBottom>
                            *Tip: Click the top labels to filter per dataset.
                        </Typography>
                    </Grid>
                </Grid>
            </div>
        </div>
    );
}

export default EthinicityComparison