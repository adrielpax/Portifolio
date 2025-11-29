import React from 'react'
import GaleryContents from './GaleryContents'

function GaleryProjects() {
  return (
    <div className='max-w-[875px] bg-white/10 border border-white/20 rounded-lg p-6 flex md:flex-col gap-4
    rounded-lg bg-white/5 backdrop-blur-md flex-wrap'>

        <h1 > Galeria de Projetos </h1>
        <GaleryContents/>
    </div>
  )
}

export default GaleryProjects