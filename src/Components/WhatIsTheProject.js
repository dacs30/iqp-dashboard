import React from 'react'
import { Typography } from '@mui/material'

function WhatIsTheProject() {
  return (
    <div className='section' data-aos='fade-up' data-aos-delay='200'>
        {/* center typography */}
        <div className='section-middle-text'>
            <Typography fontWeight={'bold'} align="center" variant="h2" component="div" gutterBottom>
                What is the project about?
            </Typography>
        </div>
    </div>
  )
}

export default WhatIsTheProject