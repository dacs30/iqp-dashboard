import React from 'react'
import '../App.css';
import { Typography, Grid } from '@mui/material'

function Conclusion() {
    return (
        <div className='small-section' data-aos='zoom-in' data-aos-delay='300'>
            <div className='card'>
                <Grid container spacing={4}>
                    <Grid style={{ textAlign: 'justify' }} order={{ md: 1, sm: 2, xs:2 }} item xs={12} md={6}>
                        <Typography style={{textAlign: 'center'}} variant="h4" component="div" gutterBottom>
                            Conclusion
                        </Typography>
                        <Typography variant="body" component="div" gutterBottom>
                            Datasets that are used in machine learning models are still very unbalanced.
                            It is important that, when training a model, all popoulations are represented
                            equally. This is not only important for the fairness of the model, but also
                            for the accuracy of the model. If a model is trained on a dataset that is
                            unbalanced, it will not be able to predict the outcome of a population that
                            is not represented in the dataset. In addition to that, we also found how
                            beneficial it is to have ethinicity as a feature in a model. With that said, 
                            for better results and predictions of CDVs, the datasets should both contain 
                            ethinicity and also be balanced across diferent populations.
                        </Typography>
                    </Grid>
                    <Grid order={{ md: 2, sm: 1, xs: 1 }} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} item xs={12} md={6}>
                        <img
                            src={require('../clipboard.png')}
                            width='80%'
                            alt="WPI"
                            className='card-image'
                            style={{ alignSelf: 'center' }}
                        />
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}

export default Conclusion