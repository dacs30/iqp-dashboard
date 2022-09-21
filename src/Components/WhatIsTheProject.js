import React from 'react'
import '../App.css';
import { Typography, Card, CardMedia, CardContent, Grid } from '@mui/material'

function WhatIsTheProject() {

    return (
        <div className='section' data-aos='zoom-in' data-aos-delay='300'>
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
                            We analyzed difference datasets for cardiovascular diseases
                            that are used in machine learning models. With that, we found
                            that there is a huge underrepresentation of ethnic minorities.
                            With that said, this website was created as a way to vizualize
                            our findings.
                        </Typography>
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}

export default WhatIsTheProject