import React from 'react'
import Progressbar from '../../components/Progressbar'
import TSPInformation from '../../components/TSPInformation'

const TutorSignup = () => {
  return (
    <div className='relative'>
      <Progressbar currentStep={0} />
      <TSPInformation/>
    </div>
    
  )
}

export default TutorSignup
