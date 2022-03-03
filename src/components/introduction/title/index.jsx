import React from 'react'
import bgImage from '../../../img/kiran-mama-background.jpg'
export const TitleImage = () => {
  return (
    <div >
      <img className='image-header' width={'100%'} height={'10%'} src={bgImage} alt='kiran-mama' />
      <div className='text-on-image'>
        <h3>Kiran Upadhya</h3>
        <h5>Automobile Expert, Touring Guide, MultiLingual, One Stop Expert</h5>  
      </div>
    </div>
  )
}
