import { useState } from 'react';
import '../App.css';
import { Bar, Radar } from 'react-chartjs-2';
import Chart from 'chart.js/auto'
import { Grid, Typography, ToggleButton, ToggleButtonGroup } from '@mui/material'
import ChartDataLabels from 'chartjs-plugin-datalabels';

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

export const optionsRadar = {
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
            text: 'Ethinicty distribution per dataset vs census',
        },
    },
    maintainAspectRatio: false,
};

export const optionsStack = {
    // responsive: true,
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

const labels = ['Caucasians', 'Hispanics', 'African Americans', 'Asians', 'Other'];

export const data = {
    labels,
    datasets: [
        {
            label: 'NHANES 2011-2016',
            data: [32.5, 28, 23.8, 11.2, 4.5],
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
            hidden: false,
        },
        {
            label: 'NHANES 2018',
            data: [33.7, 23.8, 23.1, 12.5, 7],
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
            hidden: false,
        },
        {
            label: 'CDC 2020',
            data: [25, 25, 25, 25],
            backgroundColor: 'rgba(75, 192, 192, 0.5)',
            hidden: false,
        },
        // {
        //     type: 'line',
        //     label: 'Standard Deviation',
        //     data: [2.5, 2.5, 2.5, 2.5, 2.5],
        // }
    ],
};

export const dataRadar = {
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
        {
            label: 'Census 2020',
            data: [61.5, 18.5, 13.4, 5.9, 2.1],
            backgroundColor: 'rgba(255, 205, 86, 0.5)',
        },
    ],
};

export const dataStack = {
    labels,
    datasets: [
        {
            label: 'NHANES 2011-2016',
            data: [32.5, 28, 23.8, 11.2, 4.5],
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
            stack: 'Stack 0',
        },
        {
            label: 'NHANES 2018',
            data: [33.7, 23.8, 23.1, 12.5, 7],
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
            hidden: false,
            stack: 'Stack 0',
        },
        {
            label: 'CDC 2020',
            data: [25, 25, 25, 25],
            backgroundColor: 'rgba(75, 192, 192, 0.5)',
            hidden: false,
            stack: 'Stack 0',
        },
        {
            label: 'Census 2020',
            data: [61.5, 18.5, 13.4, 5.9, 2.1],
            backgroundColor: 'rgba(255, 205, 86, 0.5)',
            hidden: false,
            stack: 'Stack 0',
        },
        // {
        //     type: 'line',
        //     label: 'Standard Deviation',
        //     data: [2.5, 2.5, 2.5, 2.5, 2.5],
        // }
    ],
};

function EthinicityComparison(props) {
    const [alignment, setAlignment] = useState("Radar");

    const graphStyle = props.mobileView ? { height: '500px' } : { height: '10rem' };

    const handleChange = (event, newAlignment) => {
        if (newAlignment !== null) {
            setAlignment(newAlignment);
        }
    };

    return (
        <div className='section'>
            <div data-aos='zoom-in' className='card'>
                <Grid container spacing={4}>
                    <Grid style={{ textAlign: 'center' }} item xs={12} md={12}>
                        <Typography variant="h4" component="div" gutterBottom>
                            Ethinicity distribution
                        </Typography>
                    </Grid>
                    <Grid style={{ textAlign: 'justify' }} item xs={12} md={12}>
                        <Typography variant="body" component="div" gutterBottom>
                            We took each dataset that contained ethinicity as one of each features and compared it's
                            percentages. The following bar graph is the result of the comparison.
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
                        <Typography variant="body" component="div" gutterBottom>
                            Objectives of the visualization:
                        </Typography>
                        <Typography variant="body" component="div" gutterBottom>
                            <ul>
                                <li>Compare ethinicity distribution across the colected datasets</li>
                            </ul>
                        </Typography>
                    </Grid>
                    <Grid style={{ textAlign: 'justify' }} item xs={12} md={12}>
                        <Typography variant="caption" component="div" gutterBottom>
                            *Tip: Click the top labels to filter per dataset.
                        </Typography>
                    </Grid>
                    <Grid style={{ textAlign: 'justify' }} item xs={12} md={12}>
                        <Typography variant="body" component="div" gutterBottom>
                            We can notice that, in general, the datasets are not balanced. The CDC dataset is the only one
                            that is balanced, but it is also the smallest one. The NHANES 2018 dataset is the most
                            unbalanced one, with a huge underrepresentation of African Americans. The NHANES 2011-2016
                            dataset is the second most unbalanced one, with a huge underrepresentation of African
                            Americans and Hispanics. When comparing these datasets with the actual population by the census,
                            we get the following results:
                        </Typography>
                    </Grid>
                    <Grid style={{ textAlign: 'center' }} item xs={12} md={12}>
                        <ToggleButtonGroup
                            color="primary"
                            value={alignment}
                            exclusive
                            onChange={handleChange}
                            aria-label="Platform"
                        >
                            <ToggleButton value="Radar">Radar</ToggleButton>
                            <ToggleButton value="Stacked bar">Stacked bar</ToggleButton>
                        </ToggleButtonGroup>
                    </Grid>
                    <Grid style={{ textAlign: 'center' }} item xs={12} md={12}>
                        <div className='chartContainer'>
                            {alignment === "Radar" && <Radar style={graphStyle} data-aos-once='true' data-aos="zoom-in" data={dataRadar} options={optionsRadar} />}
                            {alignment === "Stacked bar" && <Bar style={graphStyle} data-aos-once='true' data-aos="zoom-in" data={dataStack} options={optionsStack} plugins={[ChartDataLabels]} />}
                        </div>
                    </Grid>
                    <Grid style={{ textAlign: 'justify' }} item xs={12} md={12}>
                        <Typography variant="body" component="div" gutterBottom>
                            Objectives of the visualization:
                        </Typography>
                        <Typography variant="body" component="div" gutterBottom>
                            <ul>
                                <li>Highlight the difference in ethinicity distribution when compared to the national census</li>
                            </ul>
                        </Typography>
                    </Grid>
                    <Grid style={{ textAlign: 'justify' }} item xs={12} md={12}>
                        <Typography variant="body" component="div" gutterBottom>
                            We can notice that the two NHANES datasets are very similar to the actual population, but still
                            with a better representation of African Americans and Hispanics. The CDC dataset is the most
                            equally distributed dataset.
                        </Typography>
                        <Typography variant="body" component="div" gutterBottom>
                            When working with machine learning classification models, it is important to have a balanced
                            dataset. If the dataset is not balanced, the model will be biased towards the majority class.
                            This means that the model will be more likely to predict the majority class, even if the
                            minority class is the one that we are interested in. This is a problem because it will
                            decrease the accuracy of the model. To solve this problem, we can use a technique called
                            oversampling. Oversampling is a technique that consists of creating new samples of the
                            minority class. This technique is used to increase the number of samples of the minority class
                            and balance the dataset. We can see this technique being used in the CDC dataset.
                        </Typography>
                    </Grid>
                </Grid>
            </div>
        </div>
    );
}

export default EthinicityComparison