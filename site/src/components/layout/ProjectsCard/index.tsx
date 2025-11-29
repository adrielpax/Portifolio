import React from 'react'
import CardsContent from './CardsContent'

function ProjectCard() {
  return (
    <div className='max-w-[875px] bg-white/10 border border-white/20 rounded-lg p-6 flex md:flex-col gap-4
    rounded-lg bg-white/5 backdrop-blur-md flex-wrap flex'>

      <h1 > Pontos Fortes </h1>
      <CardsContent/>

    </div>
  )
}

export default ProjectCard