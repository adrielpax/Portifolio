// components/SlideWrapper.tsx
import { AnimatePresence, motion } from 'framer-motion'
import { ReactNode, useState } from 'react'

type Props = {
  currentIndex: number
  children: ReactNode[]
  onNavigate: (index: number) => void
}

export default function SlideWrapper({ currentIndex, children, onNavigate }: Props) {
  const [direction, setDirection] = useState(0)

  const handleDragEnd = (_: any, info: any) => {
    if (info.offset.x < -100 && currentIndex < children.length - 1) {
      setDirection(1)
      onNavigate(currentIndex + 1)
    } else if (info.offset.x > 100 && currentIndex > 0) {
      setDirection(-1)
      onNavigate(currentIndex - 1)
    }
  }

  return (
    <div className="relative w-full h-full overflow-hidden">
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={currentIndex}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          onDragEnd={handleDragEnd}
          initial={{ x: direction * 300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -direction * 300, opacity: 0 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          className="absolute inset-0 flex items-center justify-center touch-pan-x cursor-grab active:cursor-grabbing"
        >
          {children[currentIndex]}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
