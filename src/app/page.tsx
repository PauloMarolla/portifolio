'use client'

import { motion } from 'framer-motion'
import { Contact, Copyright, Intro, Showcase, Skills } from '@/sections'
import { useCursor } from '@/contexts'
import { useMediaQuery } from 'react-responsive'

export default function Home() {
  const isSm = useMediaQuery({ minWidth: 678 })
  const { cursorVariant, variants, cursorRef, cursorText } = useCursor()

  return (
    <>
      <main
        ref={cursorRef}
      >
        {isSm && (
          <motion.div
            transition={{
              type: 'spring',
              stiffness: 500,
              damping: 28
            }}
            className='cursor'
            variants={variants}
            animate={cursorVariant}
          >
            <span className='cursorText'>{cursorText}</span>
          </motion.div>
        )}
        <Intro />
        <Showcase />
        <Skills />
        <Contact />
        <Copyright />
      </main>
    </>
  )
}
