import React from 'react'
import Image from 'next/image'

const HardSkillContentProps = [
  { name: 'n8n', level: 4, image:'/images/skillsicon/n8n.png' },
  { name: 'nodejs', level: 4, image:'/images/skillsicon/nodejs.jpeg' },
  { name: 'typescript', level: 4, image:'/images/skillsicon/typescript.png' },
  { name: 'javascript', level: 4, image:'/images/skillsicon/javascript.png' },
  { name: 'react', level: 4, image:'/images/skillsicon/react.png' },
  { name: 'nextjs', level: 4, image:'/images/skillsicon/nextjs.jpeg' },
  { name: 'html5', level: 4, image:'/images/skillsicon/html5.png' },
  { name: 'css3', level: 4, image:'/images/skillsicon/css.png' },
  { name: 'tailwindcss', level: 4, image:'/images/skillsicon/tailwindcss.png' },
  { name: 'postgresql', level: 3, image:'/images/skillsicon/postgresql.png' },
  { name: 'docker', level: 3, image:'/images/skillsicon/docker.jpg' },
  { name: 'git', level: 4, image:'/images/skillsicon/git.png' },
  { name: 'github', level: 4, image:'/images/skillsicon/github.png' },
  { name: 'java', level: 3, image:'/images/skillsicon/java.png' },
  { name: 'python', level: 3, image:'/images/skillsicon/python.png' },
  { name: 'springboot', level: 3, image:'/images/skillsicon/springboot.png' },
  { name: 'make', level: 3, image:'/images/skillsicon/make.jpeg' },
  { name:'wordpress', level: 4, image:'/images/skillsicon/wordpress.png' }
]

   function HardSkillContent() {
  // await new Promise((resolve) => setTimeout(resolve, 0));
  return (
    <div className='flex flex-col w-auto'>
        <div className='flex flex-wrap gap-2 justify-center items-start'>
        {HardSkillContentProps.map((skill) => (
          <div key={skill.level}  >
            <Image src={skill.image} alt={skill.name} title={skill.name} objectFit='cover' width={100} height={100} 
            className='rounded-full p-1 bg-gradient-to-br from-black/50 to-black/70 ring-2 ring-white/10'/>
          
          </div>
        ))} 
        </div>
    </div>
  )
}

export default HardSkillContent