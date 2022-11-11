import React from 'react'
import '../App.css';
import { Typography, Card, CardMedia, CardContent, Grid } from '@mui/material'

function WhatIsTheProject() {

    return (
        <div className='small-section' data-aos='zoom-in' data-aos-delay='300'>
            <div className='card'>
                <Grid container spacing={4}>
                    <Grid style={{display:'flex',justifyContent:'center',alignItems:'center'}} item xs={12} md={6}>
                        <img
                            src={require('../WPI_logo.jpg')}
                            width='80%'
                            alt="WPI"
                            className='card-image'
                            style={{ alignSelf: 'center' }}
                        />
                    </Grid>
                    <Grid style={{textAlign: 'justify'}} item xs={12} md={6}>
                        <Typography variant="h4" component="div" gutterBottom>
                            What is the project about?
                        </Typography>
                        <Typography variant="h6" component="div" gutterBottom>
                            The research project is about the bias of popular datasets used to predict
                            cardiovascular diseases. We focused in how ethinicities are represented in each dataset
                            and how this can affect the results of the models. 
                        </Typography>
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}

export default WhatIsTheProject