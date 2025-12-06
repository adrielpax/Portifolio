import React from 'react'
import GaleryContents from './GaleryContents'

function GaleryProjects() {
  return (
    <div className='max-w-[875px] rounded-lg p-6 flex md:flex-col gap-4
    rounded-lg flex-wrap justify-center'>

        <h1 > Galeria de Projetos </h1>
        <GaleryContents/>
    </div>
  )
}

export default GaleryProjects