import React from 'react'
import '../App.css';
import { Typography, Divider, Grid } from '@mui/material'


function Footer() {
    return (
        <div style={{ backgroundColor: 'rgb(52, 58, 64)', paddingTop: '2rem' }}>
            <footer className='footer'>
                <Grid container spacing={4}>
                    <Grid style={{ textAlign: 'center' }} item xs={12} md={12}>
                        <Typography color='white' variant="h6" component="div" gutterBottom>
                            Credits
                        </Typography>
                    </Grid>
                    <Grid style={{ textAlign: 'center' }} item xs={12} md={12}>
                        <Divider style={{width: '70%', margin: 'auto'}} color='white' variant="middle" />
                    </Grid>
                    <Grid style={{ textAlign: 'center' }} item xs={2} md={2}>
                    </Grid>
                    <Grid style={{ textAlign: 'center' }} item xs={12} md={4}>
                        <Typography color='white' variant="h6" component="div" gutterBottom>
                            Authors
                        </Typography>
                        <Typography color='white' variant="body" component="div" gutterBottom>
                            Danilo Augusto Correia da Silva
                        </Typography>
                        <Typography color='white' variant="body" component="div" gutterBottom>
                            Craig James Dunn
                        </Typography>
                        <Typography color='white' variant="body" component="div" gutterBottom>
                            Liam Rathke
                        </Typography>
                    </Grid>
                    <Grid style={{ textAlign: 'center' }} item xs={12} md={4}>
                        <Typography color='white' variant="h6" component="div" gutterBottom>
                            Advisors
                        </Typography>
                        <Typography color='white' variant="body" component="div" gutterBottom>
                            Emmanuel O. Agu
                        </Typography>
                    </Grid>
                    <Grid style={{ textAlign: 'center' }} item xs={2} md={2}>
                    </Grid>
                    <Grid style={{ textAlign: 'center' }} item xs={12} md={12}>
                        <Typography color='white' variant="h6" component="div" gutterBottom>
                            Institutions
                        </Typography>
                        <Typography color='white' variant="body" component="div" gutterBottom>
                            Worcester Polytechnic Institute
                        </Typography>
                    </Grid>
                </Grid>
            </footer>
        </div>
    )
}

export default Footer