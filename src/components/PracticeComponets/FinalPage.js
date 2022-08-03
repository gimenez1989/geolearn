import React from 'react'
import "./finalPage.css"

const FinalPage = ({ points }) => {
  return (
    <div>
      <h2 className='titleFinalPage'>Congratulations!!</h2>
      <h2 className='pointsFinalPage'>{points}/20</h2>
    </div>
  )
}

export default FinalPage