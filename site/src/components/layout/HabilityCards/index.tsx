import React from 'react'
import CardsContent from './CardsContent'

function HabilityCards() {
  return (
    <div className='max-w-[875px] rounded-lg p-6 flex md:flex-col gap-4
    rounded-lg bg-gradient-to-br from-zinc-900/30 via-black/30 to-white/30 backdrop-blur-md flex-wrap flex'>

      <h1 > Formação Academica </h1>
      <CardsContent/>

    </div>
  )
}

export default HabilityCards