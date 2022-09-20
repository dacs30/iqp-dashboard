import { Typography } from '@mui/material'
import React from 'react'
import ParticlesBg from 'particles-bg'

function IntroductionsBlock() {
  return (
    <div style={{"height": "100hv"}}>
        {/* center the ypography */}
        <div style={{"position": "absolute", "top": "50%", "left": "50%", "transform": "translate(-50%, -50%)"}}>
            <Typography fontWeight={'bold'} align="center" variant="h2" component="div" gutterBottom>
                Underrepresentation in Machine Learning Datasets for CVD
            </Typography>
        </div>
        <ParticlesBg type="cobweb" bg={true} />
    </div>
  )
}

export default IntroductionsBlock