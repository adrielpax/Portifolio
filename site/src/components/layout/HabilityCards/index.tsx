import React from 'react'
import CardsContent from './CardsContent'

function HabilityCards() {
  return (
    <div className='max-w-[875px] rounded-lg p-6 flex md:flex-col gap-4
    rounded-lg backdrop-blur-md flex-wrap flex'>

      <h1 > Pontos Fortes </h1>
      <CardsContent/>

    </div>
  )
}

export default HabilityCards