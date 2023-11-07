'use client'

import { motion } from 'framer-motion'
import { Contact, Copyright, Intro, Showcase, Skills } from '@/sections'
import { useCursor } from '@/contexts'

export default function Home() {
  const { cursorVariant, variants, cursorRef, cursorText } = useCursor()

  return (
    <>
      <main
        ref={cursorRef}>
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
        <Intro />
        <Showcase />
        <Skills />
        <Contact />
        <Copyright />
      </main>
    </>
  )
}
